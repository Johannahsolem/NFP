let data;
const gMorgen = document.getElementById('godmorgen');
const gEfter = document.getElementById('godEftermiddag');
const gAften = document.getElementById('godAften');

const array = [gMorgen, gEfter, gAften];

array[0].style.display = "none";
array[1].style.display = "none";
array[2].style.display = "none";

fetch('http://worldtimeapi.org/api/timezone/Europe/Copenhagen')

    .then(function (response) {
        return response.json();
    })

    //TODO: FIKS DET HERRRRRRRR
    if(function (obj){
        data = obj;
        array[0].innerHTML = "Hello: " + data.timezone;
    })else if(function (obj){
        data = obj;
    })else(function (obj){
        data = obj;
    })



    .catch(function (error) {
        alert("Nothing");
    })


