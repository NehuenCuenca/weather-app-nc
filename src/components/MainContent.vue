<template>
    <div class="main-content">
        <div class="measure-selector">
            <button class="circle-btn celsius active">°C</button>
            <button class="circle-btn fahrenheit">°F</button>
        </div>

        <ul class="next-days-list">
            <li class="next-day-item">
                <span class="date">Tomorrow</span>
                <img src="../assets/Snow.png" alt="" class="climate">
                <div class="max-min">
                    <span class="max">16°C</span>
                    <span class="min">11°C</span>
                </div>
            </li>
            <li class="next-day-item">
                <span class="date">Tomorrow</span>
                <img src="../assets/Snow.png" alt="" class="climate">
                <div class="max-min">
                    <span class="max">16°C</span>
                    <span class="min">11°C</span>
                </div>
            </li>
            <li class="next-day-item">
                <span class="date">Tomorrow</span>
                <img src="../assets/Snow.png" alt="" class="climate">
                <div class="max-min">
                    <span class="max">16°C</span>
                    <span class="min">11°C</span>
                </div>
            </li>
            <li class="next-day-item">
                <span class="date">Tomorrow</span>
                <img src="../assets/Snow.png" alt="" class="climate">
                <div class="max-min">
                    <span class="max">16°C</span>
                    <span class="min">11°C</span>
                </div>
            </li>
            <li class="next-day-item">
                <span class="date">Tomorrow</span>
                <img src="../assets/Snow.png" alt="" class="climate">
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

export default {
    name: "MainContent",
    setup() {

        return {}
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
</style>