const apikey = "00ac82dee617dce25e063283e1e93629";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-text");
const searchbtn = document.querySelector(".search-button");

const imageSection = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error-msg").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".location-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "° C ";
    document.querySelector(".wind-speed").innerHTML =
      Math.round(data.wind.speed) + "km/h&nbsp;";
    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + "%&nbsp;";

    if (data.weather[0].main == "Clouds") {
      imageSection.src = "/weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      imageSection.src = "/weather-app-img/images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      imageSection.src = "/weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main == "Humidity") {
      imageSection.src = "/weather-app-img/images/humidity.png";
    } else if (data.weather[0].main == "Mist") {
      imageSection.src = "/weather-app-img/images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      imageSection.src = "/weather-app-img/images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      imageSection.src = "/weather-app-img/images/snow.png";
    } else if (data.weather[0].main == "Wind") {
      imageSection.src = "/weather-app-img/images/wind.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error-msg").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
