import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Register components globally
// import NewFriend from './components/WorkingWithComponents/FriendDirectory/NewFriend'
// import FriendContact from './components/WorkingWithComponents/FriendDirectory/FriendContact'

import BaseCard from './components/WorkingWithComponents/UsingSlots/BaseCard'

const app = createApp(App)

// app.component('new-friend', NewFriend);
// app.component('friend-contact', FriendContact);

app.component('base-card', BaseCard);

app.use(router)
app.mount('#myApp')
