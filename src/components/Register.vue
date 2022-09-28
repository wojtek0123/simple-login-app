<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  rules,
  checkEmail,
  checkIsFieldRequired,
  checkLength,
  comparePasswords,
  MAX_EMAIL_LENGTH,
  MAX_INPUT_LENGTH,
} from '../utils/index';

const email = ref('');
const password = ref('');
const passwordRepeat = ref('');
const firstName = ref('');
const lastName = ref('');
const errorMessage = ref('');

const onRegister = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      router.push('/dashboard');
    })
    .catch((err: Error) => {
      console.error(err);
      errorMessage.value = 'Something went wrong!';
    });
};

const registerValidation = () => {
  const requiredFields = [
    firstName.value,
    lastName.value,
    email.value,
    password.value,
    passwordRepeat.value,
  ];
  const fieldsWithLengthLimitation = [
    firstName.value,
    lastName.value,
    password.value,
    passwordRepeat.value,
  ];
  requiredFields.forEach((requiredField) => {
    if (!checkIsFieldRequired(requiredField)) return false;
  });
  fieldsWithLengthLimitation.forEach((field) => {
    if (!checkLength(field)) return false;
  });
  if (!checkEmail(email.value)) return false;
  if (!comparePasswords(password.value, passwordRepeat.value)) return false;
  return true;
};

const onSubmit = () => {
  if (!registerValidation()) return;
  onRegister();
};
</script>

<template>
  <v-form v-on:submit.prevent="onSubmit()">
    <v-text-field
      label="First name"
      type="text"
      :value="firstName"
      :rules="[rules.required, rules.counter]"
      :counter="MAX_INPUT_LENGTH"
    ></v-text-field>
    <v-text-field
      label="Last name"
      type="text"
      :value="lastName"
      :rules="[rules.required, rules.counter]"
      :counter="MAX_INPUT_LENGTH"
    ></v-text-field>
    <v-text-field
      type="text"
      label="Email"
      v-model="email"
      :value="email"
      :counter="MAX_EMAIL_LENGTH"
      :rules="[rules.required, rules.email]"
    ></v-text-field>
    <v-text-field
      type="password"
      label="Password"
      :value="password"
      :rules="[rules.required, rules.passwordCounter, rules.counter]"
      v-model="password"
    ></v-text-field>
    <v-text-field
      type="password"
      label="Repeat Password"
      :value="passwordRepeat"
      :rules="[
        rules.required,
        passwordRepeat === password || 'Passwords are differents',
        rules.counter,
      ]"
      v-model="passwordRepeat"
    ></v-text-field>
    <v-alert type="error" v-if="errorMessage !== ''">{{
      errorMessage
    }}</v-alert>
    <v-btn color="success" width="100%" type="submit" class="mt-6"
      >Register</v-btn
    >
  </v-form>
</template>

<style></style>
