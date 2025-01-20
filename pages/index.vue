<script setup lang="ts">
const value = ref(null)
const items = ref([])

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}

</script>

<template>
  <div class="title">
    <h1 class="bold-800">Discover Amazing<br>University Courses</h1>
    <h2>
      Lorem ipsum dolor sit amet, consectetur elit. Sed eget est quis arcu.<br>
      Donec elementum congue nulla, ac sollicitudin erat tristique eu.
    </h2>
  </div>
  <div class="card flex flex-wrap justify-center gap-4">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="value" :suggestions="items" @complete="search" autocomplete="on"/>
    </IconField>
  </div>


</template>

<style scoped>

</style>