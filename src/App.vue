<template>
  <div class="semi-drawer">
    <div class="search-buttons">
      <button class="search-places" @click="() => isSearchingPlaces = true">Search places</button>
      <button class="activate-location">🧭</button>
    </div>

    <form class="search-for-places" v-if="isSearchingPlaces" @submit.prevent="submitForm">
      <button class="close-btn" @click="() => isSearchingPlaces = false">X</button>

      <div class="write-block">
        <input type="text" placeholder="🔍 search location">
        <button>Search</button>
      </div>

      <ul class="default-places-list">
        <li class="default-place-item">
          <button>London</button>
        </li>
        <li class="default-place-item">
          <button>Barcelona</button>
        </li>
        <li class="default-place-item">
          <button>Long Beach</button>
        </li>
      </ul>
    </form>

    <div class="parent">
      <img src="./assets/Cloud-background.png" alt="cloud" class="bg-img">
      <img src="./assets/LightCloud.png" alt="principal" class="principal-img">
    </div>

    <div class="big-grade-today">
      <span class="number">15</span>
      <span class="measure">°C</span>
    </div>

    <span class="word-description">Shower</span>

    <div class="tiny-details">
      <span class="today">Today</span>
      <span class="date">Fri, 5 Jun</span>
      <span class="location">📍 Helsinki</span>
    </div>
  </div>

  <div class="main-content">
    <div class="measure-selector">
      <button class="celsius active">°C</button>
      <button class="fahrenheit">°F</button>
    </div>

    <ul class="next-days-list">
      <li class="next-day-item">
        <span class="date">Tomorrow</span>
        <img src="./assets/Snow.png" alt="" class="climate">
        <div class="max-min">
          <span class="max">16°C</span>
          <span class="min">11°C</span>
        </div>
      </li>
      <li class="next-day-item">
        <span class="date">Tomorrow</span>
        <img src="./assets/Snow.png" alt="" class="climate">
        <div class="max-min">
          <span class="max">16°C</span>
          <span class="min">11°C</span>
        </div>
      </li>
      <li class="next-day-item">
        <span class="date">Tomorrow</span>
        <img src="./assets/Snow.png" alt="" class="climate">
        <div class="max-min">
          <span class="max">16°C</span>
          <span class="min">11°C</span>
        </div>
      </li>
      <li class="next-day-item">
        <span class="date">Tomorrow</span>
        <img src="./assets/Snow.png" alt="" class="climate">
        <div class="max-min">
          <span class="max">16°C</span>
          <span class="min">11°C</span>
        </div>
      </li>
      <li class="next-day-item">
        <span class="date">Tomorrow</span>
        <img src="./assets/Snow.png" alt="" class="climate">
        <div class="max-min">
          <span class="max">16°C</span>
          <span class="min">11°C</span>
        </div>
      </li>
    </ul>

    <div class="todays-hightlights">
      <span class="title">Today’s Hightlights </span>
      <div class="first-row-wrapper">
        <div class="hightlight wind-status">
          <span class="title">Wind status</span>
          <div class="big-number">
            <span class="number">7</span>
            <span class="not-number"> mph</span>
          </div>
          <span class="wind-direction">⬅ SWS</span>
        </div>
        <div class="hightlight humidity-status">
          <span class="title">Humidity</span>
          <div class="big-number">
            <span class="number">84</span>
            <span class="not-number">%</span>
          </div>
          <div class="progress-bar-parent">
            <div class="bg-bar-child"></div>
            <div class="percentages">
              <span class="zero">0</span>
              <span class="fifty">50</span>
              <span class="hundred">100</span>
            </div>
            <span class="percentage-icon">%</span>
          </div>
        </div>
      </div>
      <div class="hightlight visibility-status">
        <span class="title">Visibility</span>
        <div class="big-number">
          <span class="number">6,4</span>
          <span class="not-number"> miles</span>
        </div>
      </div>
      <div class="hightlight air-pressure-status">
        <span class="title">Air Pressure</span>
        <div class="big-number">
          <span class="number">998</span>
          <span class="not-number"> mb</span>
        </div>
      </div>
    </div>

    <footer>created by Nehuen - devChallenges.io</footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isSearchingPlaces = ref(false)
    return {
      isSearchingPlaces,
    };
  },
};
</script>

<style scoped>
.semi-drawer {
  position: relative;
  background-color: #1e213a;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.search-buttons {
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
}

button.search-places {
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #6e707a;
  color: #e7e7eb;
  font: 500 1rem "Raleway", sans-serif;
  padding: 0.5rem 0.8rem;
}

button.activate-location {
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #6e707a;
  padding: .5rem;
  border-radius: 100%;
  font-size: 1.3rem;
}

form.search-for-places {
  height: 100%;
  width: 100%;
  padding: 4vh 2vw;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh 0;
}

.close-btn {
  background-color: transparent;
  color: #E7E7EB;
  font-size: 1.2rem;
  align-self: flex-end;
}

.write-block {
  display: flex;
  gap: 1vw;
}

.write-block input {
  padding: .5rem;
  color: #E7E7EB;
  border: .5px solid #E7E7EB;
  background-color: transparent;
  outline: none;
}

.write-block button {
  padding: .5rem;
  font: 600 1rem 'Raleway', sans-serif;
  color: #E7E7EB;
  background-color: #3C47E9;
}

