<template>
    <div>
        <h4>17/35. I have had formal training in music theory for _ years.</h4>
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
                    {name: '0.5', key: 2},
                    {name: '1', key: 3},
                    {name: '2', key: 4},
                    {name: '3', key: 5},
                    {name: '4-6', key: 6},
                    {name: '7 or more', key: 7},
                ],
                value: {},
                gmsiValue: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    state.gmsiValue["question17"] = value.name
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
        margin-left: 150px;
    }
    // h4 {
    //     text-align: left;
    // }
    .radio-options {
        text-align: center;
        position: relative;
    }
</style>