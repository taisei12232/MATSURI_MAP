<template>
  <div>
    <Header />
    <div
      v-if="isAdmin"
      class="pt-20 flex justify-items-center flex-col items-center"
    >
      <h1 class="text-2xl font-bold my-4">運営用画面</h1>
      <p class="my-4">現金の決済はこちらから記録してください！</p>

      <select
        id="standId"
        v-model="standId"
        name="standId"
        class="block mt-1 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 my-3 p-2 border-gray-200 border-2"
      >
        <option
          v-for="stand in stands"
          :key="stand.stand_id"
          :value="stand.stand_id"
        >
          {{ stand.goods }}屋
        </option>
      </select>
      <input
        id="payment"
        v-model="payment"
        class="border-gray-200 rounded-xl border-2 shadow-xl focus:outline-none focus:ring focus:border-blue-300 p-2"
        type="text"
      />
      <button
        class="rounded-lg bg-blue-500 text-white p-2 my-3"
        @click="recordCash"
      >
        記録する
      </button>
      <transition name="fade">
        <p v-if="success" class="text-green-500 text-2xl font-bold">
          <font-awesome-icon
            class="text-green-500"
            :icon="['far', 'check-circle']"
          />
          Success
        </p>
      </transition>
    </div>
    <Footer />
    <p v-if="!isAdmin">こちらのページは閲覧出来ません。</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import functions from '@/infrastructures/functions'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  async asyncData() {
    const stands = await functions.getStandList()
    const isAdmin = await functions.checkAdmin('test')
    return { stands, isAdmin }
  },
  data() {
    return {
      standId: '',
      payment: 0,
      success: false,
    }
  },
  methods: {
    async recordCash() {
      if (this.standId === '' || this.payment === 0) return
      await functions.recordCach(this.standId, this.payment)
      this.success = true
      setTimeout(() => {
        this.success = false
      }, 2000)
    },
  },
})
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
