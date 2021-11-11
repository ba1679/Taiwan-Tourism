import axios from 'axios'
import JsSHA from 'jssha'

function getAuthorizationHeader () {
  const AppID = '68f101d6d0754763bd7971af9242e66e'
  const AppKey = '3e0X_xPUcHABs_gOwblayzHD0tc'
  const GMTString = new Date().toGMTString()
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"'
  return { Authorization: Authorization, 'X-Date': GMTString }
}

export default {
  namespaced: true,
  state: {
    hotHotels: [],
    hotCatering: [],
    cityHotels: [],
    cityCatering: [],
    searchHotels: [],
    searchCatering: []
  },
  getters: {
    hotHotels (state) {
      return state.hotHotels
    },
    hotCatering (state) {
      return state.hotCatering
    },
    cityHotels (state) {
      return state.cityHotels
    },
    cityCatering (state) {
      return state.cityCatering
    },
    searchHotels (state) {
      return state.searchHotels
    },
    searchCatering (state) {
      return state.searchCatering
    }
  },
  mutations: {
    SET_HOT_HOTELS (state, data) {
      state.hotHotels = data
    },
    SET_HOT_CATERING (state, data) {
      state.hotCatering = data
    },
    CLEAR_HOT_DATAS (state) {
      state.hotHotels = []
      state.hotCatering = []
    },
    SET_CITY_CATERING (state, data) {
      state.cityCatering = data
    },
    SET_CITY_HOTELS (state, data) {
      state.cityHotels = data
    },
    SET_SEARCH_CATERING (state, data) {
      state.searchCatering = data
    },
    SET_SEARCH_HOTELS (state, data) {
      state.searchHotels = data
    }
  },
  actions: {
    getHotDatas ({ dispatch, commit }) {
      return dispatch('getTopTenHotels')
        .then(() => {
          return dispatch('getTopTenCatering')
        })
        .catch(err => {
          commit('CLEAR_HOT_DATAS')
          return Promise.reject(err)
        })
    },
    getTopTenHotels ({ commit }) {
      return axios
        .get(
          `${process.env.VUE_APP_APIPATH}Tourism/Hotel?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=10&$format=JSON`,
          {
            headers: getAuthorizationHeader()
          }
        )
        .then(res => {
          commit('SET_HOT_HOTELS', res.data)
          return res
        })
        .catch(err => {
          const errText = 'get Top Ten hotels' + err
          return Promise.reject(errText)
        })
    },
    getTopTenCatering ({ commit }) {
      return axios
        .get(
          `${process.env.VUE_APP_APIPATH}Tourism/Restaurant?$orderby=SrcUpdateTime%20desc&$top=10&$format=JSON`,
          {
            headers: getAuthorizationHeader()
          }
        )
        .then(res => {
          commit('SET_HOT_CATERING', res.data)
          return res
        })
        .catch(err => {
          const errText = 'get Top Ten Catering' + err
          return Promise.reject(errText)
        })
    },
    getCityCatering ({ commit }, city) {
      return axios
        .get(
          `${process.env.VUE_APP_APIPATH}Tourism/Restaurant/${city}?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=20&$format=JSON`,
          {
            headers: getAuthorizationHeader()
          }
        )
        .then(res => {
          commit('SET_CITY_CATERING', res.data)
          return res
        })
        .catch(err => {
          const errText = 'get City catering' + err
          return Promise.reject(errText)
        })
    },
    getCityHotel ({ commit }, city) {
      return axios
        .get(
          `${process.env.VUE_APP_APIPATH}Tourism/Hotel/${city}?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=10&$format=JSON`,
          {
            headers: getAuthorizationHeader()
          }
        )
        .then(res => {
          commit('SET_CITY_HOTELS', res.data)
          return res
        })
        .catch(err => {
          const errText = 'get City Hotels' + err
          return Promise.reject(errText)
        })
    },
    searchCityCatering ({ commit }, city) {
      return axios
        .get(
          `${process.env.VUE_APP_APIPATH}Tourism/Restaurant?$filter=contains(City, '${city}') and Picture%2FPictureUrl1%20ne%20null%20&$top=20&$format=JSON`,
          {
            headers: getAuthorizationHeader()
          }
        )
        .then(res => {
          console.log(res.data)
          commit('SET_SEARCH_CATERING', res.data)
          return res
        })
        .catch(err => {
          const errText = 'search City catering ' + err
          return Promise.reject(errText)
        })
    },
    searchCityHotels ({ commit }, city) {
      return axios
        .get(
          `${process.env.VUE_APP_APIPATH}Tourism/Hotel?$filter=contains(City, '${city}') and Picture%2FPictureUrl1%20ne%20null%20&$format=JSON`,
          {
            headers: getAuthorizationHeader()
          }
        )
        .then(res => {
          commit('SET_SEARCH_HOTELS', res.data)
          return res
        })
        .catch(err => {
          const errText = 'search City Hotels' + err
          return Promise.reject(errText)
        })
    }
  }
}
