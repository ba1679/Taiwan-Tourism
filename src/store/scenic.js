import axios from 'axios'

export default {
  namespaced: true,
  state: {
    hotActivities: [],
    hotCatering: [],
    cityScenicSpot: [],
    cityActivities: [],
    searchScenicSpot: [],
    searchActivities: []
  },
  getters: {
    hotActivities (state) {
      return state.hotActivities
    },
    hotCatering (state) {
      return state.hotCatering
    },
    cityScenicSpot (state) {
      return state.cityScenicSpot
    },
    cityActivities (state) {
      return state.cityActivities
    },
    searchScenicSpot (state) {
      return state.searchScenicSpot
    },
    searchActivities (state) {
      return state.searchActivities
    }
  },
  mutations: {
    SET_HOT_ACTIVITIES (state, data) {
      state.hotActivities = data
    },
    SET_HOT_CATERING (state, data) {
      state.hotCatering = data
    },
    CLEAR_HOT_DATAS (state) {
      state.hotActivities = []
      state.hotCatering = []
    },
    SET_CITY_SCENICSPOT (state, data) {
      state.cityScenicSpot = data
    },
    SET_CITY_ACTIVITIES (state, data) {
      state.cityActivities = data
    },
    SET_SEARCH_SCENICSPOT (state, data) {
      state.searchScenicSpot = data
    },
    SET_SEARCH_ACTIVITIES (state, data) {
      state.searchActivities = data
    }
  },
  actions: {
    getHotDatas ({ dispatch, commit }) {
      return dispatch('getTopFourActivities')
        .then(() => {
          return dispatch('getTopTenCatering')
        })
        .catch(err => {
          commit('CLEAR_HOT_DATAS')
          return Promise.reject(err)
        })
    },
    getTopFourActivities ({ dispatch, commit, rootState }) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Activity?$top=4&$skip=4&$format=JSON`,
            {
              headers: rootState.apiHeader
            }
          )
          .then(res => {
            commit('SET_HOT_ACTIVITIES', res.data)
            return res
          })
          .catch(err => {
            const errText = 'get Top Four Activities' + err
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
    getCityScenicSpot ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/ScenicSpot/${city}?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=20&$format=JSON`,
            {
              headers: rootState.apiHeader
            }
          )
          .then(res => {
            commit('SET_CITY_SCENICSPOT', res.data)
            return res
          })
          .catch(err => {
            const errText = 'get City ScenicSpot' + err
            return Promise.reject(errText)
          })
      })
    },
    getCityActivity ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Activity/${city}?$orderby=SrcUpdateTime%20desc&$filter=Picture%2FPictureUrl1%20ne%20null%20&$top=10&$format=JSON`,
            {
              headers: rootState.apiHeader
            }
          )
          .then(res => {
            commit('SET_CITY_ACTIVITIES', res.data)
            return res
          })
          .catch(err => {
            const errText = 'get City Activity' + err
            return Promise.reject(errText)
          })
      })
    },
    searchCityScenicSpot ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/ScenicSpot?$filter=contains(City, '${city}') and Picture%2FPictureUrl1%20ne%20null%20&$format=JSON`,
            {
              headers: rootState.apiHeader
            }
          )
          .then(res => {
            commit('SET_SEARCH_SCENICSPOT', res.data)
            return res
          })
          .catch(err => {
            const errText = 'search City ScenicSpot ' + err
            return Promise.reject(errText)
          })
      })
    },
    searchCityActivities ({ dispatch, commit, rootState }, city) {
      dispatch('getAuthorizationHeader', {}, { root: true }).then(() => {
        return axios
          .get(
            `${process.env.VUE_APP_API_DOMAIN}/v2/Tourism/Activity?$filter=contains(City, '${city}') and Picture%2FPictureUrl1%20ne%20null%20&$format=JSON`,
            {
              headers: rootState.apiHeader
            }
          )
          .then(res => {
            commit('SET_SEARCH_ACTIVITIES', res.data)
            return res
          })
          .catch(err => {
            const errText = 'search City Activities' + err
            return Promise.reject(errText)
          })
      })
    }
  }
}
