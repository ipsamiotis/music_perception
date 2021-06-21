<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
            <div id="continue-token">
                <strong>Enter second token here: </strong>
                <InputText id="continueToken" type="text" v-model="state.token"/>
                <Button label="Continue" @click="stopTimer();addDemographics();$router.push({ name: 'NASA', params: { userId: userId } })" :disabled="state.isDisabled"/>
            </div>
        </header>
        <section>
            <h3>To begin the music skill test below, copy the token below and paste it to the proper field below</h3>
            <h2 style="color: #1E88E5;"><span style="background-color: #efefef;">{{userId}}</span></h2>
            <strong>After completing</strong> the tasks below, you'll be presented with a <strong>second token</strong>. Use that token in the text field to the <strong>top</strong> to continue.
            <br>
            <br>
            <br>
            <iframe src="https://webapp.uibk.ac.at/psychologie/psyuibk/index.php/394639?lang=en" width="100%"
                height="920" frameborder="1"></iframe>
        </section>
    </body>
</template>

<script>
import { reactive, onMounted, watch, computed } from 'vue'
import {useRoute} from 'vue-router'

import axios from 'axios'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
    components: {
        Button,
        InputText
    },
    setup () {
        const route = useRoute();
        const userId = computed(() => route.params.userId)

        const state = reactive({
            isDisabled : true,
            promsReplies: [],
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
            state.promsReplies.push({"time_spent": state.reactionTime})
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                proms: state.promsReplies
            }, {headers});
        }

        return {
            state, getAnswer, stopTimer, addDemographics, userId
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
    float: right;
}

section {
    text-align: center;
    margin-left: 10px;
}
</style>