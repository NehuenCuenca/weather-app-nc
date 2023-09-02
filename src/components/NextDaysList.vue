<template>
    <ul class="next-days-list">
        <template v-if="haveWeatherInfo">
            <NextDayItem  v-for="(nextDay, indexNextDay) in nextDays" :key="indexNextDay" :weather="nextDay" />
        </template>
        <li v-else class="no-info" v-for="(_, indexElem) in 5" :key="indexElem">No location given 🗿</li>
    </ul>
</template>

<script>
import { computed } from 'vue'
import store from '../store';
import NextDayItem from '../components/NextDayItem.vue'

export default {
    name: 'NextDaysList',
    components: {
        NextDayItem
    },
    setup() {
        const nextDays = computed(() => store.getters.weatherOnNextDays(5))
        const haveWeatherInfo = computed(() => store.getters.haveWeatherInfo)

        return {
            nextDays,
            haveWeatherInfo
        }
    }
}
</script>

<style scoped>
ul.next-days-list {
    grid-area: next-days-list;
    height: 20vh;
    width: 65%;
    display: flex;
    justify-content: space-between;
    place-self: start center;
    gap: 3vh 1vw;
}

li.no-info {
    text-align: center;
}

@media (max-width: 375px) {
    ul.next-days-list {
        height: auto;
        width: 100%;
        gap: 5vh 1vw;
    }
}
</style>