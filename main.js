const apiKey = 'e8b9a2868dcc4db3ffd7b5d145b29dd8'; // Replace with your actual weather API key

const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('getWeather');
const cityNameElement = document.getElementById('cityName');
const descriptionElement = document.getElementById('description');
const temperatureElement = document.getElementById('temperature');

getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value.trim(); // Trim any leading/trailing spaces

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`); // Fetch weather data using OpenWeatherMap API

  if (!response.ok) {
    alert('Error fetching weather data. Please try again later.');
    return;
  }

  const weatherData = await response.json();

  cityNameElement.textContent = weatherData.name;
  descriptionElement.textContent = weatherData.weather[0].description;
  temperatureElement.textContent = `Temperature: ${Math.round(weatherData.main.temp)} °C`;
});
