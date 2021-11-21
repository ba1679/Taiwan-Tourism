<template>
  <div class="container mt-5" v-if="cityDatas.length">
    <h3 class="h5">
      <span class="mdi mdi-triangle text-primary mr-2"></span>
      {{ cityChName.CityName }}
    </h3>
    <div class="row row-cols-2 row-cols-lg-4 row-cols-xl-5 mx-n1">
      <div class="col mb-5 px-1" v-for="item in cityDatas" :key="item.ID">
        <a
          href="#"
          class="d-block text-black h-100"
          @click.prevent="toDetail(item)"
        >
          <div class="card data-card-sm h-100">
            <div class="card-body p-2">
              <div class="data-card-sm-pic">
                <img
                  :src="item.Picture.PictureUrl1"
                  class="card-img-top"
                  :alt="item.Picture.PictureDescription1"
                />
              </div>
              <h6 class="subtitle-1 mt-2">{{ item.Name }}</h6>
            </div>
            <div class="card-footer p-2 subtitle-1">
              <span class="mdi mdi-map-marker text-primary mr-2">{{
                item.Address
              }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <nav aria-label="分頁選單">
      <ul class="pagination justify-content-center">
        <li class="page-item mx-3">
          <a
            class="page-link btn btn-sm btn-left btn-primary text-white"
            href="#"
            aria-label="Previous"
          >
            <span class="mdi mdi-triangle"></span>
          </a>
        </li>
        <li class="page-item mx-1 active">
          <a class="page-link" href="#">1</a>
        </li>

        <li class="page-item mx-3">
          <a
            class="page-link btn btn-sm btn-right btn-primary text-white"
            href="#"
            aria-label="Next"
          >
            <span class="mdi mdi-triangle"></span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- Modal -->
    <div
      class="modal fade"
      id="detailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="詳細內容"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" v-if="detailData">
          <button
            type="button"
            class="custom-close btn btn-primary"
            aria-label="關閉"
            @click="closeModal"
          >
            <span aria-hidden="true" class="h3 font-weight-bold mb-0"
              >&times;</span
            >
          </button>
          <div class="modal-body">
            <transition
              name="fade"
              mode="out-in"
              v-if="detailData.Picture.PictureUrl1"
            >
              <img
                class="w-100"
                :src="detailData.Picture.PictureUrl1"
                :alt="detailData.Picture.PictureDescription1"
                v-if="currentImg === 0"
              />
              <img
                class="w-100"
                :src="detailData.Picture.PictureUrl2"
                :alt="detailData.Picture.PictureDescription2"
                v-else-if="currentImg === 2"
              />
              <img
                class="w-100"
                :src="detailData.Picture.PictureUrl3"
                :alt="detailData.Picture.PictureDescription3"
                v-else-if="currentImg === 4 && detailData.Picture.PictureUrl3"
              />
            </transition>
            <div
              class="d-flex justify-content-end mt-4"
              v-if="detailData.Picture.PictureUrl2"
            >
              <template v-if="currentImg > 0">
                <button
                  type="button"
                  class="btn btn-white btn-sm btn-left mr-3"
                  @click="imgControl(-1)"
                >
                  <span class="mdi mdi-triangle"></span>
                </button>
              </template>
              <button
                type="button"
                class="btn btn-black btn-sm btn-right"
                @click="imgControl(1)"
              >
                <span class="mdi mdi-triangle"></span>
              </button>
            </div>
            <h3 class="h5 my-3">{{ detailData.Name }}</h3>
            <p class="subtitle-1">{{ detailData.Description }}</p>
            <div class="container">
              <div class="row row-cols-1 row-cols-lg-2">
                <div class="col">
                  <p class="subtitle-1">
                    <span class="mdi mdi-car-multiple text-primary pr-2"></span>
                    {{ detailData.ParkingInfo }}
                  </p>
                  <p class="subtitle-1">
                    <span class="mdi mdi-map-marker text-primary  pr-2"></span>
                    <a
                      href="#"
                      v-if="detailData.Address"
                      @click.prevent="toGoogleMap"
                    >
                      {{ detailData.Address }}
                    </a>
                    <a href="#" @click.prevent="toGoogleMap" v-else
                      >前往 Google map</a
                    >
                  </p>
                </div>
                <div class="col">
                  <p>
                    <span class="mdi mdi-home text-primary  pr-2"></span>
                    {{ detailData.Class ? detailData.Class : '無分類' }}
                  </p>
                  <p>
                    <span class="mdi mdi-phone text-primary  pr-2"></span>
                    {{ detailData.Phone ? detailData.Phone : '-' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NoData v-else />
</template>
<script>
import cities from '@/assets/cities.json'
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HotelDetail',
  computed: {
    ...mapGetters({
      cityDatas: 'hotel/cityHotels'
    }),
    cityChName () {
      return cities.find(item => {
        return item.CityEngName === this.$route.params.city
      })
    }
  },
  data () {
    return {
      detailData: null,
      currentImg: 0
    }
  },
  methods: {
    ...mapActions('hotel', ['getCityHotel']),
    ...mapActions(['setIsLoading']),
    loadCityHotel (city) {
      this.setIsLoading(true)
      this.getCityHotel(city)
        .then(() => {
          this.setIsLoading(false)
        })
        .catch(err => {
          this.setIsLoading(false)
          console.log(err)
        })
    },
    toDetail (item) {
      $('#detailModal').modal('show')
      $('.modal-backdrop').removeClass('show fade')
      this.detailData = { ...item }
    },
    closeModal () {
      $('#detailModal').modal('hide')
      this.detailData = null
      this.currentImg = 0
    },
    imgControl (query) {
      if (query === 1) {
        this.currentImg += 2
        if (this.currentImg === Object.keys(this.detailData.Picture).length) {
          this.currentImg = 0
        }
      } else if (query === -1 && this.currentImg > 0) {
        this.currentImg -= 2
      }
    },
    toGoogleMap () {
      const lat = this.detailData.Position.PositionLat
      const lon = this.detailData.Position.PositionLon
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
      )
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (val) {
        if (val.params.city) {
          this.loadCityHotel(val.params.city)
        }
      }
    }
  }
}
</script>
