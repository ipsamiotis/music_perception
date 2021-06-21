<template>
    <div>
        <h4>24. I have trouble recognizing a familiar song when played in a different way or by a different performer.</h4>
        <div v-for="option of state.agreeOptions" :key="option.key" class="p-field-radiobutton">
            <RadioButton :id="option.key" name="option" :value="option" v-model="state.value"/>
            <label :for="option.key">{{option.name}}</label>
        </div>
    </div>
</template>

<script>
    import {reactive, watch} from 'vue'
    import RadioButton from 'primevue/radiobutton';
    export default {
        components: {
            RadioButton
        },
        props: {
            getAnswer: Function
        },

        setup(props){
            const state = reactive({
                agreeOptions: [
                    {name: 'Completely Disagree', key: 1},
                    {name: 'Strongly Disagree', key: 2},
                    {name: 'Disagree', key: 3},
                    {name: 'Neither Agree or Disagree', key: 4},
                    {name: 'Agree', key: 5},
                    {name: 'Strongly Agree', key: 6},
                    {name: 'Completely Agree', key: 7},
                ],
                value: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    value.question = "question24"
                    if (prevalue != '') {
                        prevalue.question = "question24"
                    }
                    props.getAnswer(value, prevalue)
                }
            })

            return { state}
        }
    }
</script>

<style lang="scss" scoped>
    .p-field-radiobutton{
        // text-align: left;
        margin-left: 290px;
    }
    // h4 {
    //     text-align: left;
    // }
    .radio-options {
        text-align: center;
        position: relative;
    }
</style>