<script setup lang="ts">

import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const router = useRouter();

const username = ref(null);
const password = ref(null);
const error = ref(null);

const initialValues = ref({
  username: '',
  password: ''
});

const resolver = ref(zodResolver(
    z.object({
      username: z.string().min(1, { message: 'Username is required.' }),//.email({ message: 'Invalid email address.' }),
      password: z.string().min(1, { message: 'Password is required.' }),
    })
));

const onFormSubmit = ({ valid }) => {
  if (valid) {
    handleLogin();
  }
};


const handleLogin = async () => {
  try {
    const response = await $fetch(getAPI() + '/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: { 'username': username.value, 'password': password.value}
    });
    if (response.status === "success") {
      // Redirect after successful login
      await router.push({
        path: '/',
        query: {
          response: response.message,
        },
      });
    } else {
      await router.push({
        path: '/',
        query: {
          response: response.message,
        },
      });
    }
  } catch(err) {
    if (err.response && err.response.status === 404) {
      error.value = 'Incorrect username or password';
    } else {
      // General error message for other errors
      error.value = 'An error occurred. Please try again.';
    }    console.log(err)
  }
};
</script>

<template>
  <Card class="auth panel">
    <template #header>Log in to Site</template>
    <template #content>
      <Message v-if="error" severity="error" size="small" variant="simple">{{ error }}</Message>
      <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="gap-4">
        <div class="auth element">
          <FloatLabel variant="on">
            <InputText name="username" type="text" v-model="username" class="auth input" />
            <label for="on_label">Username</label>
          </FloatLabel>
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
        </div>
        <div class="auth element">
          <FloatLabel variant="on">
            <InputText name="password" v-model="password" type="password" class="auth input"/>
            <label for="on_label">Password</label>
          </FloatLabel>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{ $form.password.error?.message }}</Message>
        </div>
        <Button type="submit" label="Log In" class="auth submit"/>
      </Form>
    </template>
    <template #footer>
      <p class="m-0">
        Don't have an account? <NuxtLink to="/signup" class="text-link">Sign up</NuxtLink>
      </p>
    </template>
  </Card>
</template>

<style scoped>

</style>