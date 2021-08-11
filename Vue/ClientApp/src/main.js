import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NewFriend from './components/WorkingWithComponents/Friends/NewFriend'
import FriendContact from './components/WorkingWithComponents/Friends/FriendContact'

const app = createApp(App)

app.component('new-friend', NewFriend)
app.component('friend-contact', FriendContact)

app.use(router)
app.mount('#app')
