// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function () {

    //Get the navbar button and apply event listener
    let navBtn = document.getElementById("menu-btn");

    navBtn.addEventListener("click", function () {
        document.getElementById("nav-menu").classList.toggle("hidden");
    })

    //Get the card game button and apply event listener
    let gameBtn = document.getElementById("game-btn");

    if (screen.width < 768) {

        gameBtn.addEventListener("click", tarotMobile);

    } else {

        gameBtn.addEventListener("click", tarotGame);

    }
})

//defined outside the function so it doesn't reset every time
let card;
let i;
let clicks = 0;
let usedCards = [];
let currentIndex = 0;
let maxRevealedIndex = 0;

//defined in the global scope to be available to both game variations
const cards = [
        { src: "assets/images/death.webp", alt: "Tarot card depicting death", },
        { src: "assets/images/judgement.webp", alt: "Tarot card depicting judgement" },
        { src: "assets/images/justice.webp", alt: "Tarot card depicting justice" },
        { src: "assets/images/strength.webp", alt: "Tarot card depicting strength" },
        { src: "assets/images/temperance.webp", alt: "Tarot card depicting temperance" },
        { src: "assets/images/the-magician.webp", alt: "Tarot card depicting the magician" },
]

/**
 * The game loop called when the game button is first clicked
 */
function tarotGame() {
    
    let gameBtn = document.getElementById("game-btn");

    if (clicks === 0) {
        //First card - any random number
        randomNumber();

        usedCards.push(card.src); //Store used card

        flipLeft();
        gameBtn.innerText = "Reveal Second Card";
        clicks++;

    } else if (clicks === 1) {
        //Second card - generate random number
        randomNumber();

        //Check number not in use and generate a new one if needed
        checkNumber();

        usedCards.push(card.src); //Store used card
        flipMiddle();
        gameBtn.innerText = "Reveal Third Card";
        clicks++;

    } else if (clicks === 2) {
        //Third card - generate random number
        randomNumber();

        //Check number not in use and generate a new one if needed
        checkNumber();

        flipRight();
        gameBtn.innerText = "Reset The Cards";
        clicks++;

    } else if (clicks === 3) {
        
        gameReset();

    }
}

/**
 * The game optimised for mobile 
 */
function tarotMobile() {
    
    let gameBtn = document.getElementById("game-btn");

    if (clicks === 0) {
        //First card - any random number
        randomNumber();

        usedCards.push(card.src); //Store used card

        flipLeft();
        gameBtn.innerText = "Draw Next Card";
        clicks++;

    } else if (clicks === 1) {

        currentIndex = 1;
        slideCards();
        gameBtn.innerText = "Reveal Second Card";
        maxRevealedIndex = 1;
        clicks++;


    } else if (clicks === 2) {
        //Second card - generate random number
        randomNumber();

        //Check number not in use and generate a new one if needed
        checkNumber();

        usedCards.push(card.src); //Store used cards

        if (currentIndex != 1) {

            currentIndex = 1;
            slideCards();

        } else {

            flipMiddle();
            gameBtn.innerText = "Draw Next Card";
            clicks++;

        }

    } else if (clicks === 3) {

        currentIndex = 2;
        slideCards();
        gameBtn.innerText = "Reveal Third Card";
        maxRevealedIndex = 2;
        clicks++;

    } else if (clicks === 4) {
        //Third card - generate random number
        randomNumber();

        //Check number not in use and generate a new one if needed
        checkNumber();

        if (currentIndex != 2) {

            currentIndex = 2;
            slideCards();

        } else {
            flipRight();
            gameBtn.innerText = "Reset The Cards";
            clicks++;
        }

    } else if (clicks === 5) {
        gameReset();
    }
}
/**
 * Generate a random card index
 */
function randomNumber() {
    i = Math.floor(Math.random() * 6);
    card = cards[i];
}

/**
 * Check if number already used and generate another if needed
 */
function checkNumber() {
    while (usedCards.includes(card.src)) {
        i = Math.floor(Math.random() * 6);
        card = cards[i];
    }
}

/**
 * Flips the first card to reveal a tarot card and meaning
 */
function flipLeft() {
    document.getElementById("left-game-card").setAttribute("src", card.src);
    document.getElementById("left-game-card").setAttribute("alt", card.alt);
    document.getElementById("left-card-flip").classList.add("flipped");
    document.getElementById("past-text").classList.remove("hidden");
}

/**
 * Flips the middle card to reveal a tarot card and meaning
 */
function flipMiddle() {
    document.getElementById("middle-game-card").setAttribute("src", card.src);
    document.getElementById("middle-game-card").setAttribute("alt", card.alt);
    document.getElementById("middle-card-flip").classList.add("flipped");
    document.getElementById("present-text").classList.remove("hidden");
}

/**
 * Flips the right card to reveal a tarot card and meaning
 */
function flipRight() {
    document.getElementById("right-game-card").setAttribute("src", card.src);
    document.getElementById("right-game-card").setAttribute("alt", card.alt);
    document.getElementById("right-card-flip").classList.add("flipped");
    document.getElementById("future-text").classList.remove("hidden");
}

/**
 * Resets the game to begin again
 */
function gameReset() {
    //Reset all classes to first state
    document.getElementById("left-card-flip").classList.remove("flipped");
    document.getElementById("middle-card-flip").classList.remove("flipped");
    document.getElementById("right-card-flip").classList.remove("flipped");
    document.getElementById("past-text").classList.add("hidden");
    document.getElementById("present-text").classList.add("hidden");
    document.getElementById("future-text").classList.add("hidden");
    gameBtn.innerText = "Reveal First Card"

    //Remove all stored data from variables
    clicks = 0; 
    currentIndex = 0;
    maxRevealedIndex = 0;
    usedCards = [];
}

/**
 * Card slide function to allow for improved game experience on mobile
 */
function slideCards() {

    if (currentIndex === 0) {

        document.getElementById("slide-strip").classList.remove("slide-middle");
        document.getElementById("slide-strip").classList.remove("slide-right");
        document.getElementById("arrow-left").classList.add("hidden");

    } else if (currentIndex === 1) {

        document.getElementById("slide-strip").classList.add("slide-middle");
        document.getElementById("slide-strip").classList.remove("slide-right");

    } else if (currentIndex === 2) {

        document.getElementById("slide-strip").classList.remove("slide-middle");
        document.getElementById("slide-strip").classList.add("slide-right");
    }

    navigationArrows();
}

function navigationArrows() {

    const arrowLeft = document.getElementById("arrow-left");
    const arrowRight = document.getElementById("arrow-right");

    //Left arrow shows only when left scroll is appropriate
    if (currentIndex > 0) {
        arrowLeft.classList.remove("hidden");
        arrowLeft.addEventListener("click", decreaseCurrentIndex)
    } else {
        arrowLeft.classList.add("hidden");
    }

    //Right arrow shows only when right scroll is appropriate
    if (currentIndex < maxRevealedIndex) {
        arrowRight.classList.remove("hidden");
        arrowRight.addEventListener("click", increaseCurrentIndex)
    } else {
        arrowRight.classList.add("hidden");
    }
}

/**
 * Slide left to previously viewed cards
 */
function decreaseCurrentIndex() {
    if (currentIndex > 0) {
        --currentIndex;
        slideCards();
    }
}

/**
 * Slide right to previously revealed cards
 */
function increaseCurrentIndex() {
    if (currentIndex < maxRevealedIndex) {
        ++currentIndex;
        slideCards();
    }
}
