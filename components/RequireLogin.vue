<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const redirectPath = ref('/');

onMounted(() => {
  if (!isConnected()) {
    redirectPath.value = route.fullPath;
    router.push({ path: '/login', query: { redirect: redirectPath.value } });
  }
});
</script>

<template></template>