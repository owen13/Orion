<template>
    <ul>
        <knowledge-element
            v-for="topic in topics"
            :key="topic.id"
            :id="topic.id"
            :topic-name="topic.title"
            :description="topic.description"
            @select-topic="$emit('select-topic', $event)"
        ></knowledge-element>
    </ul>
</template>

<script>
import KnowledgeElement from "@/components/WorkingWithComponents/KnowledgeBase/KnowledgeElement";

export default {
    components: {KnowledgeElement},
    props: ['topics'],
    emits: ['select-topic']
};
</script>