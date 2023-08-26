<template>
    <li class="next-day-item">
        <span class="date">{{ date }}</span>
        <img :src="`src/assets/${iconName}.png`" :alt="`${iconName}`" class="climate">
        <div class="max-min">
            <span class="max">{{ tempMax }}°{{ currentMeasure }}</span>
            <span class="min">{{ tempMin }}°{{ currentMeasure }}</span>
        </div>
    </li>
</template>

<script>
import { computed, ref } from 'vue'
import store from '../store'

import { useWeatherLocation } from '../composables/useWeatherLocation'

export default {
    name: 'NextDayItem',
    props: ['weather'],
    setup(props) {

        // COMPOSABLE
        const { convertToFahrenheit } = useWeatherLocation()

        // COMPUTEDS
        const currentMeasure = computed(() => store.state.currentMeasure)
        
        const currentMeasureIsFahrenheit = computed(() => store.state.currentMeasure === 'F')
        
        const date = computed(() => {
            const day = new Date(props.weather.datetime).getDate()
            const now = new Date().getDate()

            return (day === now) ? 'Tomorrow' : props.weather.datetime
        })

        const iconName = computed(() => props.weather.icon)

        const tempMin = computed(() => {
            const roundedTemp = Math.floor(props.weather.tempmin)
            if (!currentMeasureIsFahrenheit.value) return roundedTemp

            return convertToFahrenheit(roundedTemp)
        })

        const tempMax = computed(() => {
            const roundedTemp = Math.floor(props.weather.tempmax)
            if (!currentMeasureIsFahrenheit.value) return roundedTemp

            return convertToFahrenheit(roundedTemp)
        })

        return {
            currentMeasure,
            date,
            iconName,
            tempMin,
            tempMax,
        }
    }
}
</script>

<style scoped>
li.next-day-item {
    height: 100%;
    padding: 0.5rem;
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
</style>