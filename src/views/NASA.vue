<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <br>
            <h3>How mentally demanding was the overall study? <div class="values"><small>{{state.value1}}</small></div></h3>
            <div class="slider">
                <div class="values"> Not demanding at all</div>
                <Slider style="vertical-align: middle;margin-left: 25px;display: inline-block;margin-right: 25px;" v-model="state.value1" :step="1" :min="0" :max="20"/>
                <div class="values">Very demanding</div>
            </div>
            <h3>How physically demanding was the overall study? <div class="values"><small>{{state.value2}}</small></div></h3>
            <div class="slider">
                <div class="values">Not demanding at all</div>
                <Slider style="vertical-align: middle;margin-left: 25px;display: inline-block;margin-right: 25px;" v-model="state.value2" :step="1" :min="0" :max="20"/>
                <div class="values">Very demanding</div>
            </div>
            <h3>How hurried or rushed was the pace of the overall study? <div class="values"><small>{{state.value3}}</small></div></h3>
            <div class="slider">
                <div class="values">Not hurried at all</div>
                <Slider style="vertical-align: middle;margin-left: 15px;display: inline-block;margin-right: 20px;" v-model="state.value3" :step="1" :min="0" :max="20"/>
                <div class="values">Too rushed</div>
            </div>
            <h3>How successful were you in accomplishing what you were asked to do throughout the study? <div class="values"><small>{{state.value4}}</small></div></h3>
            <div class="slider">
                <div class="values">Perfect</div>
                <Slider style="vertical-align: middle;margin-left: 57px;display: inline-block;margin-right: 25px;" v-model="state.value4" :step="1" :min="0" :max="20"/>
                <div class="values">Failure</div>
            </div>
            <h3>How hard did you have to work to accomplish your level of performance throughout the study? <div class="values"><small>{{state.value5}}</small></div></h3>
            <div class="slider">
                <div class="values">Not hard at all</div>
                <Slider style="vertical-align: middle;margin-left: 25px;display: inline-block;margin-right: 25px;" v-model="state.value5" :step="1" :min="0" :max="20"/>
                <div class="values">Very hard</div>
            </div>
            <h3>How insecure, discouraged, irritated, stressed, and annoyed were you throughout the study? <div class="values"><small>{{state.value6}}</small></div></h3>
            <div class="slider">
                <div class="values">Not at all</div>
                <Slider style="vertical-align: middle;margin-left: 68px;display: inline-block;margin-right: 25px;" v-model="state.value6" :step="1" :min="0" :max="20"/>
                <div class="values">Very much</div>
            </div>
        </section>
        <br>
    </body>
    <Button icon="pi pi-check" label="Submit" @click="enableNext()" class="p-button-success" />
</template>

<script>
import { onMounted, reactive, computed } from 'vue';

import {useRoute} from 'vue-router'
import router from '@/router/index.js'

import Slider from 'primevue/slider';
import Button from 'primevue/button';

import axios from 'axios'

export default {
    components: {
        Slider,
        Button
    },

    setup(){
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            nasaReplies: [],
            isDisabled: true,
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        function enableNext() {
            if (state.value1 != null && state.value2 != null && state.value3 != null && state.value4 != null && state.value5 != null && state.value6 != null){
                state.nasaReplies = [{"nasa1": state.value1}, {"nasa2": state.value2}, {"nasa3": state.value3}, {"nasa4": state.value4}, {"nasa5": state.value5}, {"nasa6": state.value6}]
                stopTimer()
                addDemographics()
                router.push('/final')
            } else {
                alert("Please reply to all questions first")
            }
        }

        function startTimer() {
            state.timer = setInterval(()=>{
                state.reactionTime += 10
            }, 10)
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.nasaReplies.push({"time_spent": state.reactionTime})
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                nasa: state.nasaReplies
            }, {headers})
        }

        return {state, enableNext, addDemographics, startTimer, stopTimer}
    }

}


</script>

<style lang="scss" scoped>
    .p-slider-horizontal, .p-inputtext {
        width: 14rem;

        // margin-left: 150px;
    }
    .p-slider-vertical {
        height: 14rem;
    }
// h3 {
//     text-align: left;
// }
    header {
        text-align: left;
    }
    section {
        text-align: center;
        margin-left: 10px;
    }
    h3{
        text-align: center;
    }
    .slider {
        display: inline-block;
    }
    .values {
        color: #1E88E5;
        display: inline-block;
        // margin-left: 25px;
        // margin-right: 25px;
        // width: 60px;
    }
</style>