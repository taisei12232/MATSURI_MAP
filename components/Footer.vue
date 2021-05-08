<template>
  <div
    class="fixed bottom-0 w-screen bg-green-footer flex justify-center items-center flex-d h-20"
  >
    <div
      class="flex flex-col justify-items-center items-center px-4 border-r-2 w-32"
      @click="toPage('/search')"
    >
      <h1 class="text-white-bg text-3xl font-bold">
        <font-awesome-icon :icon="['fas', 'search']" />
      </h1>
      <h1 class="text-white-bg text-2xl font-bold">SEARCH</h1>
    </div>
    <div
      class="flex flex-col justify-items-center items-center px-4 border-r-2 w-32"
      @click="toPage('/map')"
    >
      <h1 class="text-white-bg text-3xl font-bold">
        <font-awesome-icon :icon="['far', 'map']" />
      </h1>
      <h1 class="text-white-bg text-2xl font-bold">MAP</h1>
    </div>
    <div
      class="flex flex-col justify-items-center items-center px-4 w-32"
      @click="toPage('/chat')"
    >
      <h1 class="text-white-bg text-3xl font-bold">
        <font-awesome-icon :icon="['far', 'comments']" />
      </h1>
      <h1 class="text-white-bg text-2xl font-bold">CHAT</h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    toPage(url: string) {
      this.$router.push(url)
    },
  },
})
</script>
