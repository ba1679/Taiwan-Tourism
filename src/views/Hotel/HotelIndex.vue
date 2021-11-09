<template>
  <div class="accommodation">
    <div class="container-fluid header-bg position-relative py-3">
      <div class="accommodation-bg">
        <div class="container w-50 text-white">
          <h2 class="h1 font-weight-bold">
            Welcome to <span class="text-primary">Taiwan°</span>
          </h2>
          <p class="subtitle-1 text-left">
            台北、台中、台南、屏東、宜蘭……遊遍台灣
          </p>
          <div class="d-flex align-items-center">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入想去的縣市"
              aria-label="請輸入想去的縣市"
              v-model="searchInput"
              @keyup.enter="searchData"
            />
            <button
              type="button"
              class="btn btn-primary ml-2"
              @click="searchData"
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
              <select
                class="custom-select select-icon"
                v-model="citySelect"
                @change="toCityDetail"
              >
                <option selected value="all">不分縣市</option>
                <option v-for="city in citiesName" :key="city" :value="city.en">
                  {{ city.ch }}
                </option>
              </select>
            </div>
            <button type="button" class="btn btn-warning ml-2 text-white">
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
import cities from '@/assets/cities.json'

export default {
  name: 'Accomodation',
  computed: {
    citiesName () {
      const citiesOptions = []
      cities.forEach(item => {
        citiesOptions.push({
          ch: item.CityName,
          en: item.CityEngName
        })
      })
      citiesOptions.forEach(item => {
        if (item.en.indexOf(' ') !== -1) {
          item.en = item.en.split(' ').join('')
        }
      })
      return citiesOptions
    }
  },
  data () {
    return {
      citySelect: 'all',
      categorySelect: 'catering',
      searchInput: ''
    }
  },
  methods: {
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
