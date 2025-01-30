<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import CourseCard from "~/components/CourseCard.vue";

const route = useRoute();
const router = useRouter();

const searchTerm = ref(route.query.search ?? "");
const searchOption = ref(route.query.option);
const searchResults = ref([]);
const loading = ref(true);

async function search(query: string) {
  try {
    const url = getAPI() + "/courses/search/search_query/" + (query ? "?search_query=" + query : "");
    const response = await $fetch(url, {
      method: "GET",
      credentials: "include",
    });

    if(response.status === "success") {
      return response.data;
    } else {
      await router.push("/");
      return [];
    }
  } catch (err) {
    console.error("Search failed:", err);
    await router.push("/");
    return [];
  }
}

watchEffect(async () => {
  loading.value = true; // Show loading before fetching data
  searchResults.value = await search(searchTerm.value);
  loading.value = false; // Hide loading after data loads
});
</script>

<template>
  <h1>Search of {{ searchOption }}: {{ searchTerm }}</h1>

  <div v-if="loading">
    <p>Loading courses...</p>
  </div>

  <div v-else-if="searchResults.length > 0" class="courses">
    <CourseCard v-for="course in searchResults" :key="course.id" :course="course" />
  </div>

  <p v-else>No results found.</p>
</template>

<style scoped>
.courses {
  width: 50vw;
}
</style>
