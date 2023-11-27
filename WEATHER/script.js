document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "932270c8c629977cce57bcabc7de8540";
  const city = "New York";
  const apiUrl = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
});

function displayWeather(data) {
  const weatherInfoContainer = document.getElementById("weather-info");
  const cityName = data.location.name;
  const temperature = data.current.temperature;
  const description = data.current.weather_descriptions[0];

  const weatherHTML = `
      <h2>${cityName}</h2>
      <p>${temperature}°C</p>
      <p>${description}</p>
  `;

  weatherInfoContainer.innerHTML = weatherHTML;
}
