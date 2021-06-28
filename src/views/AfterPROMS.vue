<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <h2 style="color:#1E88E5">You have completed most of the study so far!</h2>
            In the following pages, we're going to ask some questions regarding the study.
        </section>
        <br>
    </body>
    <!-- <div v-if="state.showButton"> -->
        <Button label="Proceed" @click="enableNext()" class="p-button-success" />
    <!-- </div> -->
    <!-- <div v-else> -->
        <!-- I'm sorry, it seems you have progressed further on another tab. -->
    <!-- </div> -->
</template>

<script>
import { onMounted, reactive, computed } from 'vue';

import {useRoute} from 'vue-router'
import router from '@/router/index.js'

import Button from 'primevue/button';

import axios from 'axios'

export default {
    components: {
        Button
    },

    setup(){
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            // showButton: true,
            // previousTime: null,
            progressReplies: {},
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        function enableNext() {
            stopTimer()
            addDemographics()
            router.push({ name: 'DKEffect', params: { userId: userId.value } })
        }

        function startTimer() {
            state.timer = setInterval(()=>{
                state.reactionTime += 10
            }, 10)
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.progressReplies["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                progressPage: state.progressReplies
            }, {headers})
        }

        return {
            state, enableNext, addDemographics, startTimer, stopTimer, userId
            // groundHogDay
            }
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