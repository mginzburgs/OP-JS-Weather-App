import snowingIcon from "../assets/weather-icons/snowing.png";
import rainingIcon from "../assets/weather-icons/raining-icon.png";
import sunnyIcon from "../assets/weather-icons/sunny.png";
import cloudIcon from "../assets/weather-icons/cloud.png";

const showWeather = (weather) => {
  const skyStatus = document.querySelector(".sky__status");
  const skyImage = document.querySelector(".sky__icon");
  const temp = document.querySelector(".temp__degrees");
  const humidity = document.querySelector(".humidity__numbers");
  const windNumber = document.querySelector(".wind__number");

  const currentWeather = weather.current;
  console.log(currentWeather);

  windNumber.textContent = currentWeather.wind_speed_10m;
  humidity.textContent = currentWeather.relative_humidity_2m;
  temp.textContent = Math.floor(currentWeather.temperature_2m);

  const WMO_CODES = {
    clear: [0],
    cloudy: [1, 2, 3],
    rainy: [51, 53, 55, 61, 63, 65, 80, 81],
    heavy: [66, 67, 82],
    snow: [71, 73, 75, 77, 85, 86],
  };

  if (WMO_CODES.rainy.includes(currentWeather.weather_code)) {
    skyStatus.textContent = "Raining bro";
    skyImage.src = rainingIcon;
  } else if (WMO_CODES.heavy.includes(currentWeather.weather_code)) {
    skyStatus.textContent = "Heavy Rain bro";
    skyImage.src = rainingIcon;
  } else if (WMO_CODES.snow.includes(currentWeather.weather_code)) {
    skyImage.src = snowingIcon;
    skyStatus.textContent = "Snowing bro";
  } else if (WMO_CODES.cloudy.includes(currentWeather.weather_code)) {
    skyStatus.textContent = "Cloudy bro";
    skyImage.src = cloudIcon;
  } else if (WMO_CODES.clear.includes(currentWeather.weather_code)) {
    skyStatus.textContent = "Sunny bro";
    skyImage.src = sunnyIcon;
  }
};

export default showWeather;
