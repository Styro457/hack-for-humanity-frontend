<script setup lang="ts">

const route = useRoute();
const router = useRouter();

const uidb64 = route.params.uidb64;
const token = route.params.token;

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
await handleConfirmation();
</script>

<template>

</template>

<style scoped>

</style>