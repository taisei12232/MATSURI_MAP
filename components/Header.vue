<template>
  <div class="h-20 z-20">
    <div
      class="fixed top-0 w-screen bg-red-header flex justify-between items-center flex-d h-20"
    >
      <h1 class="text-white-bg px-4 m-3 mr-0 text-3xl font-bold">MATURI MAP</h1>
      <button
        class="p-auto float-right flex justify-end m-0 w-auto h-auto rounded-full overflow-hidden"
        @click="Onclick"
      >
        <img
          class="p-auto float-right flex justify-end m-0 w-auto h-10 rounded-full overflow-hidden"
          :src="imgUrl"
        />
      </button>
    </div>
    <div
      class="relative z-30 mt-14 mr-2 p-1 text-right float-right bg-white border rounded border-black"
      :class="{ hidden: visible }"
    >
      <ul class="divide-y divide-black">
        <li class="py-2 font-mono">{{ name }}</li>
        <li class="py-2 font-mono">
          <router-link to="/register_card"
            >クレジットカード情報の変更</router-link
          >
        </li>
        <li class="py-2 font-mono" @click="logOut">ログアウト</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { auth } from '@/infrastructures/firebase'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{ path: 'this.$route.path', redirect: '/' }],
})
export default Vue.extend({
  data: function () {
    return {
      visible: true,
      user: '',
      name: 'Guest',
      imgUrl: '/user-icon.png',
    }
  },
  computed: {},
  methods: {
    Onclick: function () {
      this.visible = !this.visible
    },
    logOut: () => {
      auth
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        })
    },
  },
  beforeRouteUpdate(to, from, next) {},
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('login')
        this.user = auth.currentUser
        this.name = this.user.displayName
        this.imgUrl = this.user.photoURL
      } else {
        console.log('logout')
        this.name = 'Guest'
        this.imgUrl = '/user-icon.png'
        router.push('/')
      }
    })
  },
})
</script>
