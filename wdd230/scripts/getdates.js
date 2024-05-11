let text = "Last Modification: " + document.lastModified;
document.getElementById("lastModified").innerHTML = text;
let nyear = new Date();
document.getElementById("year").innerHTML = nyear.getFullYear();


const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
//-------NUMBER OF VISIT------

const msToDays = 84600000;

const dayVisitDisplay = document.querySelector(".today");
let dayVisits = Date.now(window.localStorage.getItem(".stoday")) || 0;

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else if (numVisits == 0) {

    visitsDisplay.textContent = "Welcome!";
}
else if (dayVisits < msToDays) {
    dayVisitDisplay.textContent = dayVisits;
    dayVisitDisplay.textContent = "Back so soon! Awesome!"
}
else { }


//if (dayVisits > 0) { dayVisitDisplay.textContent = dayVisits }



numVisits++;
localStorage.setItem("numVisits-ls", numVisits);