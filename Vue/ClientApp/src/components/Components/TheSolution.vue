<template>
    <header>
        <h1>Friend List</h1>
    </header>
    <section id="app">
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
import FriendContact from "@/components/Components/FriendContact";
    export default {
        name: "TheSolution",
        components: {FriendContact},
        data() {
            return {
                friends: [
                    {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '01234 5678 991',
                        email: 'manuel@localhost.com'
                    },
                    {
                        id: 'julie',
                        name: 'Julies Jones',
                        phone: '09876 543 221',
                        email: 'julie@localhost.com'
                    },
                ]    
            }
        },
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    
    html {
        font-family: 'Jost', sans-serif;
    }
    
    body {
        margin: 0;
    }
    
    header {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 1rem;
        background-color: #58004d;
        color: white;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>