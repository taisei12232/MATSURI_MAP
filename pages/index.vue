<template>
  <div class="container">
      <Header />
        <div>
          <h1 class="absolute top-36 mt-12 mx-8 text-5xl text-center"><strong>MATSURIMAP</strong><br>へようこそ</h1>
          <p class="absolute top-52 my-48 mx-6 px-full text-center">Googleアカウントでログインしてください。</p>
          <button class="absolute top-64 py-1 px-2 mt-64 mx-36 border border-black rounded-3xl text-3xl bg-purple-400 grid justify-items-center" @click="logIn">login</button>
        </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { auth } from '@/infrastructures/firebase'
import {googleProvider} from '@/infrastructures/firebase'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', redirect: 'map' }
  ]
})
export default Vue.extend({
  components: {
    // @ts-ignore
    Header,
    Footer,
  },
  methods:{
    logIn:() =>{
      auth.signInWithPopup(googleProvider).then((result:any) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    

    }).catch((error:any) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    })
  }
  },
  mounted(){
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('login');
        router.push("register_card");
      } else {
        console.log('logout');
      }
    });     
  }
})
</script>

<style>
</style>
