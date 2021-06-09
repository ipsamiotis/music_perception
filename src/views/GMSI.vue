<template>
    <div>
        <h3>Please select the most appropriate category for following questions:</h3>
        <!-- <component :is="state.currentComponent" v-bind="state.currentProperties"></component> -->
        <transition name="slide-fade" mode="out-in">
        <div v-if="state.gmsiReplies.length === 0">
            <Question1 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 1">
            <Question2 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 2">
            <Question3 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 3">
            <Question4 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 4">
            <Question5 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 5">
            <Question6 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 6">
            <Question7 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 7">
            <Question8 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 8">
            <Question9 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 9">
            <Question10 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 10">
            <Question11 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 11">
            <Question12 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 12">
            <Question13 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 13">
            <Question14 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 14">
            <Question15 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 15">
            <Question16 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 16">
            <Question17 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 17">
            <Question18 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 18">
            <Question19 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 19">
            <Question20 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 20">
            <Question21 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 21">
            <Question22 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 22">
            <Question23 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 23">
            <Question24 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 24">
            <Question25 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 25">
            <Question26 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 26">
            <Question27 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 27">
            <Question28 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 28">
            <Question29 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 29">
            <Question30 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 30">
            <Question31 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 31">
            <Question32 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 32">
            <Question33 :getAnswer="getAnswer"/>
        </div>
        <div v-else-if="state.gmsiReplies.length === 33">
            <Question34 :getAnswer="getAnswer"/>
        </div>
        <div v-else>
            <h4 style="text-align:center">Thank you for your answers!</h4>
        </div>
        </transition>

        <!-- <div v-else-if="state.gmsiReplies.length === 34">
            <Question35 :getAnswer="getAnswer"/>
        </div> -->
        <!--
        <h4>35. The instrument I play best (including voice) is:</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>36. What age did you start to play an instrument?</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>37. "Do you have absolute pitch? Absolute or perfect pitch is the ability to recognise and name an isolated musical tone without a reference tone, e.g. being able to say 'F#' if someone plays that note on the piano."</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        -->
    </div>
    <Button label="Next" @click="$router.push('nasa')" :disabled="state.isDisabled"/>
</template>

<script>
import { reactive } from 'vue';

import Button from 'primevue/button';

import Question1 from "@/components/Question1"
import Question2 from "@/components/Question2"
import Question3 from "@/components/Question3"
import Question4 from "@/components/Question4"
import Question5 from "@/components/Question5"
import Question6 from "@/components/Question6"
import Question7 from "@/components/Question7"
import Question8 from "@/components/Question8"
import Question9 from "@/components/Question9"
import Question10 from "@/components/Question10"
import Question11 from "@/components/Question11"
import Question12 from "@/components/Question12"
import Question13 from "@/components/Question13"
import Question14 from "@/components/Question14"
import Question15 from "@/components/Question15"
import Question16 from "@/components/Question16"
import Question17 from "@/components/Question17"
import Question18 from "@/components/Question18"
import Question19 from "@/components/Question19"
import Question20 from "@/components/Question20"
import Question21 from "@/components/Question21"
import Question22 from "@/components/Question22"
import Question23 from "@/components/Question23"
import Question24 from "@/components/Question24"
import Question25 from "@/components/Question25"
import Question26 from "@/components/Question26"
import Question27 from "@/components/Question27"
import Question28 from "@/components/Question28"
import Question29 from "@/components/Question29"
import Question30 from "@/components/Question30"
import Question31 from "@/components/Question31"
import Question32 from "@/components/Question32"
import Question33 from "@/components/Question33"
import Question34 from "@/components/Question34"

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
    },

    setup(){
        const state = reactive({
            isDisabled : true,
            gmsiReplies: []
        })

        async function getAnswer(answer, prevAnswer){
            if (state.gmsiReplies.indexOf(prevAnswer) != -1) {
                await sleep(200)
                replaceReply(answer, state.gmsiReplies.indexOf(prevAnswer))
            } else {
                await sleep(200)
                addReply(answer)
            }
            console.log(state.gmsiReplies)
        }

        function addReply(reply) {
            state.gmsiReplies.push(reply)
            enableNext()
        }

        function replaceReply(reply, index) {
            state.gmsiReplies.splice(index, 1, reply)
            enableNext()
        }

        function enableNext() {
            if (state.gmsiReplies.length == 34 ){
                state.isDisabled = false
            }
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        return { state, getAnswer, addReply, replaceReply, enableNext, sleep}
    }
}

</script>

<style lang="scss" scoped>
    .p-field-radiobutton, h4{
        text-align: left;
        margin-left: 150px;
    }
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all 0.7s ease-out;
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
</style>