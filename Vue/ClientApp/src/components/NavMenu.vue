<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container">
                <a class="navbar-brand">Vue JS Template for .NET 5</a>
                <button class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-label="Toggle navigation"
                        @click="toggle">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"
                     v-bind:class="{show: isExpanded}">
                    <ul class="navbar-nav flex-grow">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Home' }" class="nav-link text-dark">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Counter' }" class="nav-link text-dark">Counter</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'FetchData' }" class="nav-link text-dark">Fetch Data</router-link>
                        </li>

                        <!-- Section 1-3 -->
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle" @click="selectMenu('2')">The Basics</a>
                            <ul class="dropdown-menu" :style="{display: selectedMenu === '2' ? 'block' : 'none'}">
                                <li class="nav-link">
                                    <router-link :to="{ name: 'DataBinding' }" class="nav-link text-dark">Data Binding</router-link>
                                </li>
                                <li class="nav-link">
                                    <router-link :to="{ name: 'Events' }" class="nav-link text-dark">Events</router-link>
                                </li>
                                <li class="nav-link-item">
                                    <router-link :to="{ name: 'DynamicStyling' }" class="nav-link text-dark">Dynamic Styling</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'ConditionalContentAndLists' }" class="nav-link text-dark">Conditional Content & Lists</router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- Section 4 -->
                        <li class="nav-item">
                            <router-link :to="{ name: 'MonsterSlayer' }" class="nav-link text-dark">Monster Slayer</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<style>
a.navbar-brand {
    white-space: normal;
    text-align: center;
    word-break: break-all;
}

html {
    font-size: 14px;
}

@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
}

.box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
}
</style>
<script>
export default {
    name: "NavMenu",
    data() {
        return {
            isExpanded: false,
            selectedMenu: ''
        }
    },
    methods: {
        collapse() {
            this.isExpanded = false;
        },

        toggle() {
            this.isExpanded = !this.isExpanded;
        },
         
        selectMenu(menu) {
            console.log(menu);
            if (this.selectedMenu === menu)
                this.selectedMenu = '';
            else
                this.selectedMenu = menu;
        }   
            
    }
}
</script>