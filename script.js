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








