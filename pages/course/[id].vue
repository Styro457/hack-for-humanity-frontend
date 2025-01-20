<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<template>
<h1>Some Course: {{ id }}</h1>
</template>

<style scoped>

</style>