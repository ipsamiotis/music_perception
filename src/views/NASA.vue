<template>
    <div style="margin-left: 300px">
        <h4>How mentally demanding was the task? <strong>{{state.value1}}</strong></h4>
        <Slider v-model="state.value1" :step="1" :min="1" :max="10"/>
        <h4>How physically demanding was the task? <strong>{{state.value2}}</strong></h4>
        <Slider v-model="state.value2" :step="1" :min="1" :max="10"/>
        <h4>How hurried or rushed was the pace of the task? <strong>{{state.value3}}</strong></h4>
        <Slider v-model="state.value3" :step="1" :min="1" :max="10"/>
        <h4>How successful were you in accomplishing what you were asked to do? <strong>{{state.value4}}</strong></h4>
        <Slider v-model="state.value4" :step="1" :min="1" :max="10"/>
        <h4>How hard did you have to work to accomplish your level of performance? <strong>{{state.value5}}</strong></h4>
        <Slider v-model="state.value5" :step="1" :min="1" :max="10"/>
        <h4>How insecure, discouraged, irritated, stressed, and annoyed were you? <strong>{{state.value6}}</strong></h4>
        <Slider v-model="state.value6" :step="1" :min="1" :max="10"/>
    </div>
    <Button icon="pi pi-check" label="Submit" @click="enableNext()" class="p-button-success" />
</template>

<script>
import { onMounted, reactive } from 'vue';
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

        async function getResultsSoFar() {
            const { data } = await axios.get("http://localhost:3000/crowd-results/");
            let [last] = data.slice(-1);
            state.lastId = last.id
        }

        function startTimer() {
            state.timer = setInterval(()=>{
                state.reactionTime += 10
            }, 10)
            getResultsSoFar()
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.nasaReplies.push({"time_spent": state.reactionTime})
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${state.lastId}`, {
                nasa: state.nasaReplies
            }, {headers})
        }

        return {state, enableNext, getResultsSoFar, addDemographics, startTimer, stopTimer}
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
h4 {
    text-align: left;
}
</style>