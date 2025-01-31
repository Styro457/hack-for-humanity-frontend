<script setup lang="ts">

import {watchEffect} from "vue";

const route = useRoute();
const router = useRouter();

const uidb64 = route.query.uidb64;
const token = route.query.token;

const handleConfirmation = async () => {
  try {
    const response = await $fetch("http://ui.styro.dev/emails/activate/" + uidb64 + "/" + token, {
      method: 'GET'
    });
    console.log(response);
    await router.push({
      path: '/login',
      query: {
        message: "verified"
      },
    });
  } catch(err) {
    await router.push({
      path: '/login',
      query: {
        message: "verifiy_failed"
      },
    });
  }
};

watchEffect(async () => {
  await handleConfirmation();
});
</script>

<template>

</template>

<style scoped>

</style>