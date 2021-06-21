import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-light-indigo/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css';

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.mount('#app')
// app.directive('my-directive', {
//     mounted() {
//         this.$router.replace('/')
//     }
// })
