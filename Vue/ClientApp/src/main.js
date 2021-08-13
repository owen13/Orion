import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import TheHeader from "@/components/Layout/TheHeader";
import BaseCard from "@/components/UI/BaseCard"
import BaseButton from "@/components/UI/BaseButton"
import BaseDialog from "@/components/UI/BaseDialog"

const app = createApp(App)

app.component('the-header', TheHeader);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.use(router)
app.mount('#myApp')
