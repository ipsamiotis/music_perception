<template>
    <div>
        <h4>14. "I engaged in regular, daily practice of a musical instrument (including voice) for_ years."</h4>
        <div v-for="option of state.numOptions" :key="option.key" class="p-field-radiobutton">
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
                numOptions: [
                    {name: '0', key: 1},
                    {name: '1', key: 2},
                    {name: '2', key: 3},
                    {name: '3', key: 4},
                    {name: '4-5', key: 5},
                    {name: '6-9', key: 6},
                    {name: '10 or more', key: 7},
                ],
                value: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    value.question = "question14"
                    if (prevalue != '') {
                        prevalue.question = "question14"
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