<script setup lang="ts">
  const session = useCookie("session")
</script>

<template>
  <div v-if="session">LOGGED IN</div>
  <div v-else>Logged off</div>
</template>

<style scoped>

</style>