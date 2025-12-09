`/* jshint esversion: 11 */`;

// Wait for the DOM to finish loading before running functions
document.addEventListener("DOMContentLoaded", function () {

    //Get the navbar button and apply event listener
    let navBtn = document.getElementById("menu-btn");

    navBtn.addEventListener("click", function () {
        document.getElementById("nav-menu").classList.toggle("hidden");
    });

    runGame()
});

/**
 * Tarot reading game
 */
function runGame() {
    //Get the card game button and apply event listener
    let gameBtn = document.getElementById("game-btn");

    if (screen.width < 768) {

        gameBtn.addEventListener("click", tarotMobile);

    } else {

        gameBtn.addEventListener("click", tarotGame);

    }

    let card;
    let i;
    let clicks = 0;
    let usedCards = [];
    let currentIndex = 0;
    let maxRevealedIndex = 0;

    const cards = [
        {
            src: "assets/images/death.webp", alt: "Tarot card depicting death",
            text: "Most times, people take the name of the card literally. However, the real meaning within the Death card is one of the most positive in the whole deck. The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open."
        },
        {
            src: "assets/images/judgement.webp", alt: "Tarot card depicting judgement",
            text: "The traditional Judgement meaning focuses on the moment when we reflect and evaluate ourselves and our actions. To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection."
        },
        {
            src: "assets/images/justice.webp", alt: "Tarot card depicting justice",
            text: "Justice signals that a  judgement will be made. The decisions that you make now have long-term effects in all things, both for yourself and others. If you have been wronged, this card's appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning."
        },
        {
            src: "assets/images/strength.webp", alt: "Tarot card depicting strength",
            text: "This card shows that you have the inner strength and fortitude you need to see you through moments of danger and distress. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind."
        },
        {
            src: "assets/images/temperance.webp", alt: "Tarot card depicting temperance",
            text: "The Temperance tarot card suggests moderation and balance, coupled with a lot of patience. It implies that you have a clear vision and know what you want to achieve. It may also indicate a time to evaluate and re-examine the priorities you have chosen, to find more balance with your inner self."
        },
        {
            src: "assets/images/the-magician.webp", alt: "Tarot card depicting the magician",
            text: "The magician is the representation of pure willpower. The time is right to tap into your full potentail. Remember that you are powerful, create your inner world, and the outer will follow."
        },
        {
            src: "assets/images/the-chariot.webp", alt: "Tarot card depicting the chariot",
            text: "The chariot card is bout overcoming challenges and maintaining control of your surroundings. It shows that you should pursue the plan with a structured and ordered approach. You must maintain focus, confidence and determination if you wish to have success"
        },
        {
            src: "assets/images/the-devil.webp", alt: "Tarot card depicting the devil",
            text: "The devil card suggests that you have feelings of entrapment, emptiness or a lack of fulfillment in your life. Addiction to substances or material pleasures can also be the reason for your feelings of powerlessness. In these situations, you may feel trapped, unable to control your impulses"
        },
        {
            src: "assets/images/the-emperor.webp", alt: "Tarot card depicting the emperor",
            text: "The emperor is a stoic ruler figure, this card means authority, regulation and organisation. He sets out plans that he must see through. He is a symbol of the masculine principle - the paternal figure in life that gives structure, creates rules and systems, and imparts knowledge."
        },
        {
            src: "assets/images/the-empress.webp", alt: "Tarot card depicting the empress",
            text: "The Empress is associated with fertility, expression, creativity and nurturing. She calls you to connect with beauty and bring happiness to your life. The Empress card could also mean the birth of a new idea, business or project on your life. She is a signal that be kind to yourself, to take care of yourself."
        },
        {
            src: "assets/images/the-fool.webp", alt: "Tarot card depicting the fool",
            text: "The Fool represents the beginning of a new journey.  He inspires courage, for he understands that every day is a chance to open up new areas in your life, and with that comes a mixture of anticipation, wonder, awe and curiosity."
        },
        {
            src: "assets/images/the-hanged-man.webp", alt: "Tarot card depicting the hanged man",
            text: "The Hanged Man reflects a need to suspend certain action. This might indicate a period of indecision. This is a card which is mainly designated towards waiting and suspension. This suggests that this might be the thing that you need to do in order to achieve success or to wait for the proper opportunity."
        },
        {
            src: "assets/images/the-hermit.webp", alt: "Tarot card depicting the hermit",
            text: "The Hermit is a seeker for the knowledge that comes from within. A lonely wanderer, he searches for that which can only be gained with long periods of solitude - the inner voice. It may be that you need to be alone. Never be afraid to take this chance to reflect, as it could help you find yourself."
        },
        {
            src: "assets/images/the-hierophant.webp", alt: "Tarot card depicting the hierophant",
            text: "The Hierophant suggests that you have a certain desire to follow an established process. You would rather adapt to certain beliefs than be innovating. This card suggests that it’s better for you to follow social structures which are established and have their own traditions"
        },
        {
            src: "assets/images/the-high-priestess.webp", alt: "Tarot card depicting the high priestess",
            text: "The High Priestess represents intuition and spirituality. It is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. The answers you seeklie within, not without"
        },
        {
            src: "assets/images/the-lovers.webp", alt: "Tarot card depicting the lovers",
            text: "The primary meaning within the Lovers is harmony, attractiveness, and perfection in a relationship, the trust and the unity that the lovers have gives each of them confidence and strength. It can also mean a choice between conflicting options, a dilemma that you need to think carefully about"
        },
        {
            src: "assets/images/the-moon.webp", alt: "Tarot card depicting the moon",
            text: "The Moon card can symbolize your imagination is taking the best of you. The moon's light can bring you clarity and understanding and you should allow your intuition to guide you. Another meaning of the Moon card is the existence of illusion, some hidden truth that must be discovered."
        },
        {
            src: "assets/images/the-star.webp", alt: "Tarot card depicting the star",
            text: "The Star brings hope, renewed power, and strength to carry on with life. It shows how abundantly blessed you are by the universe as evidenced by the various things around you. To see this card is a message to have faith, for the universe will bless you and bring forth all that you need."
        },
        {
            src: "assets/images/the-sun.webp", alt: "Tarot card depicting the sun",
            text: "The Sun card represents success, abundance, and radiance. There is much joy and happiness that is coming to you. The card shows that you have a significant sense of deserved confidence right now as you reach the goals you have set."
        },
        {
            src: "assets/images/the-tower.webp", alt: "Tarot card depicting the tower",
            text: "The Tower represents change in the most radical and momentous sense. Change itself is a normal part of life that one has to embrace. The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place."
        },
        {
            src: "assets/images/the-wheel-of-fortune.webp", alt: "Tarot card depicting the wheel of fortune",
            text: "The Wheel of Fortune turns, to remind us that life is made up of both good and bad times, and that the cycle is one that we cannot control. Where it lands is as random as chance - you may find yourself at the top or bottom, but no matter what the outcome it may not last for very long, for the wheel turns on."
        },
        {
            src: "assets/images/the-world.webp", alt: "Tarot card depicting the world",
            text: "The World symbolises the moment when the inner and outer worlds - self and other - become a single entity. The meaning of the World card is fulfillment, achievement and completion. To encounter the World in your cards is to encounter a great unity and wholeness."
        }
    ];

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
            gameBtn.innerText = "Reveal First Card";

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
            gameBtn.innerText = "Reveal First Card";
            navigationArrows();
        }
    }
    /**
     * Generate a random card index
     */
    function randomNumber() {
        i = Math.floor(Math.random() * 22);
        card = cards[i];
    }

    /**
     * Check if number already used and generate another if needed
     */
    function checkNumber() {
        while (usedCards.includes(card.src)) {
            i = Math.floor(Math.random() * 22);
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
        document.getElementById("past-text").classList.add("fade-in");
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
        document.getElementById("present-text").classList.add("fade-in");
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
        document.getElementById("future-text").classList.add("fade-in");
    }

    /**
     * Resets the game to begin again
     */
    function gameReset() {
        //Reset all classes to first state
        document.getElementById("left-card-flip").classList.remove("flipped");
        document.getElementById("middle-card-flip").classList.remove("flipped");
        document.getElementById("right-card-flip").classList.remove("flipped");
        document.getElementById("past-text").classList.add("fade-out");
        document.getElementById("present-text").classList.add("fade-out");
        document.getElementById("future-text").classList.add("fade-out");
        document.getElementById("past-text").addEventListener("animationend", hideTextDivs);

        //Remove all stored data from variables
        clicks = 0;
        currentIndex = 0;
        maxRevealedIndex = 0;
        usedCards = [];
    }

    function hideTextDivs() {
        document.getElementById("past-text").classList.remove("fade-out");
        document.getElementById("present-text").classList.remove("fade-out");
        document.getElementById("future-text").classList.remove("fade-out");
        document.getElementById("past-text").classList.add("hidden");
        document.getElementById("present-text").classList.add("hidden");
        document.getElementById("future-text").classList.add("hidden");
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
            arrowLeft.addEventListener("click", decreaseCurrentIndex);
        } else {
            arrowLeft.classList.add("hidden");
        }

        //Right arrow shows only when right scroll is appropriate
        if (currentIndex < maxRevealedIndex) {
            arrowRight.classList.remove("hidden");
            arrowRight.addEventListener("click", increaseCurrentIndex);
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
}
