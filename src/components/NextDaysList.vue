<template>
    <ul class="next-days-list">
        <NextDayItem v-for="(nextDay, indexNextDay) in nextDays" :key="indexNextDay" :weather="nextDay" />
    </ul>
</template>

<script>
import { ref, computed } from 'vue'
import store from '../store';
import NextDayItem from '../components/NextDayItem.vue'

export default {
    name: 'NextDaysList',
    components: {
        NextDayItem
    },
    setup() {
        const nextDays = computed(() => store.getters.weatherOnNextDays(5))

        return {
            nextDays
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

@media (max-width: 375px) {
    ul.next-days-list {
        height: auto;
        width: 100%;
        gap: 5vh 1vw;
    }
}
</style>