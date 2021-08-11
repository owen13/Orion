import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Counter from "@/components/Template/Counter.vue";
import FetchData from "@/components/Template/FetchData.vue";

import DataBinding from "@/components/TheBasics/DataBinding.vue";
import Events from "@/components/TheBasics/Events.vue";
import DynamicStyling from "@/components/TheBasics/DynamicStyling.vue";
import ConditionalContentAndLists from "@/components/TheBasics/ConditionalContentAndLists.vue";
import MonsterSlayer from "@/components/TheBasics/MonsterSlayer.vue";
import BehindTheScenes from "@/components/BehindTheScenes.vue";

import FriendDirectory_NeedsChildComponents from "@/components/WorkingWithComponents/FriendDirectory_NeedsChildComponents.vue"
import FriendDirectory_UsingChildComponents from "@/components/WorkingWithComponents/FriendDirectory_UsingChildComponents.vue"
import KnowledgeBase_ComponentsPassingOnVariables from "@/components/WorkingWithComponents/KnowledgeBase_ComponentsPassingOnVariables.vue"
import KnowledgeBase_InjectingComponents from "@/components/WorkingWithComponents/KnowledgeBase_InjectingComponents.vue"
import MoreOnComponents from "@/components/WorkingWithComponents/MoreOnComponents.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Template/Counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/Template/FetchData",
        name: "FetchData",
        component: FetchData,
    },

    // Section 2
    {
        path: "/TheBasics/DataBinding",
        name: "DataBinding",
        component: DataBinding,
    },
    {
        path: "/TheBasics/Events",
        name: "Events",
        component: Events,
    },
    {
        path: "/TheBasics/DynamicStyling",
        name: "DynamicStyling",
        component: DynamicStyling,
    },

    // Section 3
    {
        path: "/TheBasics/ConditionalContentAndLists",
        name: "ConditionalContentAndLists",
        component: ConditionalContentAndLists,
    },

    // Section 4
    {
        path: "/TheBasics/MonsterSlayer",
        name: "MonsterSlayer",
        component: MonsterSlayer,
    },

    // Section 5
    {
        path: "/BehindTheScenes",
        name: "BehindTheScenes",
        component: BehindTheScenes,
    },

    // Section 6
    {
        path: "/WorkingWithComponents/FriendDirectory_NeedsChildComponents",
        name: "FriendDirectory_NeedsChildComponents",
        component: FriendDirectory_NeedsChildComponents,
    },
    {
        path: "/WorkingWithComponents/FriendDirectory_UsingChildComponents",
        name: "FriendDirectory_UsingChildComponents",
        component: FriendDirectory_UsingChildComponents,
    },
    // Section 8
    {
        path: "/WorkingWithComponents/KnowledgeBase_ComponentsPassingOnVariables",
        name: "KnowledgeBase_ComponentsPassingOnVariables",
        component: KnowledgeBase_ComponentsPassingOnVariables,
    },
    {
        path: "/WorkingWithComponents/KnowledgeBase_InjectingComponents",
        name: "KnowledgeBase_InjectingComponents",
        component: KnowledgeBase_InjectingComponents,
    },
    // Section 9
    {
        path: "/WorkingWithComponents/MoreOnComponents",
        name: "MoreOnComponents",
        component: MoreOnComponents,
    },
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;