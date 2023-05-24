const hello = document.getElementById("hello");
const nfp = document.getElementById("nfp");
const indivArtist = document.getElementsByClassName("artist");
const txtContainer = document.getElementsByClassName("artistTxtContainer");
const artistMere = document.getElementsByClassName("artistMere");

const timeOut = setTimeout(greetMe);
const stopTime = setTimeout(changeTxt, 4000)



//VELKOMST AFHÆNGIG AF TID PÅ DAGEN
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




//TODO: KAJFLDFJLDAJF VEND TILBGE TIL DET HER
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




