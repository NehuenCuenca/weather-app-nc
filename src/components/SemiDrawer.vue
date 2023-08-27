<template>
    <div class="semi-drawer">
        <div class="search-buttons">
            <button class="search-places" @click="openSemiDrawer">Search places</button>
            <button class="activate-location circle-btn" @click="getWeatherFromCurrentPosition">🧭</button>
        </div>

        <form class="search-for-places" v-if="isSearchingPlaces" @submit.prevent="submitForm">
            <button type="button" class="close-btn" @click="() => isSearchingPlaces = false" tabindex="-1">X</button>

            <div class="write-block">
                <input type="text" tabindex="0" placeholder="🔍 search location" v-model="searchLocation">
                <button type="submit">Search</button>
            </div>

            <ul class="default-places-list">
                <li class="default-place-item">
                    <button @click.prevent="selectDefaultAdress">London</button>
                </li>
                <li class="default-place-item">
                    <button @click.prevent="selectDefaultAdress">Barcelona</button>
                </li>
                <li class="default-place-item">
                    <button @click.prevent="selectDefaultAdress">Long Beach</button>
                </li>
            </ul>
        </form>

        <div class="parent">
            <img src="../assets/Cloud-background.png" alt="cloud" class="bg-img">
            <img :src="relativePathOfIcon" alt="principal" class="principal-img">
        </div>

        <div class="big-grade-today">
            <span class="number">{{ temperature }}</span>
            <span class="measure">°{{ currentMeasure }}</span>
        </div>

        <span class="word-description">{{ shortDescription }}</span>

        <div class="tiny-details">
            <span class="today">Today</span>
            <span class="date">{{ date }}</span>
            <span class="location">📍 {{ address }}</span>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue'

import { useWeatherLocation } from '../composables/useWeatherLocation'
import store from '../store'

export default {
    name: "SemiDrawer",
    setup() {
        // STATE
        const isSearchingPlaces = ref(false)
        const searchLocation = ref('')

        // COMPOSABLE
        const { getWeatherFromCurrentPosition, getWeatherOfLocation, convertToFahrenheit } = useWeatherLocation()


        // COMPUTED
        const currentMeasure = computed(() => store.state.currentMeasure)
        const currentMeasureIsFahrenheit = computed(() => currentMeasure.value === 'F')
        const todayWeather = computed(() => store.state.todayWeather)
        const temperature = computed(() => {
            const roundedTemp = Math.floor(store.state.todayWeather.currentConditions.temp)
            if (!currentMeasureIsFahrenheit.value) return roundedTemp

            return convertToFahrenheit(roundedTemp)
        })
        const shortDescription = computed(() => store.state.todayWeather.currentConditions.conditions)
        const date = computed(() => store.state.todayWeather.days[0].datetime)
        const address = computed(() => store.state.todayWeather.address)
        // const iconName = computed(() => store.state.todayWeather.currentConditions.icon)
        const relativePathOfIcon = computed(() => {
            const iconName = store.state.todayWeather.currentConditions.icon
            const pathUrlIcon = new URL(`../assets/${iconName}.png`, import.meta.url).href

            return pathUrlIcon
        })


        // LIFECYCLE
        onMounted(() => {
            getWeatherFromCurrentPosition()
        })

        // METHODS
        const openSemiDrawer = () => { isSearchingPlaces.value = true }

        const submitForm = () => {
            getWeatherOfLocation(searchLocation.value)
            isSearchingPlaces.value = false
            searchLocation.value = ''
        }

        const selectDefaultAdress = (e) => {
            const defaultAdress = e.target.textContent
            getWeatherOfLocation(defaultAdress)
            isSearchingPlaces.value = false
        }

        return {
            isSearchingPlaces,
            openSemiDrawer,
            searchLocation,
            submitForm,
            todayWeather,
            temperature,
            shortDescription,
            date,
            address,
            relativePathOfIcon,
            selectDefaultAdress,
            getWeatherFromCurrentPosition,
            currentMeasure
        }
    }
}
</script>

<style scoped>
.semi-drawer {
    position: relative;
    background-color: #1e213a;
    padding: 1rem 0;
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
    /* padding: .5rem;
  border-radius: 100%; */
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
    width: 30%;
    position: absolute;
    top: 25%;
    left: 35%;
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
</style>