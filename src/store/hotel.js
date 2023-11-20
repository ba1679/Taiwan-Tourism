import axios from 'axios'

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
    getTopTenHotels ({ dispatch, commit, rootState }) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Hotel?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=10&$format=JSON`,
            {
              headers: rootState.apiHeader
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
      })
    },
    getTopTenCatering ({ dispatch, commit, rootState }) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Restaurant?$orderby=SrcUpdateTime%20desc&$top=10&$format=JSON`,
            {
              headers: rootState.apiHeader
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
      })
    },
    getCityCatering ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Restaurant/${city}?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=20&$format=JSON`,
            {
              headers: rootState.apiHeader
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
      })
    },
    getCityHotel ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Hotel/${city}?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=10&$format=JSON`,
            {
              headers: rootState.apiHeader
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
      })
    },
    searchCityCatering ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Restaurant?$filter=contains(City, '${city}') and Picture%2FPictureUrl1%20ne%20null%20&$top=20&$format=JSON`,
            {
              headers: rootState.apiHeader
            }
          )
          .then(res => {
            commit('SET_SEARCH_CATERING', res.data)
            return res
          })
          .catch(err => {
            const errText = 'search City catering ' + err
            return Promise.reject(errText)
          })
      })
    },
    searchCityHotels ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Hotel?$filter=contains(City, '${city}') and Picture%2FPictureUrl1%20ne%20null%20&$format=JSON`,
            {
              headers: rootState.apiHeader
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
      })
    }
  }
}
