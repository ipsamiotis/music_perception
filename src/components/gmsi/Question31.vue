<template>
    <div>
        <h4>31-34. I am not able to sing in harmony when somebody is singing a familiar tune.</h4>
        <div v-for="option of state.agreeOptions" :key="option.key" class="p-field-radiobutton">
            <RadioButton :id="option.key" name="option" :value="option.value" v-model="state.value"/>
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
                    {value: 'Completely Disagree', key: 1},
                    {value: 'Strongly Disagree', key: 2},
                    {value: 'Disagree', key: 3},
                    {value: 'Neither Agree or Disagree', key: 4},
                    {value: 'Agree', key: 5},
                    {value: 'Strongly Agree', key: 6},
                    {value: 'Completely Agree', key: 7},
                ],
                value: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    value.question = "question31"
                    if (prevalue != '') {
                        prevalue.question = "question31"
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
        margin-left: 170px;
    }
    // h4 {
    //     text-align: left;
    // }
    .radio-options {
        text-align: center;
        position: relative;
    }
</style>