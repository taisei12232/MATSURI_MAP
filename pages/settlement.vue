<template>
  <div>
    <Header class="z-0" />
    <Footer class="z-10" />
    <div
      v-if="modal"
      class="absolute z-20 bg-black bg-opacity-60 h-screen w-screen top-0 text-center flex items-center justify-items-center"
    >
      <p class="text-white text-4xl font-bold w-screen">
        <font-awesome-icon
          class="text-green-500"
          :icon="['far', 'check-circle']"
        />
        Success
      </p>
      <p class="absolute top-2/3 text-2xl w-screen">
        <router-link to="/map">マップ画面へ</router-link>
      </p>
    </div>
    <div class="absolute m-0 top-20 w-auto flex-wrap">
      <iframe :src="image" class="absolute top-0 w-screen h-screen"></iframe>
      <p class="absolute top-80 w-screen text-2xl flex justify-center">
        たこ焼き
      </p>
      <p
        class="relative top-72 mt-36 text-3xl w-screen flex justify-center font-bold"
        id="price"
      >
        ¥{{ price }}
      </p>
      <div class="mx-auto mt-80 flex justify-evenly">
        <button
          class="text-4xl p-5 border-2 border-black rounded-3xl bg-green-400"
          @click="openModal"
        >
          購入
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: {
    // @ts-ignore
    Header,
    Footer,
  },
  data: function () {
    return {
      stand_id: 'first_id',
      image:
        'https://firebasestorage.googleapis.com/v0/b/graphite-willow-312514.appspot.com/o/takoyaki.jpg?alt=media&token=67e8452f-6a0d-4015-946f-1450db2e0ce0',
      price: 500,
      goods: 'たこ焼き',
      modal: false,
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
  },
})
</script>
<style>
#price {
  font-size: 15vw;
}
</style>
