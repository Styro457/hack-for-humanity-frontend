<script setup lang="ts">
const value = ref(null)
const items = ref([])

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}

</script>

<template>
  <div class="title">
    <h1 class="bold-800">Unbiased Reviews of<br>University Courses,<br>All in One Place</h1>
    <h2>
      Easily explore and compare university courses. Read honest student<br> reviews and make informed decisions to find the right course for you.
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