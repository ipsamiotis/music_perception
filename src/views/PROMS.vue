<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <!-- <h3 style="text-align:left;">Task Description</h3> -->
            To begin the music skill test, <strong>copy your Participant ID</strong> and press the button to access the music skill test. Please <strong>paste it when prompted</strong>.
            <br>

            <!-- <h3>To begin the music skill test , copy the characters below and paste them to the proper </h3> -->
            <!-- First Token:  -->
            <h2>Your Participant ID: <span style="color: #1E88E5;background-color: #efefef;">{{userId}}</span></h2>
            <!-- <strong>After completing</strong> the tasks below, you'll be presented with a <strong>second token</strong>. Use that token in the text field to the <strong>top</strong> to continue. -->
            <!-- When you will finish the music skill test, you will be provided with a <strong>task token</strong>. Please <strong>return to this page</strong> and place that token to the entry below, to continue. -->
            <br>
            <br>
            <br>
            <Button label="Access Music Skill Test here!" @click="openSkillTest()"/>
            <br>
            <!-- <div id="continue-token">
                Enter <strong>task token</strong> here:
                <InputText id="continueToken" type="text" v-model="state.token"/>
                <Button label="Continue" @click="stopTimer();addDemographics();$router.push({ name: 'AfterPROMS', params: { userId: userId } })" :disabled="state.isDisabled"/>
            </div> -->
            <!-- <a href="https://webapp.uibk.ac.at/psychologie/psyuibk/index.php/394639?lang=en">Access Music Skill Test here!</a> -->
            <!-- <iframe src="https://webapp.uibk.ac.at/psychologie/psyuibk/index.php/394639?lang=en" width="100%"
                height="920" frameborder="1"></iframe> -->
        </section>
    </body>
</template>

<script>
import { reactive, onMounted, watch, computed } from 'vue'
import {useRoute} from 'vue-router'

import axios from 'axios'

// import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
    components: {
        Button,
        // InputText
    },
    setup () {
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            isDisabled : true,
            promsReplies: {},
            token: '',
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        watch(
            () => [state.token],
            ([token], [pretoken]) => {
                if (token != pretoken){
                    enableNext()
                }
            }
            )

        async function getAnswer(answer, prevAnswer){
            if (state.promsReplies.indexOf(prevAnswer) != -1) {
                await sleep(200)
                replaceReply(answer, state.promsReplies.indexOf(prevAnswer))
            } else {
                await sleep(200)
                addReply(answer)
            }
        }

        function addReply(reply) {
            state.promsReplies.push(reply)
            enableNext()
        }

        function replaceReply(reply, index) {
            state.promsReplies.splice(index, 1, reply)
            enableNext()
        }

        function enableNext() {
            if (state.token == '091FI32' ){
                state.isDisabled = false
            } else {
                state.isDisabled = true
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
            state.promsReplies["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                proms: state.promsReplies
            }, {headers});
        }

        function openSkillTest(){
            window.open('https://webapp.uibk.ac.at/psychologie/psyuibk/index.php/394639?lang=en')
        }

        return {
            state, getAnswer, stopTimer, addDemographics, userId, openSkillTest
        }
    }
}
</script>

<style lang="scss" scoped>
.sizes {
    .p-inputtext {
        display: block;
        margin-bottom: .5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.p-field * {
    display: block;
}

header {
    text-align: left;
    // padding-top: 10px;
    padding-bottom: 10px;
    // padding-left: 25px;
    height: 55px;
    margin-bottom: 20px;
    overflow: auto;
}

#branding {
    float: left;
}

#continue-token {
    margin-top: 40px;
    display: inline-block;
}

section {
    text-align: center;
    margin-left: 10px;
}
</style>