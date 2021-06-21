<template>
    <div>
        <h4>32. I don't like singing in public because I'm afraid that I would sing wrong notes.</h4>
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
                    value.question = "question32"
                    if (prevalue != '') {
                        prevalue.question = "question32"
                    }
                    props.getAnswer(value, prevalue)
                }
            })

            return { state}
        }
    }
</script>

<style lang="scss" scoped>
    .p-field-radiobutton, h4{
        text-align: left;
        margin-left: 300px;
    }
</style>