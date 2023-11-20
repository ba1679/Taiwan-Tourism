import { createStore } from 'vuex'
import cities from '@/assets/cities.json'
import axios from 'axios'
import qs from 'qs'
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
    async getAuthorizationHeader ({ commit }) {
      const parameter = {
        grant_type: 'client_credentials',
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRECT
      }

      const config = {
        method: 'post',
        url: process.env.VUE_APP_AUTH_URL,
        data: qs.stringify(parameter),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      try {
        const res = await axios.request(config)
        commit('SET_API_HEADER', { Authorization: `Bearer ${res.data.access_token}` })
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
    scenic,
    hotel
  }
})
