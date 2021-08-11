import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NewFriend from './components/WorkingWithComponents/FriendDirectoryComponents/NewFriend'
import FriendContact from './components/WorkingWithComponents/FriendDirectoryComponents/FriendContact'
 
import ActiveElement from './components/WorkingWithComponents/KnowledgeBase/ActiveElement.vue';
import KnowledgeBase from './components/WorkingWithComponents/KnowledgeBase/KnowledgeBase.vue';
import KnowledgeElement from './components/WorkingWithComponents/KnowledgeBase/KnowledgeElement.vue';
import KnowledgeGrid from './components/WorkingWithComponents/KnowledgeBase/KnowledgeGrid.vue';

const app = createApp(App)

app.component('new-friend', NewFriend);
app.component('friend-contact', FriendContact);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);

app.use(router)
app.mount('#myApp')
