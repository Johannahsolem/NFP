const hello = document.getElementById("hello");
const nfp = document.getElementById("nfp");

const timeOut = setTimeout(greetMe);
const stopTime = setTimeout(changeTxt, 4000)


//VELKOMST AFHÆNGIG AF TID PÅ DAGEN
function greetMe(){
    const time = new Date().getHours();
    let greeting;
    if (time < 10) {
        greeting = "Godmorgen!";
    } else if (time < 20) {
        greeting = "God eftermiddag!";
    } else {
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







