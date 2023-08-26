<template>
    <div class="todays-hightlights">
        <span class="title">Today’s Hightlights </span>
        <div class="first-row-wrapper">
            <div class="hightlight wind-status">
                <span class="title">Wind status</span>
                <div class="big-number">
                    <span class="number">{{ windSpeed }}</span>
                    <span class="not-number"> mph</span>
                </div>
                <span class="wind-direction">From: {{ windDirection }}</span>
            </div>
            <div class="hightlight humidity-status">
                <span class="title">Humidity</span>
                <div class="big-number">
                    <span class="number">{{humidityPercent }}</span>
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
                <span class="number">{{ visibility }}</span>
                <span class="not-number"> miles</span>
            </div>
        </div>
        <div class="hightlight air-pressure-status">
            <span class="title">Air Pressure</span>
            <div class="big-number">
                <span class="number">{{ airPressure }}</span>
                <span class="not-number"> mb</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import store from "../store";

export default {
    setup() {
        const humidityPercent = computed(
            () => Math.floor(store.state.todayWeather.currentConditions.humidity)
        );
        const airPressure = computed(
            () => store.state.todayWeather.currentConditions.pressure
        );
        const windSpeed = computed(
            () => store.state.todayWeather.currentConditions.windspeed
        );
        const windDirection = computed(
            () => degToCard(store.state.todayWeather.currentConditions.winddir)
        );
        const visibility = computed(
            () => store.state.todayWeather.currentConditions.visibility || '🌚'
        );

        // https://gist.github.com/felipeskroski-zz/8aec22f01dabdbf8fb6b?permalink_comment_id=3485882#gistcomment-3485882
        const degToCard = (value) => {
            value = parseFloat(value);
            if (value <= 11.25) return "N";
            value -= 11.25;
            var allDirections = [
                "NNE",
                "NE",
                "ENE",
                "E",
                "ESE",
                "SE",
                "SSE",
                "S",
                "SSW",
                "SW",
                "WSW",
                "W",
                "WNW",
                "NW",
                "NNW",
                "N",
            ];
            var dIndex = parseInt(value / 22.5);
            return allDirections[dIndex] ? allDirections[dIndex] : "N";
        }

        return {
            humidityPercent,
            airPressure,
            windSpeed,
            windDirection,
            visibility
        };
    },
};
</script>

<style scoped>
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
        "visibility air-pressure";
    gap: 3vh 4vw;
}

.todays-hightlights .title {
    grid-area: title;
    font: 700 1.5rem "Raleway", sans-serif;
}

.todays-hightlights .first-row-wrapper {
    display: contents;
}

.todays-hightlights .first-row-wrapper>.hightlight {
    height: 29vh;
}

.todays-hightlights .hightlight {
    background-color: #1e213a;
    color: #e7e7eb;
    height: 22vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3vh 0;
}

.hightlight .title {
    font: 500 1rem "Raleway", sans-serif;
}

/* .hightlight .big-number {} */
.big-number .number {
    font: 700 4rem "Raleway", sans-serif;
}

.big-number .not-number {
    font: 500 2.25rem "Raleway", sans-serif;
}

.wind-status {
    grid-area: wind;
}

.wind-status .wind-direction {
    font: 500 14px "Raleway", sans-serif;
}

.humidity-status {
    grid-area: humidity;
}

.humidity-status .progress-bar-parent {
    width: 80%;
    height: 1.5vh;
    position: relative;
    background-color: #e7e7eb;
    border-radius: 80px;
    font: 700 12px "Raleway", sans-serif;
}

.progress-bar-parent .bg-bar-child {
    height: 100%;
    width: v-bind(humidityPercent + '%');
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffec65;
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
</style>
