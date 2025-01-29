<script setup lang="ts">
import CourseCard from "~/components/CourseCard.vue";

const route = useRoute();

const searchTerm = route.query.search;
const searchOption = route.query.option;
</script>

<template>
<h1>Search of {{searchOption}}: {{ searchTerm}}</h1>
  <CourseCard />
</template>

<style scoped>

</style>