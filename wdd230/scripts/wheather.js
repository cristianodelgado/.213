const mycity = document.querySelector("#city");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-32.40&lon=-63.24&units=metric&appid=9b87576f68f02862744e6c84a3317ae2'

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.table(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    mycity.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    myGraphic.setAttribute("src", iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].description)

}