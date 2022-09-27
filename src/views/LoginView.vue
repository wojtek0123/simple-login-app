<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Login from '@/components/Login.vue';
import Register from '../components/Register.vue';

const MAX_INPUT_LENGTH = 75;
const MIN_PASSWORD_LENGTH = 8;
const MAX_EMAIL_LENGTH = 100;
const email = ref('');
const password = ref('');
const passwordRepeat = ref('');
const firstName = ref('');
const lastName = ref('');
const isRegister = ref(false);
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

const onLogin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('You are log in!');
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

const loginValidation = () => {
  if (!checkEmail(email.value)) return false;
  if (!checkPasswordLength(password.value)) return false;
  if (!checkIsFieldRequired(email.value)) return false;
  if (!checkIsFieldRequired(password.value)) return false;
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

const changeToRegisterOrLogin = () => {
  isRegister.value = !isRegister.value;
  clearInputs();
};

const onSubmit = () => {
  if (isRegister.value) {
    if (!registerValidation()) return;
    onRegister();
  }
  if (!loginValidation()) return;
  onLogin();
};
</script>

<template>
  <v-card
    class="d-flex flex-column px-6 py-10 login"
    width="100%"
    height="max-content"
    max-width="800px"
  >
    <!-- <v-form v-on:submit.prevent="onSubmit()"> -->
    <login v-if="!isRegister"></login>
    <register v-if="isRegister"></register>
    <v-btn v-on:click="changeToRegisterOrLogin()" class="mt-5" width="100%">{{
      isRegister ? `Back to login` : `Register`
    }}</v-btn>
    <!-- </v-form> -->
  </v-card>
</template>

<style>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
