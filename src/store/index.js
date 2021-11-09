import { createStore } from 'vuex'
import JsSHA from 'jssha'
// module
import scenic from './scenic'
import hotel from './hotel'

export default createStore({
  state: {
    isLoading: false,
    breakPoint: null,
    isMobile: false
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
    getAuthorizationHeader () {
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
  },
  modules: {
    scenic,
    hotel
  }
})
