<script setup lang="ts">
const route = useRoute();

const searchTerm = route.query.search;
const searchOption = route.query.option;
</script>

<template>
<h1>Search of {{searchOption}}: {{ searchTerm}}</h1>
</template>

<style scoped>

</style>