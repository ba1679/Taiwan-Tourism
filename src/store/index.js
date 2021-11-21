import { createStore } from 'vuex'
import cities from '@/assets/cities.json'
import JsSHA from 'jssha'
// module
import scenic from './scenic'
import hotel from './hotel'

export default createStore({
  state: {
    isLoading: false,
    breakPoint: null,
    isMobile: false,
    cities: cities,
    apiHeader: null
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    breakPoint (state) {
      return state.breakPoint
    },
    isMobile (state) {
      return state.isMobile
    },
    cityOptions (state) {
      const citiesOptions = []
      state.cities.forEach(item => {
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
  mutations: {
    SET_IS_LOADING (state, isLoading) {
      state.isLoading = isLoading
    },
    SET_BREAKPOINT (state, breakPoint) {
      state.breakPoint = breakPoint
    },
    SET_IS_MOBILE (state, isMobile) {
      state.isMobile = isMobile
    },
    SET_API_HEADER (state, header) {
      state.apiHeader = header
    }
  },
  actions: {
    setIsLoading ({ commit }, isLoading) {
      commit('SET_IS_LOADING', isLoading)
    },
    setBreakpoint ({ commit }, breakPoint) {
      commit('SET_BREAKPOINT', breakPoint)
    },
    setIsMobile ({ commit }, isMobile) {
      commit('SET_IS_MOBILE', isMobile)
    },
    getAuthorizationHeader ({ commit }) {
      return new Promise(resolve => {
        const GMTString = new Date().toGMTString()
        const ShaObj = new JsSHA('SHA-1', 'TEXT')
        ShaObj.setHMACKey(process.env.VUE_APP_APIAPPKEY, 'TEXT')
        ShaObj.update('x-date: ' + GMTString)
        const HMAC = ShaObj.getHMAC('B64')
        const Authorization =
          'hmac username="' +
          process.env.VUE_APP_APIAPPID +
          '", algorithm="hmac-sha1", headers="x-date", signature="' +
          HMAC +
          '"'
        commit('SET_API_HEADER', {
          Authorization: Authorization,
          'X-Date': GMTString
        })
        resolve()
      })
    }
  },
  modules: {
    scenic,
    hotel
  }
})
