<template>
    <head>
        <title>Music Skill Assessment</title>
    </head>
    <body>
        <header>
            <h1>Music Skill Assessment</h1>
        </header>
        <section>
            <h3>Do you have any comments, remarks, or suggestions for our study? Your thoughts are valuable to us.</h3>
            <Textarea v-model="state.feedback" rows="5" cols="50" />
            <br>
            <Button icon="pi pi-check" label="Submit" @click="proceed()" class="p-button-success" />
        </section>
    </body>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'

import {useRoute} from 'vue-router'
import router from '@/router/index.js'

import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

import axios from 'axios'

export default {
    components: {
        Textarea,
        Button
    },
    setup () {
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            feedback: '',
            feedbackReplies: {},
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        function proceed(){
            if ((/\S/.test(state.feedback)) && (state.feedback.length >= 2)) {
                state.feedbackReplies["feedback"] = state.feedback
                addDemographics()
                stopTimer()
                router.push('/final')
            } else {
                alert("Your feedback will help us improve our studies in the future.")
            }
        }

        function startTimer() {
            state.timer = setInterval(()=>{
                state.reactionTime += 10
            }, 10)
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.feedbackReplies["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                feedback: state.feedbackReplies
            }, {headers})
        }

        return {
            state,
            proceed
        }
    }
}
</script>

<style lang="scss" scoped>

</style>