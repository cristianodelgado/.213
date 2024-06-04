const fdiv = document.querySelector('.forecast')
const ffdiv = document.querySelector('.fforecast')
const ffdiv3 = document.querySelector('.fforecast3')

const weekd = ["Sunday", "Monday", "Tuesday", "Wednesday", " Thursday", "Friday", "Saturday"]


const myforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-32.40&lon=-63.24&appid=9b87576f68f02862744e6c84a3317ae2&units=metric'



async function forecastWeather(myforecast) {
    const response = await fetch(myforecast);
    try {
        if (response.ok) {
            const data = await response.json();
            // console.table(data);
            displayForecast(data.list)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
forecastWeather(myforecast)



function displayForecast(list) {
    {

        let fmyDescription = document.createElement('p');
        let fmyGraphic = document.createElement('img');
        let fmyDay = document.createElement('p');
        let fmyTemperature = document.createElement('p');
        fmyDescription.innerHTML = list[0].weather[0].description;
        fmyTemperature.innerHTML = `${list[0].main.temp}&deg;C`;
        const daynew1 = new Date(list[0].dt_txt);
        const newsday1 = daynew1.getDay();
        fmyDay.innerHTML = weekd[newsday1];
        const icons = ` https://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`;
        fmyGraphic.setAttribute('src', icons);
        fmyGraphic.setAttribute('alt', list[0].weather[0].description);


        fdiv.appendChild(fmyDay)
        fdiv.appendChild(fmyTemperature)
        fdiv.appendChild(fmyDescription)
        fdiv.appendChild(fmyGraphic)



        let ffmyDescription = document.createElement('p');
        let ffmyGraphic = document.createElement('img');
        let ffmyDay = document.createElement('p');
        let ffmyTemperature = document.createElement('p');
        ffmyDescription.innerHTML = list[8].weather[0].description;
        ffmyTemperature.innerHTML = `${list[8].main.temp}&deg;C`;
        const daynew2 = new Date(list[8].dt_txt);
        const newsday2 = daynew2.getDay();
        ffmyDay.innerHTML = weekd[newsday2];
        const ficons = ` https://openweathermap.org/img/wn/${list[8].weather[0].icon}@2x.png`;
        ffmyGraphic.setAttribute('src', ficons);
        ffmyGraphic.setAttribute('alt', list[8].weather[0].description);


        ffdiv.appendChild(ffmyDay)
        ffdiv.appendChild(ffmyTemperature)
        ffdiv.appendChild(ffmyDescription)
        ffdiv.appendChild(ffmyGraphic)


        let ffmyDescription3 = document.createElement('p');
        let ffmyGraphic3 = document.createElement('img');
        let ffmyDay3 = document.createElement('p');
        let ffmyTemperature3 = document.createElement('p');
        ffmyDescription3.innerHTML = list[16].weather[0].description;
        ffmyTemperature3.innerHTML = `${list[16].main.temp}&deg;C`;
        const daynew = new Date(list[16].dt_txt);
        const newsday = daynew.getDay();
        ffmyDay3.innerHTML = weekd[newsday];



        const ficons3 = ` https://openweathermap.org/img/wn/${list[9].weather[0].icon}@2x.png`;
        ffmyGraphic3.setAttribute('src', ficons3);
        ffmyGraphic3.setAttribute('alt', list[16].weather[0].description);


        ffdiv3.appendChild(ffmyDay3)
        ffdiv3.appendChild(ffmyTemperature3)
        ffdiv3.appendChild(ffmyDescription3)
        ffdiv3.appendChild(ffmyGraphic3)


    }
}