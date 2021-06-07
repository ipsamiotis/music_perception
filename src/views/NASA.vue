<template>
        <div>
        <h4>How mentally demanding was the task?</h4>
        <Slider v-model="value" :step="1"/>
        <h4>How physically demanding was the task?</h4>
        <Slider v-model="value" :step="1"/>
        <h4>How hurried or rushed was the pace of the task?</h4>
        <Slider v-model="value" :step="1"/>
        <h4>How successful were you in accomplishing what you were asked to do?</h4>
        <Slider v-model="value" :step="1"/>
        <h4>How hard did you have to work to accomplish your level of performance?</h4>
        <Slider v-model="value" :step="1"/>
        <h4>How insecure, discouraged, irritated, stressed, and annoyed wereyou?</h4>
        <Slider v-model="value" :step="1"/>
    </div>
    <router-link to="demographics" replace>Demographics</router-link>
</template>

<script>
import { ref } from 'vue';
import Slider from 'primevue/slider';

export default {
    components: {
        Slider
    },

    setup(){
        const value = ref([1, 10]);

        return {value}
    }

}


</script>

<style lang="scss" scoped>
.p-slider-horizontal, .p-inputtext {
    width: 14rem;
}
.p-slider-vertical {
     height: 14rem;
}
</style>