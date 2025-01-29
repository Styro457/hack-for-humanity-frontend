<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="container">
    <span class="subtitle content">CS302</span>
  </div>
  <div class="course-info">
    <h2 class="bold-700">Advanced Algorithms and Data Structures</h2>
    <div class="columns">
      <div class="column first">
          <p class="text"><i class="pi pi-search"></i> Northbridge University, UK</p>
      </div>
      <div class="column second">
        <p class="text"><i class="pi pi-book"></i> Computer Science, Software Engineering,
          Information Technology </p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.course-info {
  width: 70%;
}

.first {
  width: 60%;
}
</style>