let text = "Last Modification: " + document.lastModified;
document.getElementById("lastModified").innerHTML = text;
let nyear = new Date();
document.getElementById("year").innerHTML = nyear.getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const week = ["Sunday", "Monday", "Tusday", "Wednesday", " Thursday", "Friday", "Saturday",]

const date = new Date();
const today = date.getDay();

function on() {
    document.getElementById("overlay").style.display = "block";

}

function off() {

    document.getElementById("overlay").style.display = "none";


}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
//-------NUMBER OF VISIT------

const msToDays = 84600000;

const dayVisitDisplay = document.querySelector(".today");
let dayVisits = Date.now(window.localStorage.getItem(".stoday")) || 0;

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else if (numVisits == 0) {

    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.!";
}
else if (dayVisits < msToDays) {
    dayVisitDisplay.textContent = dayVisits;
    dayVisitDisplay.textContent = "Back so soon! Awesome!"
}
else {
    visitsDisplay.textContent = "You last visited n days ago."
}//ver si funciona 


if (dayVisits > 0) { dayVisitDisplay.textContent = dayVisits }



numVisits++;
localStorage.setItem("numVisits-ls", numVisits);