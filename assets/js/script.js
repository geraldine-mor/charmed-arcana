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

    let gameBtn = document.getElementById("game-btn");

        if (clicks === 0) {
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




    
    
    
            
    


   

