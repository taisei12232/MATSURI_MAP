<template>
  <div>
    <Header />
    <l-map class="fixed z-0" style="height: 100vh" :zoom="2" :crs="crs" :center="center">
    <l-image-overlay :url="url" :bounds="bounds"></l-image-overlay>
    <l-marker
      v-for="stand in stands"
      :key="stand.id"
      :lat-lng="stand.coordinate"
      :icon="stand.vibrant ? iconHigh : icon"
    >
      <l-popup>
        <h1 class="text-2xl font-bold">{{ stand.goods }}屋</h1>
        <p>{{ stand.description }}</p>
        <p>1つ {{ stand.price }}円</p>
        <p>売上： {{ stand.proceeds }}円</p>
        <p>提供：{{ stand.club }}</p>
        <p class="text-center">
          <button class="rounded-lg bg-blue-500 text-white p-2" onclick="location.href='/settlement'">
            購入する
          </button>
        </p>
      </l-popup>
    </l-marker>
  </l-map>
  <Footer />

  </div>
</template>

<script>
import functions from '@/infrastructures/functions'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

if (process.client) require('leaflet')

const height = 1363
const width = 2398

export default {
  components: {
    Header,
    Footer,
  },
  async asyncData() {
    const stands = await functions.getStandList()
    return { stands }
  },
  data() {
    return {
      center: [height / 4, width / 8],
      url: 'kosen.png',
      bounds: [
        [0, 0],
        [height / 4, width / 4],
      ],
      crs: null,
      iconHigh: null,
      icon: null,
    }
  },
  mounted() {
    this.crs = L.CRS.Simple
    this.icon = L.icon({
      iconUrl: '/food-stand.png',
      iconSize: [32, 37],
      iconAnchor: [16, 37],
    })
    this.iconHigh = L.icon({
      iconUrl: '/food-stand.png',
      iconSize: [32, 37],
      iconAnchor: [16, 37],
      className: 'high',
    })
  },
}
</script>

<style>
.high {
  box-shadow: 0px 0px 40px 20px rgba(231, 77, 16, 1);
  background-color: rgba(231, 77, 16, 1);
  backdrop-filter: blur(10px);
}
</style>
