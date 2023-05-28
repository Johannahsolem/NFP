const hello = document.querySelector("hello");
const nfp = document.querySelector("nfp");
const indivArtist = document.querySelector("artist");
const txtContainer = document.querySelector("artistTxtContainer");
const artistMere = document.querySelector("artistMere");

/*TODO:
const contact = document.querySelector("contact");
const klara = document.querySelector("klara");
const omMere = document.querySelector("omMere");
const book = document.querySelector("bookHer");*/

const timeOut = setTimeout(greetMe);
const stopTime = setTimeout(changeTxt, 4000);

/*TODO:
const buttons = [contact, omMere, artistMere, klara];

buttons[0].addEventListener("click", clickFunc);*/


//Tryk på button til kontakt
function clickFunc() {

    window.location = "kontakt.html"
    }

//Tryk på pil og scroll ned til om sektion
function scrollDown() {
    window.location = "#om";
}

//VELKOMST AFHÆNGIG AF TID PÅ DAGEN – https://www.studentstutorial.com/javascript/javascript-wish-as-per-time.php 
function greetMe() {

    const time = new Date().getHours();
    let greeting;
    if (time < 06) {
        greeting = "Godnat!"
    } else if (time < 10) {
        greeting = "Godmorgen!"
    } else if (time < 12) {
        greeting = "Godmiddag!"
    } else if (time < 18) {
        greeting = "Godeftermiddag!"
    } else {
        greeting = "Godaften!"
    };

    nfp.style.display = "none";
    nfp.style.animationName = "fadeIn";

    hello.innerHTML = greeting;
    hello.style.animationName = "zoomIn";



}

function changeTxt() {

    nfp.style.display = "block";
    hello.style.display = "none";
}

/*Fade in effekt, genbruges når man skriver reveal efter tag
https://alvarotrigo.com/blog/css-animations-scroll/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);*/





