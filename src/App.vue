<template>
  <div class="semi-drawer">
    <div class="search-buttons">
      <button class="search-places">Search places</button>
      <button class="activate-location">🧭</button>
    </div>

    <img src="./assets/LightRain.png" alt="" />

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
  <div class="main-content">main-content</div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.semi-drawer {
  background-color: #1e213a;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.search-buttons {
  width: 100%;
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
  padding: 0.5rem;
  border-radius: 100%;
}

img {
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
}
</style>
