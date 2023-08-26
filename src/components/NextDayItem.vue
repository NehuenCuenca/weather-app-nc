<template>
    <li class="next-day-item">
        <span class="date">{{ date }}</span>
        <img :src="`src/assets/${iconName}.png`"  :alt="`${iconName}`" class="climate">
        <div class="max-min">
            <span class="max">{{ tempMax }}°C</span>
            <span class="min">{{ tempMin }}°C</span>
        </div>
    </li>
</template>

<script>
import { computed, ref } from 'vue'

export default {
    name: 'NextDayItem',
    props: ['weather'],
    setup(props) {

        const date = computed(() => props.weather.datetime)
        const iconName = computed(() => props.weather.icon)
        const tempMin  = computed(() => Math.floor(props.weather.tempmin))
        const tempMax  = computed(() => Math.floor(props.weather.tempmax))

        return {
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