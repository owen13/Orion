import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import TheHeader from "@/components/Layout/TheHeader";
import BaseCard from "@/components/UI/BaseCard"
import BaseButton from "@/components/UI/BaseButton"

const app = createApp(App)

app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(router)
app.mount('#myApp')
