<template>
    <div>
        <h4>19/35. I can play _ musical instruments</h4>
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
                    {name: '4', key: 5},
                    {name: '5', key: 6},
                    {name: '6 or more', key: 7},
                ],
                value: {},
                gmsiValue: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    state.gmsiValue["question19"] = value.name
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
        margin-left: 90px;
    }
    // h4 {
    //     text-align: left;
    // }
    .radio-options {
        text-align: center;
        position: relative;
    }
</style>