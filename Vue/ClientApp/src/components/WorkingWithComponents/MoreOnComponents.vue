<template>
    <div id="app">
        <the-header></the-header>
        <badge-list></badge-list>
        <user-info
            :full-name="activeUser.name"
            :info-text="activeUser.description"
            :role="activeUser.role"
        ></user-info>
    </div>
</template>



<script>
import TheHeader from "@/components/WorkingWithComponents/MoreOnComponents/TheHeader";
import BadgeList from "@/components/WorkingWithComponents/MoreOnComponents/BadgeList";
import UserInfo from "@/components/WorkingWithComponents/MoreOnComponents/UserInfo";

export default {
    name: "MoreOnComponents",
    components: {
        'the-header': TheHeader, 
        BadgeList, 
        UserInfo},
    data() {
        return {
            activeUser: {
                name: 'Maximilian Schwarzmüller',
                description: 'Site owner and admin',
                role: 'admin',
            },
        };
    }
}
</script>

<style scoped>
    html {
        font-family: sans-serif;
    }
    
    body {
        margin: 0;
    }
</style>