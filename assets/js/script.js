// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function() {

    //Get the navbar button and apply event listener
    let navBtn = document.getElementById("menu-btn");

    navBtn.addEventListener("click", function() {
        document.getElementById("nav-menu").classList.toggle("hidden");
    })

    //Get the card game button and apply event listener
    let gameBtn = document.getElementById("game-btn");

    gameBtn.addEventListener("click", tarotGame);

})


//defined outside the function so it doesn't reset every time
let clicks = 0; 
let usedCards = [];

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
    
    const screenWidth = screen.width;
    
        
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
            gameBtn.innerText = "Reveal First Card"
        }
}




    
    
    
            
    


   

