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
    { src: "assets/images/death.webp", alt: "Tarot card depicting death", 
        text: "Most times, people take the name of the card literally. However, the real meaning within the Death card is one of the most positive in the whole deck. The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open."},
    { src: "assets/images/judgement.webp", alt: "Tarot card depicting judgement", 
        text: "The traditional Judgement meaning focuses on the moment when we reflect and evaluate ourselves and our actions. To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection."},
    { src: "assets/images/justice.webp", alt: "Tarot card depicting justice",
        text: "Justice signals that a  judgement will be made. The decisions that you make now have long-term effects in all things, both for yourself and others. If you have been wronged, this card's appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning."},
    { src: "assets/images/strength.webp", alt: "Tarot card depicting strength",
        text: "This card shows that you have the inner strength and fortitude you need to see you through moments of danger and distress. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind."},
    { src: "assets/images/temperance.webp", alt: "Tarot card depicting temperance",
        text: "The Temperance tarot card suggests moderation and balance, coupled with a lot of patience. It implies that you have a clear vision and know what you want to achieve. It may also indicate a time to evaluate and re-examine the priorities you have chosen, to find more balance with your inner self."},
    { src: "assets/images/the-magician.webp", alt: "Tarot card depicting the magician",
        text: "The magician is the representation of pure willpower. The time is right to tap into your full potentail. Remember that you are powerful, create your inner world, and the outer will follow."},
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
        gameBtn.innerText = "Reveal First Card"

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
        gameBtn.innerText = "Reveal First Card"
        navigationArrows();
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
    document.getElementById("past-text-content").innerText = card.text;
}

/**
 * Flips the middle card to reveal a tarot card and meaning
 */
function flipMiddle() {
    document.getElementById("middle-game-card").setAttribute("src", card.src);
    document.getElementById("middle-game-card").setAttribute("alt", card.alt);
    document.getElementById("middle-card-flip").classList.add("flipped");
    document.getElementById("present-text").classList.remove("hidden");
    document.getElementById("present-text-content").innerText = card.text;
}

/**
 * Flips the right card to reveal a tarot card and meaning
 */
function flipRight() {
    document.getElementById("right-game-card").setAttribute("src", card.src);
    document.getElementById("right-game-card").setAttribute("alt", card.alt);
    document.getElementById("right-card-flip").classList.add("flipped");
    document.getElementById("future-text").classList.remove("hidden");
    document.getElementById("future-text-content").innerText = card.text;
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
        document.getElementById("text-slide").classList.remove("slide-middle");
        document.getElementById("text-slide").classList.remove("slide-right");

    } else if (currentIndex === 1) {

        document.getElementById("slide-strip").classList.add("slide-middle");
        document.getElementById("slide-strip").classList.remove("slide-right");
        document.getElementById("text-slide").classList.add("slide-middle");
        document.getElementById("text-slide").classList.remove("slide-right");

    } else if (currentIndex === 2) {

        document.getElementById("slide-strip").classList.remove("slide-middle");
        document.getElementById("slide-strip").classList.add("slide-right");
        document.getElementById("text-slide").classList.remove("slide-middle");
        document.getElementById("text-slide").classList.add("slide-right");
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
