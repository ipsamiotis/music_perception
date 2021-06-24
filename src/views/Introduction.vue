<template>
    <head>
        <title>Music Skill Assessment</title>
    </head>
    <body>
        <header>
            <h1>Music Skill Assessment</h1>
        </header>
        <section>
            <div class="p-shadow-1" id="instructions">
                <h3>Task Instructions</h3>
                <strong>Welcome to our study on Music Skills!</strong>
                <br>
                <ul>
                    <li>In the following tasks you are asked to fill in <strong>questionnaires</strong> regarding your familiarity in music (~8mins).</li>
                    <li>You will also participate in a <strong> skill test</strong> to assess your music skills (~15mins) on different categories.</li>
                    <li>Finally, you will be asked to fill in a <strong>post-test survey</strong> (~3mins).</li>
                </ul>
                <br>
                <!-- <h1>WORKER ID</h1> -->
                <!-- You will be asked in certain cases, to use a <strong>token</strong> in order to proceed to the next page. -->
                Make sure you follow the instructions on the tasks, to navigate successfully.
            </div>
            <div style="text-align: center">
                <br>
                <br>
                <Button label="Begin" @click="stopTimer();addDemographics();$router.push({ name: 'Demographics', params: { userId: state.userId } })"/>
            </div>
        </section>
    </body>
</template>

<script>
import { reactive, onMounted } from 'vue'

import Button from 'primevue/button'

import axios from 'axios'

export default {
    components: {
        Button
    },
    setup () {
        const state = reactive({
            userId: '',
            introduction: [],
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        function startTimer() {
            state.timer = setInterval(()=>{
                state.reactionTime += 10
            }, 10)
            state.userId = makeid(6)
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.introduction.push({"time_spent": state.reactionTime})
        }

        async function addDemographics() {
            await axios.post(`http://localhost:3000/crowd-results/`, {
                id: state.userId,
                introduction: state.introduction,
            });
        }

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
        }
            return result;
        }

        return {
            state,
            startTimer,
            stopTimer,
            addDemographics,
            makeid
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    text-align: left;
}
section {
    text-align: left;
    margin-left: 10px;
}
#instructions {
    padding-top: 4px;
    padding-bottom: 10px;
    padding-left: 12px;
    background-color: #efefef;
}
</style>