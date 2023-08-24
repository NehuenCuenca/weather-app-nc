<template>
  <SemiDrawer />

  <MainContent />
</template>

<script>
import SemiDrawer from './components/SemiDrawer.vue'
import MainContent from './components/MainContent.vue'

export default {
  components: { SemiDrawer, MainContent },
  setup() {

    // Usar el composable aca tambien
    
    return {}
  },
};
</script>

<style>
@media (max-width: 375px) {
  #app .semi-drawer:has(.search-for-places)+.main-content {
    display: none;
  }

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
