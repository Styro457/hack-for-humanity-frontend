<script setup lang="ts">

import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();
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
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
  }
};

</script>

<template>
  <Card class="auth panel">
    <template #header>Log in to Site</template>
    <template #content>
      <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="gap-4">
        <div class="auth element">
          <FloatLabel variant="on">
            <InputText name="email" type="text" class="auth input" />
            <label for="on_label">Email</label>
          </FloatLabel>
          <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
        </div>
        <div class="auth element">
          <FloatLabel variant="on">
            <InputText name="password" type="password" class="auth input"/>
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