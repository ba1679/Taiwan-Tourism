<template>
  <Header />
  <div class="position-relative">
    <router-view />
    <Loading v-model:active="isLoading">
      <div class="loadingio-spinner-ellipsis-wlxrkfi023m">
        <div class="ldio-xjr1zv0il8e">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Loading>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      breakPoint: 'breakPoint'
    })
  },
  methods: {
    detectWindowWidth () {
      this.$store.dispatch('setBreakpoint', window.innerWidth)
    }
  },
  created () {
    this.detectWindowWidth()
    window.addEventListener('resize', this.detectWindowWidth)
  },
  unmounted () {
    window.removeEventListener('resize', this.detectWindowWidth)
  },
  watch: {
    breakPoint: {
      immediate: true,
      handler (val) {
        if (val <= 414) {
          this.$store.dispatch('setIsMobile', true)
        } else {
          this.$store.dispatch('setIsMobile', false)
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/all';
</style>
