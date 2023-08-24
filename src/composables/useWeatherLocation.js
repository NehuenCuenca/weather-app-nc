import { ref, onMounted } from "vue";

export function useWeatherLocation() {
  const alertNoPermissOfCurrentLocation = () =>
    alert(
      "Unable to retrieve your location :(, try looking for it with the 'Seach for places' button"
    );

  const getWeatherFromCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      getWeatherInfo,
      alertNoPermissOfCurrentLocation
    );
  };

  const getWeatherInfo = async (location) => {
    let finalLocation = location;

    if (location.coords) {
      const { latitude, longitude } = location.coords;

      const parsedLat = (Math.round(latitude * 100) / 100).toFixed(2);
      const parsedLon = (Math.round(longitude * 100) / 100).toFixed(2);

      finalLocation = `${parsedLat}, ${parsedLon}`;
    }

    const { VITE_WEATHER_API_KEY } = import.meta.env;

    const urlWeatherApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${finalLocation}?unitGroup=metric&include=days%2Calerts%2Ccurrent&key=${VITE_WEATHER_API_KEY}&contentType=json`;

    try {
      const resp = await fetch(urlWeatherApi);

      if (resp.status === 200) {
        const data = await resp.json();
        return data;
      } else {
        throw new Error(await resp.text());
      }
    } catch (error) {
      alert(error.message);
      return null;
    }
  };

  return {
    getWeatherInfo,
    getWeatherFromCurrentPosition,
  };
}
