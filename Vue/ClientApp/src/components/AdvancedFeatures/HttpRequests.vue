<template>
<!--    <learning-survey @survey-submit="storeSurvey"></learning-survey>-->
    <learning-survey @survey-submit="storeSurvey"></learning-survey>
    <user-experiences></user-experiences>
<!--    <user-experiences :results="savedSurveyResults"></user-experiences>-->
</template>

<script>
import LearningSurvey from './http-requests/LearningSurvey.vue';
import UserExperiences from './http-requests/UserExperiences.vue';

export default {
    name: "HttpRequests",
    components: {
        LearningSurvey,
        UserExperiences,
    },
    data() {
        return {
            //savedSurveyResults: [],
        };
    },
    methods: {
        // storeSurvey(surveyData) {
        //     const surveyResult = {
        //         name: surveyData.userName,
        //         rating: surveyData.rating,
        //         id: new Date().toISOString(),
        //     };
        //     this.savedSurveyResults.push(surveyResult);
        //     console.log(surveyResult);
        // },
    },
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    
    html {
        font-family: sans-serif;
    }
    
    body {
        margin: 0;
    }
</style>