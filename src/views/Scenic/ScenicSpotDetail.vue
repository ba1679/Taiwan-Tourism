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
          @click.prevent="toDetail(item, 'catering')"
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
            <div class="card-footer p-2">
              <span class="badge badge-primary mr-2">{{ item.Class1 }}</span>
              <span class="badge badge-primary">{{ item.Class2 }}</span>
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
            class="custom-close btn btn-primary "
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
                v-else-if="currentImg === 4"
              />
            </transition>
            <div
              class="d-flex justify-content-end mt-4"
              v-if="
                detailData.type === 'activity' && detailData.Picture.PictureUrl2
              "
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
                  <p
                    class="subtitle-1"
                    v-if="activityTime || detailData.OpenTime"
                  >
                    <span
                      class="mdi mdi-clock-time-five-outline text-primary pr-2"
                    ></span>
                    {{ activityTime ? activityTime : detailData.OpenTime }}
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
                    <span
                      class="mdi mdi-ticket-confirmation-outline text-primary  pr-2"
                    ></span>
                    {{ detailData.Charge ? `NT$${detailData.Charge}` : '免費' }}
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
import { format } from 'date-fns'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ScenicSpotDetail',
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      cityDatas: 'scenic/cityScenicSpot'
    }),
    cityChName () {
      return cities.find(item => {
        return item.CityEngName === this.$route.params.city
      })
    },
    activityTime () {
      if (this.detailData?.StartTime) {
        return `${format(
          new Date(this.detailData.StartTime),
          'yyyy-MM-dd'
        )} ~ ${format(new Date(this.detailData.EndTime), 'yyyy-MM-dd')}`
      } else {
        return null
      }
    }
  },
  data () {
    return {
      detailData: null,
      currentImg: 0
    }
  },
  methods: {
    ...mapActions('scenic', ['getCityScenicSpot']),
    ...mapActions(['setIsLoading']),
    loadCityScenicSpot (city) {
      this.setIsLoading(true)
      this.getCityScenicSpot(city)
        .then(() => {
          this.setIsLoading(false)
        })
        .catch(err => {
          this.setIsLoading(false)
          console.log(err)
        })
    },
    toDetail (item, type) {
      $('#detailModal').modal('show')
      $('.modal-backdrop').removeClass('show fade')
      this.detailData = { ...item }
      if (type === 'activity') {
        this.detailData.type = 'activity'
      } else {
        this.detailData.type = 'catering'
      }
    },
    closeModal () {
      $('#detailModal').modal('hide')
      this.detailData = null
      this.currentImg = 0
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
        this.loadCityScenicSpot(val.params.city)
      }
    }
  }
}
</script>
