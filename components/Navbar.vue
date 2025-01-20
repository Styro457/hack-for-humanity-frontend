<script setup lang="ts">

const items = ref([
  {
    label: 'Home',
    command: () => navigateTo('/')
  },
  {
    label: 'About',
    command: () => navigateTo('/about')
  },
  {
    label: 'Course & Professor Search',
    icon: 'pi pi-search'
  }
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items" class="navbar">
      <template #start>
        <NuxtLink to="/"><h2>Logo</h2></NuxtLink>
      </template>
      <template #end>
        <div class="navbar-buttons">
          <Button label="Log In" @click="navigateTo('/login')" />
          <Button label="Sign Up" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style scoped>
.navbar {
  margin: 0;
  border: none;
  border-radius: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;

  position: fixed; /* Fix the navbar at the top of the page */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left edge */
  width: 100%; /* Stretch across the full width */
  z-index: 1000; /* Ensure it stays above other elements */
  display: flex; /* Flexbox for alignment */
}

.p-button {
  margin: 0 0.2rem;
}

</style>