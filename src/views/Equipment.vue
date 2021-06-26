<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <!-- <h2 style="text-align: left">Task Description</h2> -->
            <h3 style="border-bottom: 4px solid #efefef;">Please indicate the audio equipment you used during the music skill test, its condition and how noisy was your environment at the moment.</h3>
            <div class="equipQ">
                <h4>What audio equipment were you using during the music skill test?</h4>
                <div class="p-field-radiobutton">
                    <RadioButton id="equip1" name="equipment" value="Headphones" v-model="state.equipment" />
                    <label for="equip1">Headphones</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="equip2" name="equipment" value="Earphones" v-model="state.equipment" />
                    <label for="equip2">Earphones</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="equip3" name="equipment" value="Laptop_speakers" v-model="state.equipment" />
                    <label for="equip3">Laptop Speakers</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="equip4" name="equipment" value="Dedicated_speakers" v-model="state.equipment" />
                    <label for="equip4">Dedicated Speakers</label>
                </div>
            </div>
            <div class="equipQ">
                <h4>What was the condition of your audio equipment?</h4>
                <div class="p-field-radiobutton">
                    <RadioButton id="cond1" name="condition" value="Excellent" v-model="state.condition" />
                    <label for="cond1">Excellent</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="cond2" name="condition" value="Good" v-model="state.condition" />
                    <label for="cond2">Good</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="cond3" name="condition" value="Fair" v-model="state.condition" />
                    <label for="cond3">Fair</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="cond4" name="condition" value="Poor" v-model="state.condition" />
                    <label for="cond4">Poor</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="cond5" name="condition" value="Bad" v-model="state.condition" />
                    <label for="cond5">Bad</label>
                </div>
            </div>
            <div class="equipQ">
                <h4>Does your audio equipment have any impairment?</h4>
                <div class="p-field-radiobutton">
                    <RadioButton id="impair1" name="impairment" value="Imperceptible" v-model="state.impairment" />
                    <label for="impair1">Imperceptible</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="impair2" name="impairment" value="Perceptible_but_not_annoying" v-model="state.impairment" />
                    <label for="impair2">Perceptible, but not annoying</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="impair3" name="impairment" value="Slightly_annoying" v-model="state.impairment" />
                    <label for="impair3">Slightly annoying</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="impair4" name="impairment" value="Annoying" v-model="state.impairment" />
                    <label for="impair4">Annoying</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="impair5" name="impairment" value="Very_annoying" v-model="state.impairment" />
                    <label for="impair5">Very_annoying</label>
                </div>
            </div>
            <h4>How noisy was the environment around you? <small>(Quiet: 1 - Uncomfortably Noisy: 10)</small></h4>
            <span><strong>{{state.noise}}</strong></span>
            <br>
            <div class="slider">
                <Slider v-model="state.noise" :step="1" :min="1" :max="10"/>
            </div>
            <br>
            <div class="prompt" v-if="state.noise <= 2 && Number.isInteger(state.noise)"><small>{{state.noiseLevels[0]}}</small></div>
            <div class="prompt" v-else-if="(state.noise <= 4) && (state.noise > 2) && Number.isInteger(state.noise)"><small>{{state.noiseLevels[1]}}</small></div>
            <div class="prompt" v-else-if="(state.noise <= 6) && (state.noise > 4) && Number.isInteger(state.noise)"><small>{{state.noiseLevels[2]}}</small></div>
            <div class="prompt" v-else-if="(state.noise <= 8) && (state.noise > 6) && Number.isInteger(state.noise)"><small>{{state.noiseLevels[3]}}</small></div>
            <div class="prompt" v-else-if="(state.noise <= 10) && (state.noise > 8) && Number.isInteger(state.noise)"><small>{{state.noiseLevels[4]}}</small></div>
            <br>
        </section>
        <br>
        <!-- <br> -->
        <div style="margin-bottom: 30px;" id="next-button">
            <Button label="Proceed" @click="stopTimer();addDemographics();$router.push({ name: 'NASA', params: { userId: userId } })" :disabled="state.isDisabled"/>
        </div>
    </body>
</template>

<script>
import { reactive, watch, onMounted, computed } from 'vue';
import {useRoute} from 'vue-router'

import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Slider from 'primevue/slider';

import axios from 'axios'

export default {
    components: {
        RadioButton,
        Button,
        Slider
    },
    setup () {
        const route = useRoute();
        const userId = computed(() => route.params.userId);

        const state = reactive({
            equipment: '',
            condition: '',
            impairment: '',
            noise: null,
            noiseLevels: [
                '"Someone could comfortably hear you use a whisper/very quite voice from 1 metre (~3 feet) away (e.g. library)"',
                '"You could easily hold a conversation with someone 1 metre (~3 feet) away from you without raising your voice"',
                '"Conversation is possible with someone 1 metre (~3 feet) away, but requires you to raise your voice (e.g., noisy cafe)"',
                '"You need to shout to be heard by someone 1 metre (~3 feet) away. Difficult to hold a conversation"',
                '"Cannot be heard by someone 1 metre (~3 feet) away, even when shouting. Volume level may be uncomfortable after a short time"'
            ],
            isDisabled : true,
            equipReplies: {},
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        watch(
            () => [state.equipment, state.condition, state.impairment, state.noise],
            ([equipment, condition, impairment, noise], [preequipment, precondition, preimpairment, prenoise]) => {

                if (equipment != preequipment) {
                    state.equipReplies["type"] = equipment
                    enableNext()
                }
                if (impairment != preimpairment) {
                    state.equipReplies["impairment"] = impairment
                    enableNext()
                }
                if (condition != precondition) {
                    state.equipReplies["condition"] = condition
                    enableNext()
                }
                if (noise != prenoise) {
                    state.equipReplies["env_noise"] = noise
                    enableNext()
                }
            }
        )

        function enableNext() {
            if (Object.keys(state.equipReplies).length == 4 ){
                state.isDisabled = false
            }
        }

        function startTimer() {
            state.timer = setInterval(()=>{
                state.reactionTime += 10
            }, 10)
        }

        function stopTimer() {
            clearInterval(state.timer)
            state.equipReplies["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                equipment: state.equipReplies
            }, {headers});
        }

        return {state, enableNext, addDemographics, startTimer, stopTimer, userId}
    }
}
</script>

<style lang="scss" scoped>
    header {
        text-align: left;
    }
    section {
        text-align: center;
        margin-left: 10px;
    }
    .p-field-radiobutton, h4{
        text-align: left;
        margin-left: 150px;
    }
    .noise {
        float: left;
    }
    .p-slider-horizontal, .p-inputtext {
    width: 14rem;
        // margin-left: 150px;
    }
    .p-slider-vertical {
        height: 14rem;
    }
    .slider {
        // float: left;
        text-align: left;
        // display: inline-block;
        margin-left: 160px;
        // margin-top: 20px
    }
    .prompt {
        text-align: left;
        margin-left: 150px;
    }
    span {
        color: #1E88E5;
        margin-top: 13px;
        float: left;
        margin-left: 410px;
    }
</style>