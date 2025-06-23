const apiKey = "c30eb67792eba2d274434261ce7e1cfe";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".weather input");
const searchBtn = document.querySelector(".weather button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  if (searchBox.value == "") {
    alert("Please enter a city name.");
  } else {
    const response = await fetch(apiUrl + city + `&appid=${apiKey} `);
    if (response.status == 404) {
      // alert("City not found. Please enter valid city name.");
      // return;
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather-info").style.display = "none";
    } else {
      var data = await response.json();

      // go on cosnole n see which attribute comes under which keyword like humidity comes under main
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      //console=>weather=>0 index=>main
      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
      }

      document.querySelector(".weather-info").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// checkWeather();
