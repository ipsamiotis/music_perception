<template>
    <div>
        <h3>Music Skill Test.</h3>
        <small>After completing the tasks below, you'll be presented with a token. Use that token in the text field to continue.</small><br>
        <strong>Enter token here: </strong>
        <InputText id="continueToken" type="text" v-model="state.token"/>
        <Button label="Continue" @click="stopTimer();addDemographics();$router.push('nasa')" :disabled="state.isDisabled"/>
        <br>
        <br>
        <iframe src="https://webapp.uibk.ac.at/psychologie/psyuibk/index.php/394639?lang=en" width="100%"
            height="920" frameborder="1"></iframe>
    </div>
</template>

<script>
import { reactive, onMounted, watch } from 'vue'

import axios from 'axios'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
    components: {
        Button,
        InputText
    },
    setup () {
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
            state.promsReplies.push({"time_spent": state.reactionTime})
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${state.lastId}`, {
                proms: state.promsReplies
            }, {headers});
        }

        return {
            state, getAnswer, getResultsSoFar, stopTimer, addDemographics
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
</style>