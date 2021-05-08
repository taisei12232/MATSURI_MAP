<template>
  <div class="z-0">
    <div
      v-if="modal"
      class="pt-20 absolute z-20 bg-black bg-opacity-60 h-screen w-screen top-0 text-center flex items-center justify-items-center"
    >
      <p class="text-white text-4xl font-bold w-screen">
        <font-awesome-icon
          class="text-green-500"
          :icon="['far', 'check-circle']"
        />
        Success
      </p>
      <p class="absolute top-2/3 text-2xl w-screen"><router-link to="/map">マップ画面へ</router-link></p>
    </div>
    <div class="max-w-4xl mx-auto text-center text-gray-700 z-10">
      <h1 class="text-2xl font-bold my-4">クレジットカード登録画面</h1>
      <p class="text-center my-4 text-blue-500">
        <font-awesome-icon class="text-9xl" :icon="['far', 'credit-card']" />
      </p>
      <ul>
        <li class="flex justify-center my-4 items-center">
          <label for="number" class="mr-3 w-24">カード番号</label
          ><input
            id="number"
            class="border-gray-200 rounded-xl border-2 shadow-xl focus:outline-none focus:ring focus:border-blue-300 p-2"
            type="text"
          />
        </li>
        <li class="flex justify-center my-4 items-center">
          <label for="limit" class="mr-3 w-24">有効期限</label
          ><input
            id="limit"
            class="border-gray-200 rounded-xl border-2 shadow-xl focus:outline-none focus:ring focus:border-blue-300 p-2"
            type="text"
          />
        </li>
        <li class="flex justify-center my-4 items-center">
          <label for="cvc" class="mr-3 w-24">CVC</label
          ><input
            id="cvc"
            class="border-gray-200 rounded-xl border-2 shadow-xl focus:outline-none focus:ring focus:border-blue-300 p-2"
            type="text"
          />
        </li>
        <li class="flex justify-center my-4 items-center">
          <label for="name" class="mr-3 w-24">名義</label
          ><input
            id="name"
            class="border-gray-200 rounded-xl border-2 shadow-xl focus:outline-none focus:ring focus:border-blue-300 p-2"
            type="text"
          />
        </li>
      </ul>
      <button
        class="my-4 rounded-lg bg-blue-500 text-white p-2 focus:outline-none focus:ring focus:border-blue-300"
        @click="openModal"
      >
        登録する
      </button>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      number: '',
      limit: '',
      cvc: '',
      name: '',
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

<style></style>
