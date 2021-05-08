<template>
  <div>
    <Header />
    <div
      class="max-w-4xl mx-auto text-center text-gray-700 z-10 flex justify-items-center flex-col"
    >
      <h1 class="text-2xl font-bold my-4">検索画面</h1>
      <p class="text-xl">
        <input
          id="search"
          v-model="text"
          class="border-gray-200 rounded-xl border-2 shadow-xl focus:outline-none focus:ring focus:border-blue-300 p-2"
          type="text"
          name="search"
          @click="search"
          @keyup.enter="search"
        />
        <label>
          <font-awesome-icon class="text-2xl" :icon="['fas', 'search']" />
        </label>
      </p>
      <p class="my-4">ヒット数：{{ stands.length }}件</p>
      <div
        v-for="stand in stands"
        :key="stand.stand_id"
        class="flex justify-center items-center"
      >
        <div class="w-80 lg:flex text-left my-4">
          <div
            class="w-80 rounded-xl shadow-xl border-gray-400 lg:border-t lg:border-gray-400 p-4 flex flex-col justify-between leading-normal border"
          >
            <div class="mb-4">
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ stand.goods }}屋
              </div>
              <p class="text-gray-700 text-base">
                {{ stand.description }}
              </p>
            </div>
            <hr class="mb-4" />
            <div class="flex items-center">
              <div class="text-xs">
                <p class="text-gray-900 leading-none">
                  {{ stand.club }}が提供してます
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import functions from '@/infrastructures/functions'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      text: '',
      stands: [],
    }
  },
  async mounted() {
    this.stands = await functions.searchStands(this.text)
  },
  methods: {
    async search() {
      this.stands = await functions.searchStands(this.text)
    },
  },
  name: 'Routing',
})
</script>
