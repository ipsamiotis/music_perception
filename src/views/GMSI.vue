<template>
    <div>
        <h3>Please select the most appropriate category for following questions:</h3>
        <Question1 :getAnswer="getAnswer"/>
        <Question2 :getAnswer="getAnswer"/>
        <Question3 :getAnswer="getAnswer"/>
        <Question4 :getAnswer="getAnswer"/>
        <!-- <h4>1. I spend a lot of my free time doing music-related activities.</h4>
        <div v-for="option of state.agreeOptions" :key="option.key" class="p-field-radiobutton">
            <RadioButton :id="option.key" name="question1" :value="option" v-model="state.value"/>
            <label :for="option.key">{{option.name}}</label>
        </div> -->
        <!-- <h4>2. "I enjoy writing about music, for example on blogs and forums."</h4>
        <div v-for="option of state.agreeOptions" :key="option.key" class="p-field-radiobutton">
            <RadioButton :id="option.key" name="question2" :value="option" v-model="state.value"/>
            <label :for="option.key">{{option.name}}</label>
        </div>
        <h4>3. I often read or search the internet for things related to music.</h4>
        <div v-for="option of state.agreeOptions" :key="option.key" class="p-field-radiobutton">
            <RadioButton :id="option.key" name="question3" :value="option" v-model="state.value3"/>
            <label :for="option.key">{{option.name}}</label>
        </div>
        <h4>4. I don't spend much of my disposable income on music.</h4>
        <div v-for="option of state.agreeOptions" :key="option.key" class="p-field-radiobutton">
            <RadioButton :id="option.key" name="option4" :value="option" v-model="state.value4"/>
            <label :for="option.key">{{option.name}}</label>
        </div>
        <h4>5. Music is kind of an addiction for me - I couldn't live without it.</h4>
        <div v-for="option of state.agreeOptions" :key="option.key" class="p-field-radiobutton">
            <RadioButton :id="option.key" name="option5" :value="option" v-model="state.value5"/>
            <label :for="option.key">{{option.name}}</label>
        </div> -->
        <!-- <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>6. I listen attentively to music for _____ per day.</h4>
        <SelectButton v-model="value1" :options="minsOptions" optionLabel="name" />
        <h4>7. I keep track of new music that I come across (e.g. new artists or recordings).</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>8. I sometimes choose music that can trigger shivers down my spine.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>9. Pieces of music rarely evoke emotions for me.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>10. I often pick certain music to motivate or excite me.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>11. I am able to identify what is special about a given musical piece.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>12. I am able to talk about the emotions that a piece of music evokes for me.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>13. Music can evoke my memories of past people and places.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>14. "I engaged in regular, daily practice of a musical instrument (including voice) for_ years."</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>15. "At the peak of my interest, I practised my primary instrument for _ hours per day."</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>16. I have never been complimented for my talents as a musical performer.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>17. I have had formal training in music theory for _ years.</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>18. I have had _ years of formal training on a musical instrument (including voice) during my lifetime.</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>19. I can play _ musical instruments</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>20. I would not consider myself a musician.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>21. I am able to judge whether someone is a good singer or not.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>22. I find it difficult to spot mistakes in a performance of a song even if I know the tune.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>23. I can compare and discuss differences between two performances or versions of the same piece of music.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>24. I have trouble recognizing a familiar song when played in a different way or by a different performer.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>25. I can tell when people sing or play out of time with the beat.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>26. I can tell when people sing or play out of tune.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>27. "When I sing, I have no idea whether I'm in tune or not."</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>28. "If somebody starts singing a song I don't know, I can usually join in."</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>29. I can sing or play music from memory.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>30. I am able to hit the right notes when I sing along with a recording.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>31. I am not able to sing in harmony when somebody is singing a familiar tune.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>32. I don't like singing in public because I'm afraid that I would sing wrong notes.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>33. "After hearing a new song two or three times, I can usually sing it by myself."</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>34. I only need to hear a new tune once and I can sing it back hours later.</h4>
        <SelectButton v-model="value2" :options="agreeOptions" optionLabel="name" />
        <h4>35. The instrument I play best (including voice) is:</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>36. What age did you start to play an instrument?</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" />
        <h4>37. "Do you have absolute pitch? Absolute or perfect pitch is the ability to recognise and name an isolated musical tone without a reference tone, e.g. being able to say 'F#' if someone plays that note on the piano."</h4>
        <SelectButton v-model="value3" :options="agreeOptions" optionLabel="name" /> -->
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

export default {
    components: {
        Button,
        Question1,
        Question2,
        Question3,
        Question4,
    },

    setup(){
        const state = reactive({
            // agreeOptions: [
            //     {name: 'Completely Disagree', key: 1},
            //     {name: 'Strongly Disagree', key: 2},
            //     {name: 'Disagree', key: 3},
            //     {name: 'Neither Agree or Disagree', key: 4},
            //     {name: 'Agree', key: 5},
            //     {name: 'Strongly Agree', key: 6},
            //     {name: 'Completely Agree', key: 7},
            // ],
            // minsOptions: [
            //     {name: '0-15 mins', key: 1},
            //     {name: '15-30 mins', key: 2},
            //     {name: '30-60 mins', key: 3},
            //     {name: '60-90 mins', key: 4},
            //     {name: '2 hrs', key: 5},
            //     {name: '2-3 hrs', key: 6},
            //     {name: '4 hrs or more', key: 7},
            // ],
            // numOptions: [
            //     {name: '0', key: 1},
            //     {name: '1', key: 2},
            //     {name: '2', key: 3},
            //     {name: '3', key: 4},
            //     {name: '4-5', key: 5},
            //     {name: '6-9', key: 6},
            //     {name: '10 or more', key: 7},
            // ]
            isDisabled : true,
            gmsiReplies: []
        })

        function getAnswer(answer, prevAnswer){
            if (state.gmsiReplies.indexOf(prevAnswer) != -1) {
                replaceReply(answer, state.gmsiReplies.indexOf(prevAnswer))
            } else {
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
            if (state.gmsiReplies.length == 4 ){
                state.isDisabled = false
            }
        }

        return { state, getAnswer, addReply, replaceReply, enableNext}
    }
}

</script>

<style lang="scss" scoped>
    .p-field-radiobutton, h4{
        text-align: left;
        margin-left: 150px;
    }
</style>