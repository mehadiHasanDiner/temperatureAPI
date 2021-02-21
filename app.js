const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`
    fetch(url)
    .then (response => response.json())
    .then (data => updateWeather(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('input-city').value;
    getInputData(inputCity);
})


updateWeather = data => {
    document.getElementById('show-city').innerText = data
}