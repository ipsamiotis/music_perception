<template>
    <div>
        <h4>6/34. I listen attentively to music for _____ per day.</h4>
        <div v-for="option of state.minsOptions" :key="option.key" class="p-field-radiobutton">
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
                minsOptions: [
                    {name: '0-15 mins', key: 1},
                    {name: '15-30 mins', key: 2},
                    {name: '30-60 mins', key: 3},
                    {name: '60-90 mins', key: 4},
                    {name: '2 hrs', key: 5},
                    {name: '2-3 hrs', key: 6},
                    {name: '4 hrs or more', key: 7},
                ],
                value: {},
                gmsiValue: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    state.gmsiValue["question6"] = value.name
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
        margin-left: 100px;
    }
    // h4 {
    //     text-align: left;
    // }
    .radio-options {
        text-align: center;
        position: relative;
    }
</style>