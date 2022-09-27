<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const MAX_INPUT_LENGTH = 75;
const MIN_PASSWORD_LENGTH = 8;
const MAX_EMAIL_LENGTH = 100;
const email = ref('');
const password = ref('');
const passwordRepeat = ref('');
const firstName = ref('');
const lastName = ref('');
const errorMessage = ref('');
const rules = {
  required: (value: string) => checkIsFieldRequired(value) || 'Required!',
  counter: (value: string) =>
    checkLength(value) || `Max ${MAX_INPUT_LENGTH} characters`,
  email: (value: string) => checkEmail(value) || 'Invalid email',
  passwordCounter: (value: string) =>
    checkPasswordLength(value) || 'Min 8 characters',
  comparePasswords: (value: string) =>
    comparePasswords(value) || 'Passwords are differents',
};

const checkIsFieldRequired = (value: string) => {
  return !!value;
};

const checkLength = (value: string) => {
  return value.length <= MAX_INPUT_LENGTH ? true : false;
};

const checkEmail = (value: string) => {
  const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return pattern.test(value);
};

const checkPasswordLength = (value: string) => {
  return value.length >= MIN_PASSWORD_LENGTH ? true : false;
};

const comparePasswords = (value: string) => {
  return value === password.value ? true : false;
};

const onRegister = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('Successfully registered!');
      router.push('/dashboard');
    })
    .catch((err: Error) => {
      console.error(err);
      errorMessage.value = 'Incorrect email or password!';
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
  if (!comparePasswords(passwordRepeat.value)) return false;
  return true;
};

const clearInputs = () => {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  password.value = '';
  passwordRepeat.value = '';
  errorMessage.value = '';
};

const onSubmit = () => {
  if (!registerValidation()) return;
  onRegister();
};

clearInputs();
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
      :rules="[rules.required, rules.comparePasswords, rules.counter]"
      v-model="passwordRepeat"
    ></v-text-field>
    <v-alert
      :text="errorMessage"
      color="error"
      type="info"
      v-if="errorMessage"
    ></v-alert>
    <v-btn color="success" width="100%" type="submit" class="mt-6"
      >Register</v-btn
    >
  </v-form>
</template>

<style></style>
