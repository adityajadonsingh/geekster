let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let zone = document.querySelector(".zone");

function clock(){
    let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    let currentSec = new Date().getSeconds();
    let currentZone = "AM";

    if(currentHour > 12){
        currentHour -= 12;
        currentZone = "PM";
    }

    hour.innerHTML = currentHour;
    min.innerHTML = currentMin;
    sec.innerHTML = currentSec;
    zone.innerHTML = currentZone;
    setTimeout(()=>{
        clock();
    }, 1000);
}
clock();