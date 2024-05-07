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