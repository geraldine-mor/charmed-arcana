// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function() {

    //Get the navbar button and apply event listener
    let navBtn = document.getElementById("menu-btn");

    navBtn.addEventListener("click", function() {
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
let clicks = 0; 
let usedCards = [];
let currentIndex = 0;
let maxRevealedIndex = 0;

/**
 * The game loop called when the game button is first clicked
 */
function tarotGame() {
    const cards = [
        {src: "assets/images/death.webp", alt: "Tarot card depicting death",},
        {src: "assets/images/judgement.webp", alt: "Tarot card depicting judgement"},
        {src: "assets/images/justice.webp", alt: "Tarot card depicting justice"},
        {src: "assets/images/strength.webp", alt: "Tarot card depicting strength"},
        {src: "assets/images/temperance.webp", alt: "Tarot card depicting temperance"},
        {src: "assets/images/the-magician.webp", alt: "Tarot card depicting the magician"},
    ]

    let gameBtn = document.getElementById("game-btn");    
        
        if (clicks === 0) {
            //First card - any random number
            let i = Math.floor(Math.random()*6);
            let card = cards[i];
            usedCards.push(card.src); //Store used card

            document.getElementById("left-game-card").setAttribute("src", card.src);
            document.getElementById("left-game-card").setAttribute("alt", card.alt);
            document.getElementById("left-card-flip").classList.add("flipped");
            document.getElementById("past-text").classList.remove("hidden");
            gameBtn.innerText = "Reveal Second Card";
            clicks++;

        } else if (clicks === 1) {
            //Second card - generate random number
            let i = Math.floor(Math.random()*6);
            let card = cards[i];

            //Check number not in use and generate a new one if needed
            while (usedCards.includes(card.src)) { 
                i = Math.floor(Math.random()*6);
                card = cards[i];
            }

            usedCards.push(card.src); //Store used card

            document.getElementById("middle-game-card").setAttribute("src", card.src);
            document.getElementById("middle-game-card").setAttribute("alt", card.alt);
            document.getElementById("middle-card-flip").classList.add("flipped");
            document.getElementById("present-text").classList.remove("hidden");
            gameBtn.innerText = "Reveal Third Card";    
            clicks++;

        } else if (clicks === 2) {
            //Third card - generate random number
            let i = Math.floor(Math.random()*6);
            let card = cards[i];

            //Check number not in use and generate a new one if needed
            while (usedCards.includes(card.src)) { 
                i = Math.floor(Math.random()*6);
                card = cards[i];
            }

            document.getElementById("right-game-card").setAttribute("src", card.src);
            document.getElementById("right-game-card").setAttribute("alt", card.alt);
            document.getElementById("right-card-flip").classList.add("flipped");
            document.getElementById("future-text").classList.remove("hidden");
            gameBtn.innerText = "Reset The Cards"; 
            clicks++;

        } else if (clicks === 3) {
            //Reset the game
            document.getElementById("left-card-flip").classList.remove("flipped");
            document.getElementById("middle-card-flip").classList.remove("flipped");
            document.getElementById("right-card-flip").classList.remove("flipped");
            document.getElementById("past-text").classList.add("hidden");
            document.getElementById("present-text").classList.add("hidden");
            document.getElementById("future-text").classList.add("hidden");
            gameBtn.innerText = "Reveal First Card"
            clicks = 0;
        }
}

/**
 * The game optimised for mobile 
 */
function tarotMobile() {
    const cards = [
        {src: "assets/images/death.webp", alt: "Tarot card depicting death",},
        {src: "assets/images/judgement.webp", alt: "Tarot card depicting judgement"},
        {src: "assets/images/justice.webp", alt: "Tarot card depicting justice"},
        {src: "assets/images/strength.webp", alt: "Tarot card depicting strength"},
        {src: "assets/images/temperance.webp", alt: "Tarot card depicting temperance"},
        {src: "assets/images/the-magician.webp", alt: "Tarot card depicting the magician"},
    ]

    let gameBtn = document.getElementById("game-btn");    
        
        if (clicks === 0) {
            //First card - any random number
            let i = Math.floor(Math.random()*6);
            let card = cards[i];
            usedCards.push(card.src); //Store used card

            document.getElementById("left-game-card").setAttribute("src", card.src);
            document.getElementById("left-game-card").setAttribute("alt", card.alt);
            document.getElementById("left-card-flip").classList.add("flipped");
            document.getElementById("past-text").classList.remove("hidden");
            gameBtn.innerText = "Draw Next Card";
            clicks++;

        } else if (clicks === 1) {  

            currentIndex = 1;
            slideCards();
            arrowLeft();
            gameBtn.innerText = "Reveal Second Card";
            maxRevealedIndex = 1;
            clicks++;
            

        } else if (clicks === 2) {
            //Second card - generate random number
            let i = Math.floor(Math.random()*6);
            let card = cards[i];

            //Check number not in use and generate a new one if needed
            while (usedCards.includes(card.src)) { 
                i = Math.floor(Math.random()*6);
                card = cards[i];
            }

            usedCards.push(card.src); //Store used cards
            
            if (currentIndex != 1) {

                currentIndex = 1;
                slideCards();
            
            } else {            

            document.getElementById("middle-game-card").setAttribute("src", card.src);
            document.getElementById("middle-game-card").setAttribute("alt", card.alt);
            document.getElementById("middle-card-flip").classList.add("flipped");
            document.getElementById("present-text").classList.remove("hidden");
            gameBtn.innerText = "Draw Next Card";    
            clicks++;

            }

        } else if (clicks === 3) {  

            currentIndex = 2;
            slideCards();
            gameBtn.innerText = "Reveal Third Card";
             maxRevealedIndex = 2;
            clicks++;  
            removeArrowRight();  

        } else if (clicks === 4) {
            //Third card - generate random number
            let i = Math.floor(Math.random()*6);
            let card = cards[i];

            //Check number not in use and generate a new one if needed
            while (usedCards.includes(card.src)) { 
                i = Math.floor(Math.random()*6);
                card = cards[i];
            }

            if (currentIndex != 2) {

                currentIndex = 2;
                slideCards();

            } else {
            document.getElementById("right-game-card").setAttribute("src", card.src);
            document.getElementById("right-game-card").setAttribute("alt", card.alt);
            document.getElementById("right-card-flip").classList.add("flipped");
            document.getElementById("future-text").classList.remove("hidden");
            gameBtn.innerText = "Reset The Cards"; 
            clicks++;
            }

        } else if (clicks === 5) {
            //Reset the game
            document.getElementById("left-card-flip").classList.remove("flipped");
            document.getElementById("middle-card-flip").classList.remove("flipped");
            document.getElementById("right-card-flip").classList.remove("flipped");
            document.getElementById("past-text").classList.add("hidden");
            document.getElementById("present-text").classList.add("hidden");
            document.getElementById("future-text").classList.add("hidden");
            gameBtn.innerText = "Reveal First Card"
            clicks = 0;
        }
}

/**
 * Card slide function to allow for improved game experience on mobile
 */
function slideCards() {
    if (currentIndex === 0) {

        document.getElementById("slide-strip").classList.remove("slide-middle");
        document.getElementById("slide-strip").classList.remove("slide-right");

    } else if (currentIndex === 1) {

        document.getElementById("slide-strip").classList.add("slide-middle");

    } else if (currentIndex === 2) {

        document.getElementById("slide-strip").classList.remove("slide-middle");
        document.getElementById("slide-strip").classList.add("slide-right");
    }
}

/**
 * Display left navigation arrow and apply event listener
 */
function arrowLeft() {

    let leftGameArrow = document.getElementById("arrow-left");
    
    leftGameArrow.classList.remove("hidden");
    leftGameArrow.addEventListener("click", decreaseCurrentIndex);
}

/**
 * Display right navigation arrow and apply event listener
 */
function arrowRight() {

    let rightGameArrow = document.getElementById("arrow-right");

    rightGameArrow.classList.remove("hidden");
    rightGameArrow.addEventListener("click", increaseCurrentIndex);
}

/**
 * Slide left to previously viewed cards
 */
function decreaseCurrentIndex() {
    if (currentIndex > 0) {
        --currentIndex;
        slideCards();
        arrowRight();
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

/**
 * Remove right arrow on last card
 */
function removeArrowRight() {
    document.getElementById("arrow-right").classList.add("hidden");
}
