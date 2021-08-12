<template>
    <section>
        <base-card>
            <template #header>
                <h3>{{ fullName }}</h3>
                <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
            </template>
            <p>{{ infoText }}</p>
        </base-card>
    </section>
</template>

<script>
import BaseBadge from "@/components/UI/BaseBadge";

export default {
    components: {BaseBadge},
    props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
    section p {
        text-align: left;
    }
</style>