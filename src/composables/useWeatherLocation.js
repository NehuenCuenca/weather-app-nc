import { ref, onMounted } from "vue";
import store from "../store";

export function useWeatherLocation() {
  const alertNoPermissOfCurrentLocation = () =>
    alert(
      "Unable to retrieve your location :(, try looking for it with the 'Seach for places' button"
    );

  const getWeatherFromCurrentPosition = () => {
    const succes = ({ coords }) => {
      let parsedCoords = "";

      const { latitude, longitude } = coords;

      const parsedLat = (Math.round(latitude * 100) / 100).toFixed(2);
      const parsedLon = (Math.round(longitude * 100) / 100).toFixed(2);

      parsedCoords = `${parsedLat}, ${parsedLon}`;

      store.dispatch("getWeatherInfo", parsedCoords);
    };

    navigator.geolocation.getCurrentPosition(
      succes,
      alertNoPermissOfCurrentLocation
    );
  };

  const getWeatherOfLocation = (location) => {
    store.dispatch("getWeatherInfo", location);
  };

  return {
    getWeatherOfLocation,
    getWeatherFromCurrentPosition,
  };
}
