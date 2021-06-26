<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <h3>Please indicate how well you believe you performed during the previous skill test</h3>
            <br>
            <!-- <h4>How many of the <strong>total</strong> number of skill tests you believe you answered correctly? <small>(0-36)</small></h4>
            <div class="slider">
                <Slider v-model="state.value1" :step="1" :min="0" :max="36"/>
            </div>
            <span><strong>{{state.value1}}</strong></span> -->
            <h4>How many of the <strong style="color: #1E88E5;">Melody</strong> skill tests you believe you answered correctly? <small>(0-10)</small></h4>
            <div class="slider">
                <Slider v-model="state.value2" :step="1" :min="0" :max="10"/>
            </div>
            <span><strong>{{state.value2}}</strong></span>
            <h4>How many of the <strong style="color: #1E88E5;">Tuning</strong> skill tests you believe you answered correctly? <small>(0-8)</small></h4>
            <div class="slider">
                <Slider v-model="state.value3" :step="1" :min="0" :max="8"/>
            </div>
            <span><strong>{{state.value3}}</strong></span>
            <h4>How many of the <strong style="color: #1E88E5;">Accent</strong> skill tests you believe you answered correctly? <small>(0-10)</small></h4>
            <div class="slider">
                <Slider v-model="state.value4" :step="1" :min="0" :max="10"/>
            </div>
            <span><strong>{{state.value4}}</strong></span>
            <h4>How many of the <strong style="color: #1E88E5;">Speed</strong> skill tests you believe you answered correctly? <small>(0-8)</small></h4>
            <div class="slider">
                <Slider v-model="state.value5" :step="1" :min="0" :max="10"/>
            </div>
            <span><strong>{{state.value5}}</strong></span>
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
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            dkReplies: {},
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
            if (state.value2 != null && state.value3 != null && state.value4 != null && state.value5 != null){
                // state.dkReplies = [state.value2, state.value3, state.value4, state.value5]
                state.dkReplies["melody_self"] = state.value2
                state.dkReplies["tuning_self"] = state.value3
                state.dkReplies["accent_self"] = state.value4
                state.dkReplies["speed_self"] = state.value5
                stopTimer()
                addDemographics()
                router.push({ name: 'Equipment', params: { userId: userId.value } })
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
            state.dkReplies["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                dkeffect: state.dkReplies
            }, {headers})
        }

        return {state, enableNext, addDemographics, startTimer, stopTimer, userId}
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
// h4 {
//     text-align: left;
// }
    header {
        text-align: left;
    }
    section {
        text-align: center;
        margin-left: 10px;
    }
    h4{
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