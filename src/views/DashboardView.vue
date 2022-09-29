<script setup lang="ts">
import router from '@/router';
import { signOut, getAuth } from 'firebase/auth';
import { Ref, ref } from 'vue';
import Pages from '@/components/Pages.vue';
import { desserts as DESSERTS_DUMMY_DATA } from '../data/dummy-data';
import Users from '@/components/Users.vue';

type x = 'pages' | 'users' | 'orders';

let page: Ref<x> = ref('orders');

const showMobileMenu = ref(false);
const search = ref('');

const onLogout = () => {
  signOut(getAuth());
  router.push('/');
};

const headers = ref([
  {
    text: 'Dessert (100g serving)',
    align: 'start',
    sortable: false,
    value: 'name',
  },
  { text: 'Calories', value: 'calories' },
  { text: 'Fat (g)', value: 'fat' },
  { text: 'Carbs (g)', value: 'carbs' },
  { text: 'Protein (g)', value: 'protein' },
  { text: 'Iron (%)', value: 'iron' },
]);
const desserts = ref(DESSERTS_DUMMY_DATA);

const closeMobileMenu = (text: x) => {
  showMobileMenu.value = !showMobileMenu;
  page.value = text;
};
</script>

<template>
  <div class="px-5">
    <v-card class="mobile-menu" v-if="showMobileMenu">
      <v-btn text x-large>Profile</v-btn>
      <v-btn class="mobile-items" text x-large @click="closeMobileMenu('pages')"
        >Pages</v-btn
      >
      <v-btn text x-large @click="closeMobileMenu('users')">Users</v-btn>
      <v-btn text x-large @click="closeMobileMenu('orders')">Orders</v-btn>
    </v-card>
    <h1 class="text-center mb-5 mt-2">Dashboard</h1>
    <v-app-bar app width="100%" elevation="4" class="app-bar">
      <div class="header-wrapper">
        <v-app-bar-nav-icon
          @click="showMobileMenu = !showMobileMenu"
        ></v-app-bar-nav-icon>
        <v-btn color="primary" v-on:click="onLogout()">Log out</v-btn>
      </div>
    </v-app-bar>
    <div class="d-flex flex-column flex-md-row container">
      <v-card
        max-width="300px"
        width="100%"
        class="menu mx-auto"
        height="max-content"
      >
        <v-list-item>
          <v-list-item-content class="logout-desktop">
            <v-list-item-title
              ><v-btn width="100%" color="primary" v-on:click="onLogout()"
                >Log out</v-btn
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><v-btn text>Profile</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><v-btn text @click="page = 'pages'"
                >Pages</v-btn
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><v-btn text @click="page = 'users'"
                >Users</v-btn
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><v-btn text @click="page = 'orders'"
                >Orders</v-btn
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <div class="d-flex flex-column wrapper">
        <Pages v-if="page === 'pages'"></Pages>
        <Users v-if="page === 'users'"></Users>
        <v-data-table
          v-if="page === 'orders'"
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
        ></v-data-table>
      </div>
    </div>
  </div>
</template>

<style>
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  font-size: 2rem;
}
.mobile-items {
  font-size: 2rem;
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.menu {
  display: none;
}
.container {
  width: 100%;
}
.wrapper {
  width: 100%;
}
.main {
  padding-inline: 1em;
}

.logout-desktop {
  display: none;
}

@media (min-width: 1024px) {
  .menu {
    display: block;
  }
  .app-bar {
    display: none;
  }

  .wrapper {
    padding-left: 1em;
  }

  .logout-desktop {
    display: block;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
