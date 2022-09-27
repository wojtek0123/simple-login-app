import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDB1EPmWSN6mxBxUuXhoOA8n7lwxOVdXjA',
  authDomain: 'first-app-bc0b2.firebaseapp.com',
  projectId: 'first-app-bc0b2',
  storageBucket: 'first-app-bc0b2.appspot.com',
  messagingSenderId: '808325390913',
  appId: '1:808325390913:web:8e136319b35e3b54eedcc0',
};

// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
