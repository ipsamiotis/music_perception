<template>
    <body>
        <header>
            <div id="branding">
                <h1>Music Skill Assessment</h1>
            </div>
        </header>
        <section>
            <h3>Please answer a few simple background questions first.</h3>
            <div class="demoQ">
                <h4>What is your occupational status?</h4>
                <div class="p-field-radiobutton">
                    <RadioButton id="occu1" name="occupation" value="Full_Time" v-model="state.occupation" />
                    <label for="occu1">Full Time</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="occu2" name="occupation" value="Part_Time" v-model="state.occupation" />
                    <label for="occu2">Part Time</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="occu3" name="occupation" value="Retired" v-model="state.occupation" />
                    <label for="occu3">Retired</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="occu4" name="occupation" value="Voluntary_Work" v-model="state.occupation" />
                    <label for="occu4">Voluntary Work</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="occu5" name="occupation" value="Unemployed" v-model="state.occupation" />
                    <label for="occu5">Unemployed</label>
                </div>
            </div>
            <div class="demoQ">
                <h4>What is your level of education? (If currently enrolled or highest degree earned)</h4>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu1" name="education" value="No_schooling" v-model="state.education" />
                    <label for="edu1">No schooling</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu2" name="occupation" value="Some high school, no diploma" v-model="state.education" />
                    <label for="edu2">Some high school, no diploma</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu3" name="education" value="High school/HED" v-model="state.education" />
                    <label for="edu3">High school/HED</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu4" name="education" value="Some college, no diploma" v-model="state.education" />
                    <label for="edu4">Some college, no diploma</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu5" name="education" value="Technical/trade/vocational training" v-model="state.education" />
                    <label for="edu5">Technical/trade/vocational training</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu6" name="education" value="Associate degree" v-model="state.education" />
                    <label for="edu6">Associate degree</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu7" name="education" value="Bachelor's degree" v-model="state.education" />
                    <label for="edu7">Bachelor's degree</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu8" name="education" value="Master's degree" v-model="state.education" />
                    <label for="edu8">Master's degree</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu9" name="education" value="Professional degree" v-model="state.education" />
                    <label for="edu9">Professional degree</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="edu10" name="education" value="Doctorate degree" v-model="state.education" />
                    <label for="edu10">Doctorate degree</label>
                </div>
            </div>
            <div class="demoQ">
                <h4>How old are you?</h4>
                <div class="p-field-radiobutton">
                    <RadioButton id="age1" name="age" value="18-25 years" v-model="state.age" />
                    <label for="age1">18-25 years</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="age2" name="age" value="26-35 years" v-model="state.age" />
                    <label for="age2">26-35 years</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="age3" name="age" value="36-45 years" v-model="state.age" />
                    <label for="age3">36-45 years</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="age4" name="age" value="46-55 years" v-model="state.age" />
                    <label for="age4">46-55 years</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="age5" name="age" value="56-65 years" v-model="state.age" />
                    <label for="age5">56-65 years</label>
                </div>
                <div class="p-field-radiobutton">
                    <RadioButton id="age6" name="age" value="Older than 65 years" v-model="state.age" />
                    <label for="age6">Older than 65 years</label>
                </div>
            </div>
        </section>
        <div id="next-button">
            <Button label="Proceed" @click="stopTimer();addDemographics();$router.push({ name: 'GMSI', params: { userId: userId } })" :disabled="state.isDisabled"/>
        </div>
    </body>
</template>

<script>
import { reactive, watch, onMounted, computed } from 'vue';
import {useRoute} from 'vue-router'

import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

import axios from 'axios'

export default {
    components: {
        RadioButton,
        Button
    },

    setup(){
        const route = useRoute();
        const userId = computed(() => route.params.userId);

        const state = reactive({
            occupation : '',
            age : '',
            education : '',
            isDisabled : true,
            demoReplies: {},
            timer: null,
            reactionTime: 0 // in ms
        })

        onMounted(() => {
            setTimeout(() => {
                startTimer()
            })
        })

        watch(
            () => [state.occupation, state.age, state.education],
            ([occupation, age, education], [preoccupation, preage, preeducation]) => {

                if (occupation != preoccupation) {
                    state.demoReplies["occupation"] = occupation
                    enableNext()
                }
                if (education != preeducation) {
                    state.demoReplies["education"] = education
                    enableNext()
                }
                if (age != preage) {
                    state.demoReplies["age"] = age
                    enableNext()
                }
            }
        )

        function enableNext() {
            if (Object.keys(state.demoReplies).length == 3 ){
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
            state.demoReplies["time_spent"] = state.reactionTime
        }

        async function addDemographics() {
            const headers = {"Content-Type": "application/json"}
            await axios.patch(`http://localhost:3000/crowd-results/${userId.value}`, {
                demographics: state.demoReplies
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
    // .demoQ {
    //     display: inline-block;
    // }
    #next-button {
        margin-bottom: 55px;
    }
</style>