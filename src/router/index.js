import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ScenicIndex',
    component: () => import('@/views/Scenic/ScenicIndex.vue'),
    children: [
      {
        path: '',
        name: 'Hot',
        component: () => import('@/views/Scenic/HotData.vue')
      },
      {
        path: 'scenicSpot-detail/:city',
        name: 'ScenicSpotDetail',
        component: () => import('@/views/Scenic/ScenicSpotDetail.vue')
      },
      {
        path: 'activities-detail/:city',
        name: 'ActivitiesDetail',
        component: () => import('@/views/Scenic/ActivitiesDetail.vue')
      },
      {
        path: 'search/:category',
        name: 'scenicSearch',
        component: () => import('@/views/SearchDetail.vue')
      }
    ]
  },
  {
    path: '/hotel',
    name: 'HotelIndex',
    redirect: '/hotel/hot',
    component: () => import('@/views/Hotel/HotelIndex.vue'),
    children: [
      {
        path: '/hotel/hot',
        name: 'HotelHot',
        component: () => import('@/views/Hotel/HotelHotData.vue')
      },
      {
        path: '/hotel/catering-detail/:city',
        name: 'CateringDetail',
        component: () => import('@/views/Hotel/CateringDetail.vue')
      },
      {
        path: '/hotel/hotel-detail/:city',
        name: 'HotelDetail',
        component: () => import('@/views/Hotel/HotelDetail.vue')
      },
      {
        path: '/hotel/search/:category',
        name: 'hotelSearch',
        component: () => import('@/views/SearchDetail.vue')
      }
    ]
  },
  {
    path: '/develop',
    name: 'Develop',
    component: () => import('@/views/DevelopingPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
