<template>
    <div>
        <h4>19. I can play _ musical instruments</h4>
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
                value: {}
            })

            watch(
            () => state.value, (value, prevalue) => {
                if (value != prevalue) {
                    value.question = "question19"
                    if (prevalue != '') {
                        prevalue.question = "question19"
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
        margin-left: 150px;
    }
</style>