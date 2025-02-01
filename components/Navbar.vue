<script setup lang="ts">

import {watchEffect} from "vue";
import {setConnected} from "~/utils/utils";

const session = ref("");
const usernameCookie = useCookie("username");
const sessionCookie = useCookie("sessionid");
const tokenCookie = useCookie("csrftoken");

const log_out = () => {
  try {
    $fetch(getAPI() + '/users/logout', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.log(e);
  }
  setConnected(false);
  session.value = null;
  usernameCookie.value = null;
  sessionCookie.value = null;
  tokenCookie.value = null;
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

const menu_items = ref([]);

//session.value === null || session.value === undefined ?
const guest_items = [
  {
    label: 'Log In',
    severity: 'secondary',
    button: true,
    color: 'text',
    command: () => navigateTo("/login")
  },
  {
    label: "Sign Up",
    button: true,
    color: 'accent',
    command: () => navigateTo("/signup")
  }
];

const user_items = [
  {
    label: 'Write a review',
    color: 'accent',
    button: true,
    command: () => navigateTo("/review")
  },
  {
    label: session,
    items: [
      {
        label: 'Courses',
        command: () => navigateTo('/search')
      },
      {
        label: "Log Out",
        color: 'red',
        command: log_out
      }
    ]
  }
];

let tries = ref(0);
const connected = ref(false);

async function handleSession() {
  try {
    const response = await $fetch(getAPI() + '/users/get_session', {
      method: 'GET',
      credentials: 'include',
    });
    if(response.message === "Valid") {
      setConnected(true);
    }
    else {
      setConnected(false);
    }
  } catch (err) {
    setConnected(false);
    setUpGuest();
  }
}

function setUpGuest() {
  connected.value = false;
  menu_items.value = guest_items;
  if(tries.value == 0) {
    tries.value += 1;
    setTimeout(() => {
      try {
        handleSession();
      } catch(ignore) {}
    }, 3000);
  }
}

function setUpUser() {
  connected.value = true;
  session.value = usernameCookie.value;
  menu_items.value = user_items;
}

const hasCheckedSession = ref(false);

onMounted(() => {
  if (!hasCheckedSession.value) {
    handleSession();
    hasCheckedSession.value = true;
  }
});
watchEffect(() => {
  if (isConnected()) {
    if(!connected.value) {
      setUpUser();
    }
  } else {
    if(connected.value) {
      setUpGuest();
    }
  }
});

</script>

<template>
  <header class="card">
    <Menubar :model="items" class="navbar">
      <template #start>
        <NuxtLink to="/" class="logo"><img src="../assets/images/uninsight-main-logo.svg" alt="Uninsight" class="logo title2"></NuxtLink>
      </template>
      <template #end>
        <Menubar :model="menu_items" class="sub-menu">
          <template #item="{ item, props, hasSubmenu, root }">
            <Button v-if="item.button" :label="item.label" :severity="item.severity" v-bind="props.action" :class="item.color " />
            <a v-else v-ripple class="flex" v-bind="props.action">
              <span :style="{'color': item.color}">{{ item.label }}</span>
<!--              <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>-->
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
  height: 78px;

  background-color: var(--background);
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
  background-color: var(--background);
}

.logo {
  height: 50px;
  width: auto;
  background: none;
}

.logo:hover {
  background: none;
}

/* Optional: Change hover color when item is selected */
.p-menubar-item:hover, .p-menubar-item-content:hover {
  background-color: red !important; /* Your desired focus/active color */
  color: #333333; /* Adjust text color */
}

.navbar {
  display: flex;
  justify-content: center; /* Centers the main menu */
  align-items: center; /* Aligns items vertically */
}

</style>