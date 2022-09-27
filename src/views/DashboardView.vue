<script setup lang="ts">
import router from '@/router';
import { signOut, getAuth } from 'firebase/auth';
import { ref } from 'vue';

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
const desserts = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6%',
  },
]);
</script>

<template>
  <div class="px-5">
    <v-card class="mobile-menu" v-if="showMobileMenu">
      <p>Profile</p>
      <p>Orders</p>
      <p>Change password</p>
      <p>Contact</p>
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
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Change Password</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <div class="d-flex flex-column wrapper">
        <v-text-field label="Search" v-model="search"></v-text-field>
        <v-data-table
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
