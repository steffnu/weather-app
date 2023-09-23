const apiKey = 'c0d3bd747a8163e5902a3b3a03e35f57';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?unit=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();

        if(response.status === 404){
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
        }
        else {
            document.querySelector('.error').style.display = 'none';
            document.querySelector('.weather').style.display = 'block';
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.floor(data.main.temp - 273,15) + '°C';
            document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
            document.querySelector('.wind').innerHTML = data.wind.speed.toFixed(1) + 'km/h';
            weatherIcon.src = `images/${data.weather[0].main}.png`;
        //console.log(data);
        };
};

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});





