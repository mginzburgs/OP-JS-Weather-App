async function getLocation(city) {
  const KEY = "4b96ddbb52f6c7d326e30460f1c9c7e8";
  const API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${KEY}`;

  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.length > 0 ? data : console.log("location data not found");
  } catch (error) {
    console.error("Error - no location found: ", error);
  }
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by browser");
      }
      console.log("locating");
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { longitude, latitude } = pos.coords;
          console.log("current location: ", longitude, latitude);
          resolve({ latitude, longitude });
        },
        () => {
          console.log("unable to retrieve current location");
          reject(new Error("unable to retrieve current location"));
        }
      );
    } catch (error) {
      console.error(error);
    }
  });

  function success(pos) {
    const { longitude, latitude } = pos.coords;
    console.log("current location: ", longitude, latitude);
    resolve({ latitude, longitude });
  }
}

export { getLocation, getCurrentLocation };
