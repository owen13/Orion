import { createWebHistory, createRouter } from "vue-router";

import Home from "@/components/Home.vue";
import Counter from "@/components/Template/Counter.vue";
import FetchData from "@/components/Template/FetchData.vue";

import DataBinding from "@/components/TheBasics/DataBinding.vue";
import Events from "@/components/TheBasics/Events.vue";
import DynamicStyling from "@/components/TheBasics/DynamicStyling.vue";
import ConditionalContentAndLists from "@/components/TheBasics/ConditionalContentAndLists.vue";
import MonsterSlayer from "@/components/TheBasics/MonsterSlayer.vue";
import BehindTheScenes from "@/components/TheBasics/BehindTheScenes.vue";

import FriendDirectory_NeedsChildComponents from "@/components/WorkingWithComponents/FriendDirectory_NeedsChildComponents.vue"
import FriendDirectory_UsingChildComponents from "@/components/WorkingWithComponents/FriendDirectory_UsingChildComponents.vue"
import KnowledgeBase_ComponentsPassingOnVariables from "@/components/WorkingWithComponents/KnowledgeBase_ComponentsPassingOnVariables.vue"
import KnowledgeBase_InjectingComponents from "@/components/WorkingWithComponents/KnowledgeBase_InjectingComponents.vue"
import UsingSlots from "@/components/WorkingWithComponents/UsingSlots.vue"
import DynamicComponents from "@/components/WorkingWithComponents/DynamicComponents.vue"
import LearningResourcesApp from "@/components/WorkingWithComponents/LearningResourcesApp.vue"

import UsingForms from "@/components/AdvancedFeatures/UsingForms.vue"
import HttpRequests from "@/components/AdvancedFeatures/HttpRequests.vue"
import UsingRouting from "@/components/AdvancedFeatures/UsingRouting.vue"

import NestedRoutes from "@/components/AdvancedFeatures/NestedRoutes.vue"

import TeamsList from "@/components/AdvancedFeatures/nested-routes/teams/TeamsList.vue"
import UsersList from '@/components/AdvancedFeatures/nested-routes/users/UsersList.vue';
import TeamMembers from '@/components/AdvancedFeatures/nested-routes/teams/TeamMembers.vue';
import TeamsFooter from '@/components/AdvancedFeatures/nested-routes/teams/TeamsFooter.vue';
import UsersFooter from '@/components/AdvancedFeatures/nested-routes/users/UsersFooter.vue';

import NotFound from "@/components/NotFound.vue"

const routes = [
    {
        path: "/",
        redirect: "/Home"
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
        //alias: "/"
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
        path: "/TheBasics/BehindTheScenes",
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
        path: "/WorkingWithComponents/UsingSlots",
        name: "UsingSlots",
        component: UsingSlots,
    },
    {
        path: "/WorkingWithComponents/DynamicComponents",
        name: "DynamicComponents",
        component: DynamicComponents,
    },
    // Section 10
    {
        path: "/WorkingWithComponents/LearningResourcesApp",
        name: "LearningResourcesApp",
        component: LearningResourcesApp
    },
    
    // Section 11
    {
        path: "/AdvancedFeatures/UsingForms",
        name: "UsingForms",
        component: UsingForms
    },
    // Section 12
    {
        path: "/AdvancedFeatures/HttpRequests",
        name: "HttpRequests",
        component: HttpRequests
    },
    // Section 13
    {
        path: "/AdvancedFeatures/UsingRouting/:activePage?",
        name: "UsingRouting",
        component: UsingRouting,
        children: [
            {
                path: "team-members/:teamId",
                component: UsingRouting,
            },
        ]
    },
    {
        path: "/AdvancedFeatures/NestedRoutes",
        name: "NestedRoutes",
        component: NestedRoutes,
        children: [
            {
                path: "Teams",
                name: "TeamsList",
                components: { default: TeamsList, footer: TeamsFooter },
                children: [
                    {
                        path: ":teamId",
                        name: "team-members",
                        component: TeamMembers,
                        props: true
                    }
                ]
            },
            {
                path: "Users",
                name: "UsersList",
                meta: { needsAuth: true },
                components: { default: UsersList, footer: UsersFooter },
                beforeEnter(to, from, next) {
                    //console.log('users route beforeEnter');
                    //console.log(to, from)
                    next();
                }
            }
        ]
    },
    
    {
        path: "/:notFound(.*)",
        component: NotFound,
        //redirect: "/Home"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'router-link-active active-link active', // overrides default active class 
    linkExactActiveClass: 'active-link-exact',
    scrollBehavior(to, from, savedPosition) {
        //console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    // console.log('GLOBAL BEFORE-EACH')
    // console.log(to, from)
    
    if (to.meta.needsAuth) {
        console.log('PAGE NEEDS AUTH', to, from)
        
        next();
    } else {
        next();
    }
    
    next();
    
    // next(false);
    // next('/url')
    // next({name: 'pathName', params: { param1: '123'}});
})

router.afterEach((to, from) => {
    // console.log('GLOBAL AFTER-EACH')
    // console.log(to, from)
})

export default router;