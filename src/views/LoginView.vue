<script setup lang="ts">
import { ref } from 'vue';
import Login from '@/components/Login.vue';
import Register from '../components/Register.vue';

const isRegister = ref(false);

const changeToRegisterOrLogin = () => {
  isRegister.value = !isRegister.value;
};
</script>

<template>
  <v-card
    class="d-flex flex-column px-6 py-10 login"
    width="100%"
    height="max-content"
    max-width="800px"
  >
    <login v-if="!isRegister"></login>
    <register v-if="isRegister"></register>
    <v-btn
      v-on:click="changeToRegisterOrLogin()"
      class="mt-5 registerBtn"
      width="100%"
      >{{
        isRegister ? `Back to login` : `Don't have password? Register`
      }}</v-btn
    >
  </v-card>
</template>

<style>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.registerBtn {
  font-size: 1rem;
  text-transform: lowercase;
  font-weight: 400;
  box-shadow: none;
}
</style>
