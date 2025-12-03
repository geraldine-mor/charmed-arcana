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

/**
 * The game loop called when the game button is first clicked
 */
let clicks = 0; //defined outside the function so it doesn't reset every time
function tarotGame() {
    const cards = [
        {src: "/assets/images/death.webp", alt: "Tarot card depicting death",},
        {src: "/assets/images/judgement.webp", alt: "Tarot card depicting judgement"},
        {src: "/assets/images/justice.webp", alt: "Tarot card depicting justice"},
        {src: "/assets/images/strength.webp", alt: "Tarot card depicting strength"},
        {src: "/assets/images/temperance.webp", alt: "Tarot card depicting temperance"},
        {src: "/assets/images/the-magician.webp", alt: "Tarot card depicting the magician"},
    ]

    let gameBtn = document.getElementById("game-btn");
    let i = Math.floor(Math.random()*6);

        if (clicks === 0) {
            let card = cards[i];
            currentCard = card;
            document.getElementById("game-card").setAttribute("src", card.src);
            document.getElementById("game-card").setAttribute("alt", card.alt);
            document.getElementById("card-flip").classList.add("flipped");
            document.getElementById("game-text").classList.remove("hidden");
            gameBtn.innerText = "Draw next card";
            clicks++;
        } else if (clicks === 1) {
            document.getElementById("card-flip").classList.remove("flipped");
            gameBtn.innerText = "Reveal the second card (Present)";
            clicks++;
        }
}




    
    
    
            
    


   

