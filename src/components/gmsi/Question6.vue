<template>
    <div>
        <h4>6-34. I listen attentively to music for _____ per day.</h4>
        <div v-for="option of state.minsOptions" :key="option.key" class="p-field-radiobutton">
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
                minsOptions: [
                    {value: '0-15 mins', key: 1},
                    {value: '15-30 mins', key: 2},
                    {value: '30-60 mins', key: 3},
                    {value: '60-90 mins', key: 4},
                    {value: '2 hrs', key: 5},
                    {value: '2-3 hrs', key: 6},
                    {value: '4 hrs or more', key: 7},
                ],
                value: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    value.question = "question6"
                    if (prevalue != '') {
                        prevalue.question = "question6"
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