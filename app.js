const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then (response => response.json())
    .then (data => updateWeather(data))
    console.log(url);
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('input-city').value;
    getWeatherData(inputCity);
})


const updateWeather = data => {
    document.getElementById('show-city').innerText = data.name || "Unknown Location!";
    document.getElementById('show-temperature').innerText = data.main.temp;
    console.log(data.main);
    console.log(data.weather[0].icon);

    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('input-city').value = "";
}

getWeatherData('Dhaka');