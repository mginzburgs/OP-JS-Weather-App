import { getLocation } from "./getLocation";
import renderWeather from "./renderWeather";
import getWeather from "./getWeather";

const form = document.querySelector(".location__form");
const input = form.querySelector("#location");
const submit = form.querySelector(".location__submit");

export default function formHandler() {
  const init = () => {
    inputValidate();
    formSubmit();
  };

  const inputValidate = () => {
    const regex = /^[A-Za-z\s\-]+$/;
    const message =
      "only Uppercase & Lowercase letters, spaces & hyphens allowed";
    input.addEventListener("input", (e) => {
      if (!regex.test(input.value)) {
        input.setCustomValidity(message);
        input.reportValidity();
        submit.classList.remove("show");
      } else {
        submit.classList.add("show");
        input.setCustomValidity("");
        input.reportValidity();
      }
    });
  };

  const formSubmit = () => {
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (input.value) {
        console.log(input.value);
        handleFormData(input.value);
      }
    });

    async function handleFormData(input) {
      const cityData = await getLocation(input);
      console.log("huj", cityData);
      const weatherData = await getWeather(cityData[0].lat, cityData[0].lon);
      renderWeather(weatherData);
    }
  };

  return { init };
}
