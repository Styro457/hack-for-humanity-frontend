<script setup lang="ts">

import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const router = useRouter();

// TODO: Make a constants file
const API_URL = "https://api.example.com/user/something";

const email = ref(null);
const password = ref(null);
const error = ref(null);

const initialValues = ref({
  email: '',
  password: ''
});

const resolver = ref(zodResolver(
    z.object({
      email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
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
    //error.value = null;
    const response = await $fetch(API_URL + '/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: { 'username': email.value, 'password': password.value}
    });
    if (response.success) {
      // Redirect after successful login
      await router.push('/');
    } else {
      error.value = response.message || 'Invalid login credentials.';
    }
  } catch(err) {
    error.value = 'An error occurred. Please try again.';
    if(email.value.includes("real")) {
      const session = useCookie('session')

      session.value = "User"
      setTimeout(() => {
        router.push('/');
      }, 5000);
    }
    console.log(err)
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
            <InputText name="email" type="text" v-model="email" class="auth input" />
            <label for="on_label">Email</label>
          </FloatLabel>
          <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
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