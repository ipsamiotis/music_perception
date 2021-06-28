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
                Make sure you follow the instructions on the tasks, to navigate successfully.
                <br>
                <br>
                <strong style="color: red">IMPORTANT:</strong> Please only use <strong>Mozilla Firefox</strong> or <strong>Google Chrome</strong> for this study.
                <br>
                <br>
                Regarding Privacy: <b><u>This is an anonymous survey.</u></b> Please do not self-identify yourself as responses may be shared publicly. This survey complies with the GDPR (General Data Protection Regulation).
            </div>
            <div style="text-align: center">
                <br>
                <br>
                <div v-if="(state.isFirefox) || (state.isChrome)">
                    <Button label="Begin" @click="stopTimer();addDemographics();$router.push({ name: 'Demographics', params: { userId: userId } })"/>
                </div>
                <div v-else>
                    Please use Mozilla Firefox or Chrome in this study
                </div>
            </div>
        </section>
    </body>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'

import {useRoute} from 'vue-router'

import Button from 'primevue/button'

import axios from 'axios'

export default {
    components: {
        Button
    },
    setup () {
        const route = useRoute();
        const userId = computed(() => route.params.userId);

        const state = reactive({
            introduction: {},
            timer: null,
            isFirefox: '',
            isChrome: '',
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
            // state.userId = makeid(6)
            checkBrowser()
        }

        function checkBrowser() {
            // Firefox 1.0+
            state.isFirefox = typeof InstallTrigger !== 'undefined';
            // Chrome 1 - 79
            state.isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.introduction["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            await axios.post(`http://localhost:3000/crowd-results/`, {
                id: userId.value,
                introduction: state.introduction,
            });
        }

        // function makeid(length) {
        //     var result           = '';
        //     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        //     var charactersLength = characters.length;
        //     for ( var i = 0; i < length; i++ ) {
        //     result += characters.charAt(Math.floor(Math.random() *
        // charactersLength));
        // }
        //     return result;
        // }

        return {
            state,
            startTimer,
            stopTimer,
            addDemographics,
            userId
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