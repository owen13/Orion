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

import TheProblem from "@/components/WorkingWithComponents/TheProblem.vue"
import ChildComponents from "@/components/WorkingWithComponents/TalkingToChildComponents.vue"

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
        path: "/WorkingWithComponents/TheProblem",
        name: "TheProblem",
        component: TheProblem,
    },
    {
        path: "/WorkingWithComponents/TalkingToChildComponents",
        name: "TalkingToChildComponents",
        component: ChildComponents,
    },
    {
        path: "/WorkingWithComponents/MoreWithComponents",
        name: "MoreWithComponents",
        component: MoreWithComponents,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;