ul.default-places-list {
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

li.default-place-item {
  width: 80%;
}

.default-place-item button {
  width: 100%;
  text-align: start;
  padding: 1rem;
  background-color: transparent;
  font: 500 1rem 'Raleway', sans-serif;
  color: #E7E7EB;
}

.default-place-item:hover {
  border: 1px solid #616475;
}


.parent {
  position: relative;
  top: 0%;
  left: 0%;
  overflow: hidden;
}

.parent .bg-img {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
}

.parent .principal-img {
  width: 50%;
  position: absolute;
  top: 10%;
  left: 25%;
}


.big-grade-today .number {
  font: 500 9rem "Raleway", sans-serif;
}

.big-grade-today .measure {
  font: 100 3rem "Raleway", sans-serif;
  color: #a09fb1;
}

.word-description {
  font: 600 2.25rem "Raleway", sans-serif;
  color: #a09fb1;
}

.tiny-details {
  width: 50%;
  font: 500 1.125rem "Raleway", sans-serif;
  color: #88869d;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1vh 2vw;
}

.main-content {
  background-color: #100e1d;
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "measures"
    "next-days-list"
    "todays-hightlights"
    "footer"
  ;
  gap: 2vh 0;
}

.measure-selector {
  grid-area: measures;
  height: fit-content;
  width: fit-content;
  display: flex;
  gap: 1rem;
  place-self: start end;
}

.measure-selector button {
  width: 2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #585676;
  color: #E7E7EB;
  font: 700 1.125rem 'Raleway', sans-serif;
}

.measure-selector button.active {
  color: #110E3C;
  background-color: #E7E7EB;
}



ul.next-days-list {
  grid-area: next-days-list;
  height: 20vh;
  width: 65%;
  display: flex;
  justify-content: space-between;
  place-self: start center;
  gap: 0 1vw;
}

li.next-day-item {
  height: 100%;
  background-color: #1E213A;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.date {
  font: 500 1rem 'Raleway', sans-serif;
  color: #E7E7EB;
}

img.climate {
  width: 60%;
}

.max-min {
  font: 500 1rem 'Raleway', sans-serif;
  display: flex;
  gap: 1rem;
}

.max {
  color: #E7E7EB;
}

.min {
  color: #A09FB1;
}


.todays-hightlights {
  grid-area: todays-hightlights;
  width: 80%;
  display: grid;
  place-self: center center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "title title"
    "wind humidity"
    "visibility air-pressure"
  ;
  gap: 3vh 4vw;
}

.todays-hightlights .title {
  grid-area: title;
  font: 700 1.5rem 'Raleway', sans-serif;
}

.todays-hightlights .first-row-wrapper {
  display: contents;
}

.todays-hightlights .first-row-wrapper>.hightlight {
  height: 29vh;
}

.todays-hightlights .hightlight {
  background-color: #1E213A;
  color: #E7E7EB;
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh 0;
}

.hightlight .title {
  font: 500 1rem 'Raleway', sans-serif;
}

/* .hightlight .big-number {} */
.big-number .number {
  font: 700 4rem 'Raleway', sans-serif;
}

.big-number .not-number {
  font: 500 2.25rem 'Raleway', sans-serif;
}


.wind-status {
  grid-area: wind;
}

.wind-status .wind-direction {
  font: 500 14px 'Raleway', sans-serif;
}

.humidity-status {
  grid-area: humidity;
}

.humidity-status .progress-bar-parent {
  width: 80%;
  height: 1.5vh;
  position: relative;
  background-color: #E7E7EB;
  border-radius: 80px;
  font: 700 12px 'Raleway', sans-serif;
}

.progress-bar-parent .bg-bar-child {
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #FFEC65;
  border-radius: 80px;
}

.percentages {
  width: 100%;
  position: absolute;
  bottom: 100%;
  display: flex;
  justify-content: space-between;
}

.percentage-icon {
  position: absolute;
  top: 100%;
  right: 0;
}

.visibility-status {
  grid-area: visibility;
}

.air-pressure-status {
  grid-area: air-pressure;
}


footer {
  grid-area: footer;
  color: #A09FB1;
  font: 500 14px 'Raleway', sans-serif;
  place-self: end center;
}

@media (max-width: 375px) {

  #app .semi-drawer:has(.search-for-places) + .main-content { display: none; }

  .search-buttons {
    padding: 0 2rem;
  }

  .parent {
    overflow: visible;
  }

  .main-content {
    gap: 10vh 0;
  }

  ul.next-days-list {
    height: max-content;
    width: 100%;
    flex-wrap: wrap;
    gap: 5vh 1vw;
  }

  li.next-day-item {
    width: 45%;
    height: 25vh;
    justify-content: space-evenly;
  }




  .todays-hightlights {
    width: 100%;
    display: grid;
    place-self: center center;
    grid-template-columns: 1fr;
    grid-template-rows: none;
    grid-auto-rows: auto;
    grid-template-areas:
      "title"
      "wind "
      "humidity"
      "visibility"
      "air-pressure"
    ;
    gap: 5vh 0;
  }


  .todays-hightlights .first-row-wrapper>.hightlight {
    height: 32vh;
  }

  .todays-hightlights .hightlight {
    height: 24vh;
    gap: 3vh 0;
  }

  footer {
    white-space: nowrap;
  }


}
</style>
