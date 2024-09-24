import "./styles.css";
import formHandler from "./modules/formHandler";
import { getCurrentLocation, getLocation } from "./modules/getLocation";
import getWeather from "./modules/getWeather";
import showWeather from "./modules/renderWeather";

const weatherApp = () => {
  async function handleLocation() {
    try {
      const coords = await getCurrentLocation();
      if (!coords) {
        throw new Error("no coords found");
      }
      console.log("успех");
      const weather = await getWeather(coords.latitude, coords.longitude);
      console.log(weather);
      return weather;
    } catch (e) {
      console.log(e);
    }
  }

  async function renderWeather() {
    try {
      const weatherData = await handleLocation();
      if (weatherData) {
        console.log("rendering");
        showWeather(weatherData);
      } else {
        console.log("need weather data to render");
        throw new Error("need weather data to render");
      }
    } catch (error) {
      Error(error);
    }
  }

  const form = formHandler();
  form.init();
  renderWeather();
};

// const currentLocation = window.addEventListener(
//   "DOMContentLoaded",
//   getCurrentLocation
// );

// get currentLocation when page loaded
// const data = if currentLocation fetch data when app loads
// if noCurrentLocation => return

weatherApp();
