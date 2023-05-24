const hello = document.getElementById("hello");
const nfp = document.getElementById("nfp");
const indivArtist = document.getElementsByClassName("artist");
const txtContainer = document.getElementsByClassName("artistTxtContainer");
const artistMere = document.getElementsByClassName("artistMere");

const timeOut = setTimeout(greetMe);
const stopTime = setTimeout(changeTxt, 4000)

//Tryk på kontaktknap fører til kontaktsiden
function clickFunc(){
    window.location="kontakt.html";
}

//VELKOMST AFHÆNGIG AF TID PÅ DAGEN – https://www.studentstutorial.com/javascript/javascript-wish-as-per-time.php 
function greetMe(){
    const time = new Date().getHours();
    let greeting;
    if (time < 10) {
        greeting = "Godmorgen!";
    } else if (time < 12) {
        greeting = "God middag!";
    } else if (time < 18) {
        greeting = "God eftermiddag!"
    }else{
        greeting = "God aften!"
    };

    nfp.style.display ="none";
    hello.innerHTML = greeting;
    
}

function changeTxt(){
    nfp.style.paddingBottom ="50px";

    nfp.style.display ="block";
    hello.style.display = "none";
}

/*Fade in effekt, genbruges når man skriver reveal efter tag
https://alvarotrigo.com/blog/css-animations-scroll/*/
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

window.addEventListener("scroll", reveal);



/*TODO: KAJFLDFJLDAJF VEND TILBGE TIL DET HER
function hover(){
    artistMere.style.display = 'block';
    txtContainer.style.display = 'none';
}

function standard(){
    artistMere.style.display = 'none';
    txtContainer.style.display = 'block';
}

indivArtist.addEventListener("mouseover", hover);
indivArtist.addEventListener("mouseout", standard);
/*



/*
indivArtist.onmouseover = function(){
    mouseOver();
};

indivArtist.onmouseout = function(){
    mouseOut();
};

function mouseOver(){
    txtContainer.style.visibility = 'hidden';
}

function mouseOut(){
    txtContainer.style.visibility = 'visible';
}
*/




