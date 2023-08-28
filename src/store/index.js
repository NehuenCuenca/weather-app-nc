import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todayWeather: null,
      currentMeasure: 'C'
    };
  },

  mutations: {
    alertNoPermissOfCurrentLocation() {
      alert(
        "Unable to retrieve your location :(, try looking for it with the 'Seach for places' button"
      );
    },

    getWeatherFromCurrentPosition() {
      navigator.geolocation.getCurrentPosition(
        getWeatherInfo,
        alertNoPermissOfCurrentLocation
      );
    },

    setTodayWeather(state, payload) {
      state.todayWeather = payload;
    },

    setCurrentMeasure(state, measure) {
      state.currentMeasure = measure;
    },
  },

  actions: {
    async getWeatherInfo({ commit }, location) {
      const { VITE_WEATHER_API_KEY } = import.meta.env;

      const urlWeatherApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days%2Calerts%2Ccurrent&key=${VITE_WEATHER_API_KEY}&contentType=json`;

      try {
        const resp = await fetch(urlWeatherApi);

        if (resp.status === 200) {
          const data = await resp.json();
          commit("setTodayWeather", data);
        } else {
          throw new Error(await resp.text());
        }
      } catch (error) {
        alert(error.message, '\n If you are on mobile, activate the GPS to get the location, and refresh the page');
        commit("setTodayWeather", null);
      }
    },
  },

  getters: {
    weatherOnNextDays: (state) => (days) => {
      const totalOrLess =
        (days >= state.todayWeather?.days.length)
          ? state.todayWeather.days.length
          : days+1;

      return state.todayWeather?.days.slice(1, totalOrLess);
    },
  },
});

export default store;
