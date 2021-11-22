<template>
  <div class="container my-5 pt-5">
    <!-- hot cities -->
    <h3 class="h5">
      <span class="mdi mdi-18px mdi-triangle text-primary mr-2"></span>熱門城市
    </h3>
    <div class="city-section mb-5">
      <button
        type="button"
        class="btn btn-white btn-sm btn-left-translate"
        @click="cityArea = 0"
        v-if="cityArea === 1 && !isMobile"
      >
        <span class="mdi mdi-triangle"></span>
      </button>
      <button
        type="button"
        class="btn btn-black btn-sm btn-right-translate"
        @click="cityArea = 1"
        v-if="cityArea === 0 && !isMobile"
      >
        <span class="mdi mdi-triangle"></span>
      </button>
      <transition name="fade" mode="out-in">
        <div class="row row-cols-lg-5 scroll-area" v-if="cityArea === 0">
          <div class="col">
            <router-link
              class="city-card"
              :to="{ name: 'ScenicSpotDetail', params: { city: 'Taipei' } }"
            >
              <div class="city-card-body">
                <div class="city-card-one city-card-bg">
                  <div class="city-card-overlay text-white">
                    <span class="mdi mdi-map-marker"></span>
                    <div class="h5">台北市</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col">
            <div class="d-flex flex-column justify-content-between h-100">
              <router-link
                class="city-card-sm"
                :to="{
                  name: 'ScenicSpotDetail',
                  params: { city: 'NewTaipei' }
                }"
              >
                <div class="city-card-body">
                  <div class="city-card-two city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">新北市</div>
                    </div>
                  </div>
                </div>
              </router-link>
              <router-link
                class="city-card-sm"
                :to="{ name: 'ScenicSpotDetail', params: { city: 'Taoyuan' } }"
              >
                <div class="city-card-body">
                  <div class="city-card-three city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">桃園市</div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <router-link
              class="city-card"
              :to="{ name: 'ScenicSpotDetail', params: { city: 'Hsinchu' } }"
            >
              <div class="city-card-body">
                <div class="city-card-four city-card-bg">
                  <div class="city-card-overlay text-white">
                    <span class="mdi mdi-map-marker"></span>
                    <div class="h5">新竹市</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col">
            <div class="d-flex flex-column justify-content-between h-100">
              <router-link
                class="city-card-sm"
                :to="{ name: 'ScenicSpotDetail', params: { city: 'Taichung' } }"
              >
                <div class="city-card-body">
                  <div class="city-card-five city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">台中</div>
                    </div>
                  </div>
                </div>
              </router-link>
              <router-link
                class="city-card-sm"
                :to="{
                  name: 'ScenicSpotDetail',
                  params: { city: 'NantouCounty' }
                }"
              >
                <div class="city-card-body">
                  <div class="city-card-six city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">南投</div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <router-link
              class="city-card"
              :to="{ name: 'ScenicSpotDetail', params: { city: 'Chiayi' } }"
            >
              <div class="city-card-body">
                <div class="city-card-seven city-card-bg">
                  <div class="city-card-overlay text-white">
                    <span class="mdi mdi-map-marker"></span>
                    <div class="h5">嘉義市</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row row-cols-lg-5 scroll-area" v-else>
          <div class="col">
            <router-link
              class="city-card"
              :to="{ name: 'ScenicSpotDetail', params: { city: 'Tainan' } }"
            >
              <div class="city-card-body">
                <div class="city-card-second_one city-card-bg">
                  <div class="city-card-overlay text-white">
                    <span class="mdi mdi-map-marker"></span>
                    <div class="h5">台南</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col">
            <div class="d-flex flex-column justify-content-between h-100">
              <router-link
                class="city-card-sm"
                :to="{
                  name: 'ScenicSpotDetail',
                  params: { city: 'Kaohsiung' }
                }"
              >
                <div class="city-card-body">
                  <div class="city-card-second_two city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">高雄</div>
                    </div>
                  </div>
                </div>
              </router-link>
              <router-link
                class="city-card-sm"
                :to="{
                  name: 'ScenicSpotDetail',
                  params: { city: 'PingtungCounty' }
                }"
              >
                <div class="city-card-body">
                  <div class="city-card-second_three city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">屏東</div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <router-link
              class="city-card"
              :to="{
                name: 'ScenicSpotDetail',
                params: { city: 'YilanCounty' }
              }"
            >
              <div class="city-card-body">
                <div class="city-card-second_four city-card-bg">
                  <div class="city-card-overlay text-white">
                    <span class="mdi mdi-map-marker"></span>
                    <div class="h5">宜蘭</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col">
            <div class="d-flex flex-column justify-content-between h-100">
              <router-link
                class="city-card-sm"
                :to="{
                  name: 'ScenicSpotDetail',
                  params: { city: 'HualienCounty' }
                }"
              >
                <div class="city-card-body">
                  <div class="city-card-second_five city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">花蓮</div>
                    </div>
                  </div>
                </div>
              </router-link>
              <router-link
                class="city-card-sm"
                :to="{
                  name: 'ScenicSpotDetail',
                  params: { city: 'TaitungCounty' }
                }"
              >
                <div class="city-card-body">
                  <div class="city-card-second_six city-card-bg">
                    <div class="city-card-overlay text-white">
                      <span class="mdi mdi-map-marker"></span>
                      <div class="h5">台東</div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <router-link
              class="city-card"
              :to="{
                name: 'ScenicSpotDetail',
                params: { city: 'KinmenCounty' }
              }"
            >
              <div class="city-card-body">
                <div class="city-card-second_seven city-card-bg">
                  <div class="city-card-overlay text-white">
                    <span class="mdi mdi-map-marker"></span>
                    <div class="h5">金門</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </transition>
    </div>

    <!-- Activities -->
    <h3 class="h5">
      <span class="mdi mdi-triangle text-primary mr-2"></span>熱門活動
    </h3>
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col mb-5" v-for="activity in activities" :key="activity.ID">
        <div class="card data-card h-100">
          <div class="card-body d-flex">
            <div class="data-card-pic">
              <template v-if="activity.Picture.PictureUrl1">
                <img
                  :src="activity.Picture.PictureUrl1"
                  :alt="activity.Picture.PictureDescription1"
                />
              </template>
              <template v-else>
                <img
                  src="https://boatatfood.com/templates/ArtFraming/images/ProductDefault.gif"
                  alt="暫無圖片"
                />
              </template>
            </div>
            <div class="d-flex flex-column ml-3 w-60 justify-content-between">
              <h6>{{ activity.Name }}</h6>
              <p class="data-card-content text-truncate mb-1" v-if="!isMobile">
                {{ activity.Description }}
              </p>
              <div
                class="card-footer p-0 d-flex justify-content-between"
                :class="{ 'flex-column': isMobile }"
              >
                <div class="d-flex align-items-center">
                  <span class="mdi mdi-map-marker text-primary mr-2"></span>
                  <div class="subtitle-1">{{ activity.Location }}</div>
                </div>
                <button
                  class="btn btn-outline-primary"
                  :class="{ 'btn-sm': isMobile, 'subtitle-1': !isMobile }"
                  @click="toDetail(activity, 'activity')"
                >
                  活動詳情
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Catering -->
    <h3 class="h5">
      <span class="mdi mdi-square text-warning mr-2"></span>熱門餐飲
    </h3>
    <div class="row row-cols-2 row-cols-lg-4 row-cols-xl-5 mx-n1">
      <div class="col mb-5 px-1" v-for="item in catering" :key="item.ID">
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
              <span class="mdi mdi-map-marker text-primary"></span>
              <span class="text-green font-weight-light subtitle-2">
                {{ item.Address }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
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
                <p class="subtitle-1">
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
                <p v-if="detailData.type === 'activity'">
                  <span
                    class="mdi mdi-ticket-confirmation-outline text-primary  pr-2"
                  ></span>
                  {{ detailData.Charge ? `NT$${detailData.Charge}` : '免費' }}
                </p>
                <p v-else>
                  <span
                    class="mdi mdi-food-fork-drink text-primary  pr-2"
                  ></span>
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
</template>
<script>
import $ from 'jquery'
import { format } from 'date-fns'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HotData',
  computed: {
    ...mapGetters({
      isMobile: 'isMobile',
      activities: 'scenic/hotActivities',
      catering: 'scenic/hotCatering'
    }),
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
      cityArea: 0,
      detailData: null,
      currentImg: 0
    }
  },
  methods: {
    ...mapActions('scenic', ['getHotDatas']),
    ...mapActions(['setIsLoading']),
    loadHotDatas () {
      this.setIsLoading(true)
      this.getHotDatas()
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
    imgControl (query) {
      if (query === 1) {
        console.log(Object.keys(this.detailData.Picture).length)
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
  created () {
    this.loadHotDatas()
  }
}
</script>
<style lang="scss">
.city-card-one {
  background-image: url(~@/assets/images/taipei.jpg);
}
.city-card-two {
  background-image: url(~@/assets/images/new_taipei.jpg);
}
.city-card-three {
  background-image: url(~@/assets/images/taoyuan.jpg);
}
.city-card-four {
  background-image: url(~@/assets/images/hsinchu.jpg);
}
.city-card-five {
  background-image: url(~@/assets/images/taichung.jpg);
}
.city-card-six {
  background-image: url(~@/assets/images/nantou.jpg);
}
.city-card-seven {
  background-image: url(~@/assets/images/chiayi.jpg);
}
.city-card-second_one {
  background-image: url(~@/assets/images/tainan.jpg);
}
.city-card-second_two {
  background-image: url(~@/assets/images/kaohsiung.jpg);
}
.city-card-second_three {
  background-image: url(~@/assets/images/pingtung.jpg);
}
.city-card-second_four {
  background-image: url(~@/assets/images/yilan.jpg);
}
.city-card-second_five {
  background-image: url(~@/assets/images/hualien.jpg);
}
.city-card-second_six {
  background-image: url(~@/assets/images/taitung.jpg);
}
.city-card-second_seven {
  background-image: url(~@/assets/images/kinmen.jpg);
}

.city-section {
  position: relative;
  .btn {
    position: absolute;
    font-size: 6px;
  }
  .btn-left-translate {
    left: -50px;
    top: 50%;
  }
  .btn-right-translate {
    right: -50px;
    top: 50%;
  }
  > .row {
    @media (max-width: 414px) {
      overflow: scroll;
      flex-wrap: nowrap;
    }
  }
}
</style>
