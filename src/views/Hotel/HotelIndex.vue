<template>
  <div class="accommodation">
    <div class="container-fluid header-bg position-relative py-3">
      <div class="accommodation-bg">
        <div class="container w-50 text-white" :class="{ 'w-100': isMobile }">
          <h2 class="h1 font-weight-bold" :class="{ 'text-center': isMobile }">
            Welcome to <span class="text-primary">Taiwan°</span>
          </h2>
          <p class="subtitle-1 text-left">
            臺北、臺中、臺南、屏東、宜蘭……遊遍臺灣
          </p>
          <div class="d-flex align-items-center">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入想去的縣市 例: 臺中市"
              aria-label="請輸入想去的縣市 例: 臺中市"
              v-model.trim="searchInput"
              @keyup.enter="searchData"
            />
            <button
              type="button"
              class="btn btn-primary ml-2"
              @click="searchData"
              :disabled="!searchInput"
            >
              <span class="mdi mdi-24px mdi-search-web"></span>
            </button>
          </div>
          <div class="d-flex align-items-center mt-2">
            <div class="d-flex w-100">
              <select
                class="custom-select select-icon mr-1"
                v-model="categorySelect"
              >
                <option disabled>類別</option>
                <option selected value="catering">美食</option>
                <option value="hotel">住宿</option>
              </select>
              <select class="custom-select select-icon" v-model="citySelect">
                <option selected value="all">不分縣市</option>
                <option v-for="city in citiesName" :key="city" :value="city.en">
                  {{ city.ch }}
                </option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-warning ml-2 text-white"
              @click="locate"
            >
              <span class="mdi mdi-24px mdi-map-marker"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Hot/detail/search -->
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Accomodation',
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      citiesName: 'cityOptions'
    })
  },
  data () {
    return {
      citySelect: 'all',
      categorySelect: 'catering',
      searchInput: ''
    }
  },
  methods: {
    ...mapActions(['setIsLoading']),
    toCityDetail () {
      if (this.categorySelect === 'catering') {
        this.$router.push({
          name: 'CateringDetail',
          params: { city: this.citySelect }
        })
      } else {
        this.$router.push({
          name: 'HotelDetail',
          params: { city: this.citySelect }
        })
      }
    },
    searchData () {
      this.$router.push({
        name: 'hotelSearch',
        params: { category: this.categorySelect },
        query: { input: this.searchInput }
      })
    },
    locate () {
      this.setIsLoading(true)
      return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(function (position) {
          const positionObj = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
          resolve(positionObj)
        })
      }).then(res => {
        this.getLocationCity(res.lat, res.long)
      })
    },
    getLocationCity (lat, long) {
      this.axios
        .get(
          `https://api.nlsc.gov.tw/other/TownVillagePointQuery/${long}/${lat}`
        )
        .then(res => {
          const city = res.data.ctyName
          const enCity = this.citiesName.find(item => {
            return item.ch === city
          })
          this.citySelect = enCity.en
          this.setIsLoading(false)
        })
    }
  },
  watch: {
    citySelect: {
      handler () {
        this.toCityDetail()
      }
    },
    categorySelect: {
      handler () {
        if (this.citySelect !== 'all') {
          this.toCityDetail()
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.accommodation-bg {
  width: 100%;
  min-height: 491px;
  background-image: url(~@/assets/images/food_accommodation.png);
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
