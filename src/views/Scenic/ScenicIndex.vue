<template>
  <div class="scenic-spot">
    <div class="container-fluid header-bg position-relative py-3">
      <div class="scenic-spot-bg" :class="headerBg">
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
              v-model="searchInput"
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
                <option selected value="scenicSpot">景點</option>
                <option value="activity">活動</option>
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
import cities from '@/assets/cities.json'
import { mapGetters, mapActions } from 'vuex'

const nowHour = new Date().getHours()

export default {
  name: 'ScenicSpot',
  computed: {
    ...mapGetters({
      isMobile: 'isMobile'
    }),
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
      categorySelect: 'scenicSpot',
      searchInput: '',
      headerBg: {
        'bg-moring': nowHour > 0 && nowHour < 12,
        'bg-afternoon': nowHour >= 12 && nowHour < 15,
        'bg-evening': nowHour >= 15 && nowHour < 18,
        'bg-night': nowHour >= 18 || nowHour === 0
      }
    }
  },
  methods: {
    ...mapActions(['setIsLoading']),
    toCityDetail () {
      if (this.categorySelect === 'scenicSpot') {
        this.$router.push({
          name: 'ScenicSpotDetail',
          params: { city: this.citySelect }
        })
      } else {
        this.$router.push({
          name: 'ActivitiesDetail',
          params: { city: this.citySelect }
        })
      }
    },
    searchData () {
      this.$router.push({
        name: 'scenicSearch',
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
    }
  }
}
</script>
<style lang="scss" scoped>
.scenic-spot-bg {
  width: 100%;
  min-height: 491px;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bg-moring {
  background-image: url(~@/assets/images/scenic-moring.jpg);
}
.bg-afternoon {
  background-image: url(~@/assets/images/scenic-afternoon.jpg);
}
.bg-evening {
  background-image: url(~@/assets/images/scenic-evening.jpg);
}
.bg-night {
  background-image: url(~@/assets/images/scenic-night.png);
}
</style>
