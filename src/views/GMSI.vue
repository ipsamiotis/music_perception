<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <h3>Please select the most appropriate category for following questions:</h3>
            <div class="radioOptions">
                <transition name="slide-fade" mode="out-in">
                <div v-if="state.questionToken === 0">
                    <Question1 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 1">
                    <Question2 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 2">
                    <Question3 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 3">
                    <Question4 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 4">
                    <Question5 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 5">
                    <Question6 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 6">
                    <Question7 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 7">
                    <Question8 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 8">
                    <Question9 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 9">
                    <Attention1 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 10">
                    <Question10 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 11">
                    <Question11 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 12">
                    <Question12 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 13">
                    <Question13 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 14">
                    <Question14 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 15">
                    <Question15 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 16">
                    <Question16 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 17">
                    <Question17 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 18">
                    <Attention2 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 19">
                    <Question18 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 20">
                    <Question19 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 21">
                    <Question20 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 22">
                    <Question21 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 23">
                    <Question22 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 24">
                    <Question23 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 25">
                    <Question24 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 26">
                    <Question25 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 27">
                    <Question26 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 28">
                    <Question27 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 29">
                    <Question28 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 30">
                    <Attention3 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 31">
                    <Question29 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 32">
                    <Question30 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 33">
                    <Question31 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 34">
                    <Question32 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 35">
                    <Question33 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 36">
                    <Question34 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="state.questionToken === 37">
                    <Question35 :getAnswer="getAnswer"/>
                    <Button style="margin-right: 30px" label="Back" @click="prevQuestion()" :disabled="state.backDisabled"/>
                </div>
                <div v-else-if="Object.keys(state.gmsiReplies).length === 38">
                    <h4 style="text-align:center;">Thank you for your answers!</h4>
                    You just finished the first part of the study.
                    You can proceed now to the second part, the <strong>Music Skill Test</strong>!
                    <br>
                    <Button label="Proceed" @click="stopTimer();addDemographics();$router.push({ name: 'PROMS', params: { userId: userId } })" :disabled="state.isDisabled"/>
                </div>
                </transition>
            </div>
        </section>
    </body>
</template>

<script>
import { reactive, onMounted, computed } from 'vue';
import {useRoute} from 'vue-router'

import Button from 'primevue/button';

import axios from 'axios'

import Question1 from "@/components/gmsi/Question1"
import Question2 from "@/components/gmsi/Question2"
import Question3 from "@/components/gmsi/Question3"
import Question4 from "@/components/gmsi/Question4"
import Question5 from "@/components/gmsi/Question5"
import Question6 from "@/components/gmsi/Question6"
import Question7 from "@/components/gmsi/Question7"
import Question8 from "@/components/gmsi/Question8"
import Question9 from "@/components/gmsi/Question9"
import Question10 from "@/components/gmsi/Question10"
import Question11 from "@/components/gmsi/Question11"
import Question12 from "@/components/gmsi/Question12"
import Question13 from "@/components/gmsi/Question13"
import Question14 from "@/components/gmsi/Question14"
import Question15 from "@/components/gmsi/Question15"
import Question16 from "@/components/gmsi/Question16"
import Question17 from "@/components/gmsi/Question17"
import Question18 from "@/components/gmsi/Question18"
import Question19 from "@/components/gmsi/Question19"
import Question20 from "@/components/gmsi/Question20"
import Question21 from "@/components/gmsi/Question21"
import Question22 from "@/components/gmsi/Question22"
import Question23 from "@/components/gmsi/Question23"
import Question24 from "@/components/gmsi/Question24"
import Question25 from "@/components/gmsi/Question25"
import Question26 from "@/components/gmsi/Question26"
import Question27 from "@/components/gmsi/Question27"
import Question28 from "@/components/gmsi/Question28"
import Question29 from "@/components/gmsi/Question29"
import Question30 from "@/components/gmsi/Question30"
import Question31 from "@/components/gmsi/Question31"
import Question32 from "@/components/gmsi/Question32"
import Question33 from "@/components/gmsi/Question33"
import Question34 from "@/components/gmsi/Question34"
import Question35 from "@/components/gmsi/Question35"
import Attention1 from "@/components/gmsi/Attention1"
import Attention2 from "@/components/gmsi/Attention2"
import Attention3 from "@/components/gmsi/Attention3"

export default {
    components: {
        Button,
        Question1,
        Question2,
        Question3,
        Question4,
        Question5,
        Question6,
        Question7,
        Question8,
        Question9,
        Question10,
        Question11,
        Question12,
        Question13,
        Question14,
        Question15,
        Question16,
        Question17,
        Question18,
        Question19,
        Question20,
        Question21,
        Question22,
        Question23,
        Question24,
        Question25,
        Question26,
        Question27,
        Question28,
        Question29,
        Question30,
        Question31,
        Question32,
        Question33,
        Question34,
        Question35,
        Attention1,
        Attention2,
        Attention3
    },

    setup(){
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            isDisabled : true,
            backDisabled: true,
            questionToken: 0,
            gmsiReplies: {},
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        async function getAnswer(answer){
            await sleep(200)
            Object.assign(state.gmsiReplies, answer)
            state.questionToken += 1
            enableNext()
        }

        function enableNext() {
            if (state.questionToken == Object.keys(state.gmsiReplies).length) {
                state.backDisabled = false
            }
            if (Object.keys(state.gmsiReplies).length == 38 ){
                state.backDisabled = true
                state.isDisabled = false
            }
        }

        function prevQuestion() {
            if (state.questionToken > 0) {
                state.questionToken -= 1
            }
            if (state.questionToken == 0) {
                state.backDisabled = true
            }
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function startTimer() {
            state.timer = setInterval(()=>{
                state.reactionTime += 10
            }, 10)
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.gmsiReplies["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                gmsi: state.gmsiReplies
            }, {headers});
        }

        return { state, getAnswer, prevQuestion, enableNext, sleep, addDemographics, startTimer, stopTimer, userId}
    }
}

</script>

<style lang="scss" scoped>
    .p-field-radiobutton{
        text-align: left;
        margin-left: 150px;
    }
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all 0.4s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to
    {
        transform: translateX(20px);
        opacity: 0;
    }

    header {
        text-align: left;
    }
    // #branding {
    //     float: left;
    // }
    // #next-button {
    //     float: right;
    //     margin-top: 25px;
    // }
    // section {
    //     text-align: center;
    //     margin-left: 10px;
    // }
    .radioOptions {
        display: inline-block;
        // margin: 100px;
        vertical-align: top;
    }
</style>