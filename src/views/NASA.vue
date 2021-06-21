<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <br>
            <h3>How mentally demanding was the task? <small>(1-10)</small></h3>
            <div class="slider">
                <Slider v-model="state.value1" :step="1" :min="1" :max="10"/>
            </div>
            <span><strong>{{state.value1}}</strong></span>
            <h3>How physically demanding was the task? <small>(1-10)</small></h3>
            <div class="slider">
                <Slider v-model="state.value2" :step="1" :min="1" :max="10"/>
            </div>
            <span><strong>{{state.value2}}</strong></span>
            <h3>How hurried or rushed was the pace of the task? <small>(1-10)</small></h3>
            <div class="slider">
                <Slider v-model="state.value3" :step="1" :min="1" :max="10"/>
            </div>
            <span><strong>{{state.value3}}</strong></span>
            <h3>How successful were you in accomplishing what you were asked to do? <small>(1-10)</small></h3>
            <div class="slider">
                <Slider v-model="state.value4" :step="1" :min="1" :max="10"/>
            </div>
            <span><strong>{{state.value4}}</strong></span>
            <h3>How hard did you have to work to accomplish your level of performance? <small>(1-10)</small></h3>
            <div class="slider">
                <Slider v-model="state.value5" :step="1" :min="1" :max="10"/>
            </div>
            <span><strong>{{state.value5}}</strong></span>
            <h3>How insecure, discouraged, irritated, stressed, and annoyed were you? <small>(1-10)</small></h3>
            <div class="slider">
                <Slider v-model="state.value6" :step="1" :min="1" :max="10"/>
            </div>
            <span><strong>{{state.value6}}</strong></span>
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
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            value6: 0,
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
            if (state.value1 != 0 && state.value2 != 0 && state.value3 != 0 && state.value4 != 0 && state.value5 != 0 && state.value6 != 0){
                state.nasaReplies = [state.value1, state.value2, state.value3, state.value4, state.value5, state.value6]
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
    span {
        color: #1E88E5;
        margin-left: 15px;
    }
</style>