// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function() {

    //Get the navbar button and apply event listener
    let navBtn = document.getElementById("menu-btn");

    navBtn.addEventListener("click", function() {
        document.getElementById("nav-menu").classList.toggle("hidden");
    })
})