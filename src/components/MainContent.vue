<template>
    <div class="main-content">
        <div class="measure-selector">
            <button class="circle-btn celsius" :class="currentMeasure === 'C' ? 'active' : ''"
                @click="setMeasure('C')">°C</button>
            <button class="circle-btn fahrenheit" :class="currentMeasure === 'F' ? 'active' : ''"
                @click="setMeasure('F')">°F</button>
        </div>

        <NextDaysList />

        <TodaysHightlightsGrid />

        <footer>created by Nehuen - devChallenges.io</footer>
    </div>
</template>

<script>
import { computed } from 'vue'
import store from '../store'

import NextDaysList from '../components/NextDaysList.vue'
import TodaysHightlightsGrid from '../components/TodaysHightlightsGrid.vue'

export default {
    name: "MainContent",
    components: {
        NextDaysList,
        TodaysHightlightsGrid
    },
    setup() {
        const currentMeasure = computed(() => store.state.currentMeasure)

        const setMeasure = (measure) => {
            store.commit('setCurrentMeasure', measure)
        }

        return {
            currentMeasure,
            setMeasure
        }
    }
}
</script>

<style scoped>
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
    gap: 3vh 0;
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
    background-color: #585676;
    color: #E7E7EB;
    font: 700 1.125rem 'Raleway', sans-serif;
}

.measure-selector button.active {
    color: #110E3C;
    background-color: #E7E7EB;
}

footer {
    grid-area: footer;
    color: #A09FB1;
    font: 500 14px 'Raleway', sans-serif;
    place-self: end center;
}

@media (max-width: 375px) {
    .main-content {
        gap: 10vh 0;
    }
}
</style>