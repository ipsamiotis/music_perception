<template>
    <div>
        <h4>12/35. I am able to talk about the emotions that a piece of music evokes for me.</h4>
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
                value: {},
                gmsiValue: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    state.gmsiValue["question12"] = value.name
                    props.getAnswer(state.gmsiValue)
                }
            })

            return { state}
        }
    }
</script>

<style lang="scss" scoped>
    .p-field-radiobutton{
        // text-align: left;
        margin-left: 200px;
    }
    // h4 {
    //     text-align: left;
    // }
    .radio-options {
        text-align: center;
        position: relative;
    }
</style>