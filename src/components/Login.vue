<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  rules,
  checkEmail,
  checkPasswordLength,
  checkIsFieldRequired,
  MAX_EMAIL_LENGTH,
} from '@/utils';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const onLogin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      router.push('/dashboard');
    })
    .catch((err: Error) => {
      console.error(err);
      errorMessage.value = 'Incorrect email or password!';
    });
};

const loginValidation = () => {
  if (!checkEmail(email.value)) return false;
  if (!checkPasswordLength(password.value)) return false;
  if (!checkIsFieldRequired(email.value)) return false;
  if (!checkIsFieldRequired(password.value)) return false;
  return true;
};

const onSubmit = () => {
  if (!loginValidation()) return;
  onLogin();
};
</script>

<template>
  <v-form v-on:submit.prevent="onSubmit()">
    <v-text-field
      type="text"
      label="Email"
      v-model="email"
      :counter="MAX_EMAIL_LENGTH"
      :rules="[rules.required, rules.email]"
    ></v-text-field>
    <v-text-field
      type="password"
      label="Password"
      :rules="[rules.required, rules.passwordCounter, rules.counter]"
      v-model="password"
    ></v-text-field>
    <v-alert
      :text="errorMessage"
      color="error"
      type="info"
      v-if="errorMessage"
    ></v-alert>
    <v-btn color="success" width="100%" type="submit" class="mt-6">Login</v-btn>
  </v-form>
</template>

<style></style>
