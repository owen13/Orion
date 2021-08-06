import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Counter from "@/components/Counter.vue";
import FetchData from "@/components/FetchData.vue";

import DataBinding from "@/components/DataBinding.vue";
import Events from "@/components/Events.vue";
import DynamicStyling from "@/components/DynamicStyling.vue";
import MonsterSlayer from "@/components/MonsterSlayer.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Counter",
        name: "Counter",
        component: Counter,
    },
    {
        path: "/FetchData",
        name: "FetchData",
        component: FetchData,
    },
    {
        path: "/DataBinding",
        name: "DataBinding",
        component: DataBinding,
    },
    {
        path: "/Events",
        name: "Events",
        component: Events,
    },
    {
        path: "/DynamicStyling",
        name: "DynamicStyling",
        component: DynamicStyling,
    },
    {
        path: "/MonsterSlayer",
        name: "MonsterSlayer",
        component: MonsterSlayer,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;