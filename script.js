const hello = document.getElementById("hello");
const nfp = document.getElementById("nfp");

const indivArtist = document.querySelector("artist");
const txtContainer = document.querySelector("artistTxtContainer");
const artistMere = document.querySelector("artistMere");


//Tryk på pil og scroll ned til om sektion
function scrollDown() {
    window.location = "#om";
}

//VELKOMST AFHÆNGIG AF TID PÅ DAGEN – https://www.studentstutorial.com/javascript/javascript-wish-as-per-time.php / https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif 
const timeOut = setTimeout(greetMe);
const timeStop = setTimeout(changeTxt, 3000);

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





