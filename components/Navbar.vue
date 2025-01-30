<script setup lang="ts">

const session = useCookie("session")

const log_out = () => {
  session.value = null
  setTimeout(() => {
    navigateTo("/")
  }, 5000);
}

const items = ref([
  {
    label: 'Home',
    command: () => navigateTo('/')
  },
  {
    label: 'Course & Professor Search',
    icon: 'pi pi-search',
    command: () => navigateTo('/search')
  }
]);

const menu_items = session.value === null || session.value === undefined ? ref([
  {
    label: 'Log In',
    severity: 'secondary',
    button: true,
    command: () => navigateTo("/login")
  },
  {
    label: "Sign Up",
    button: true,
    command: () => navigateTo("/signup")
  }
]) : ref([
  {
    label: 'Write a review',
    button: true
  },
  {
    label: session,
    items: [
      {
        label: 'Courses'
      },
      {
        label: 'Settings'
      },
      {
        label: "Log Out",
        color: 'red',
        command: log_out
      }
    ]
  }
])

</script>

<template>
  <header class="card">
    <Menubar :model="items" class="navbar">
      <template #start>
        <NuxtLink to="/"><h4>Logo</h4></NuxtLink>
      </template>
      <template #end>
        <Menubar :model="menu_items" class="sub-menu">
          <template #item="{ item, props, hasSubmenu, root }">
            <Button v-if="item.button" :label="item.label" :severity="item.severity" v-bind="props.action"></Button>
            <a v-else v-ripple class="flex items-center" v-bind="props.action">
              <span :style="{'color': item.color}">{{ item.label }}</span>
              <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
              <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
            </a>
          </template>
        </Menubar>
<!--        <div v-if="session">LOGGED IN</div>
        <div v-else>Logged off</div>
        <div class="navbar-buttons">
          <Button label="Log In" severity="secondary" @click="navigateTo('/login')" />
          <Button label="Sign Up" severity="secondary" @click="navigateTo('/signup')" />
        </div>-->
      </template>
    </Menubar>
  </header>
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
  font-size: 14px;
}

.sub-menu {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
}

</style>