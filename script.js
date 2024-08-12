document.getElementById("get-weather-btn").addEventListener("click", function() {
    const location = document.getElementById("location-input").value;
    if (location) {
        getWeather(location);
    } else {
        alert("Ramtek");
    }
});

function getWeather(location) {
    const apiKey = '38a14436b9a3b2d7f37c8b77d2cf1f57'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available.');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayWeather(data) {
    const locationElement = document.getElementById("location");
    const descriptionElement = document.getElementById("description");
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("wind-speed");

    locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
    descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
