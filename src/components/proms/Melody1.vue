<template>
    <div>
        <h4>Melody 1</h4>
        <div class="p-d-flex p-flex-column p-flex-md-row p-ai-center p-jc-center">
            <div class="p-mb-1 p-mr-6">&nbsp;</div>
            <div class="p-mb-1 p-mr-6">&nbsp;</div>
            <div class="p-mb-1 p-mr-6">&nbsp;</div>
            <Button class="p-mb-2 p-mr-2" label="Play" icon="pi pi-play" @click="playSamples()" :disabled="state.isDisabled"/>
            <div class="p-mb-1 p-mr-6">&nbsp;</div>
            <div class="p-mb-1 p-mr-6">&nbsp;</div>
            <div class="p-mb-1 p-mr-6">&nbsp;</div>
            <div class="p-mb-2 p-mr-2">
                <h5>The Last Melody is...</h5>
                <BlockUI :blocked="state.blockedPanel">
                    <div v-for="option of state.sampleOptions" :key="option.key" class="p-field-radiobutton">
                        <RadioButton :id="option.key" name="option" :value="option" v-model="state.skill_reply"/>
                        <label :for="option.key">{{option.name}}</label>
                    </div>
                </BlockUI>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, watch } from 'vue'

import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import BlockUI from 'primevue/blockui';

export default {
    components: {
        Button,
        RadioButton,
        BlockUI
    },
    props: {
        getAnswer: Function
    },
    setup (props) {
        const state = reactive({
            isDisabled : false,
            blockedPanel: true,
            original_path: require("@/assets/samples/melody/Piano_Original.wav"),
            comparison_path: require("@/assets/samples/melody/Piano_Change.wav"),
            sampleOptions: [
                    {name: 'Definitely Same', key: 1},
                    {name: 'Probably Same', key: 2},
                    {name: "I Don't Know", key: 3},
                    {name: 'Probably Different', key: 4},
                    {name: 'Definitely Different', key: 5}
                ],
            skill_reply: {}
        })

        watch(
            () => state.skill_reply, (skill_reply, preskill_reply) => {
                if (skill_reply != preskill_reply) {
                    skill_reply.question = "melody1"
                    if (preskill_reply != '') {
                        preskill_reply.question = "melody1"
                    }
                    props.getAnswer(skill_reply, preskill_reply)
                }
            })

        async function playSamples(){
            state.isDisabled = true
            let sample1 = new Audio(state.original_path)
            let sample2 = new Audio(state.comparison_path)
            sample1.play()
            await sleep(6000)
            sample1.play()
            await sleep(6000)
            sample2.play()
            await sleep(6000)
            state.blockedPanel = false
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        return {
            state, playSamples
        }
    }
}
</script>

<style lang="scss" scoped>

</style>