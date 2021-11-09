<template>
  <nav
    class="navbar navbar-expand-lg sticky-top align-items-baseline navbar-light bg-white px-5"
  >
    <h1 class="text-hide">
      <router-link class="logo navbar-brand" :to="{ name: 'ScenicIndex' }">
        <img
          class="img-fluid"
          :src="require('@/assets/images/logo.jpg')"
          alt="台灣旅遊網"
        />
      </router-link>
      台灣旅遊網
    </h1>
    <button
      class="navbar-toggler bg-primary"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active d-flex align-items-center mr-4">
          <span
            class="mdi mdi-triangle circle-icon circle-icon-primary mr-2 mr-md-0"
          ></span>
          <router-link
            class="nav-link subtitle-1 text-primary"
            :to="{ name: 'ScenicIndex' }"
          >
            台灣景點
          </router-link>
        </li>
        <li class="nav-item d-flex align-items-center mr-4">
          <span
            class="mdi mdi-square circle-icon circle-icon-warning mr-2 mr-md-0"
          ></span>
          <router-link
            class="nav-link text-warning subtitle-1"
            :to="{ name: 'HotelIndex' }"
            >美食住宿</router-link
          >
        </li>
        <li class="nav-item d-flex align-items-center">
          <span
            class="mdi mdi-circle circle-icon circle-icon-success mr-2 mr-md-0"
          ></span>
          <a class="nav-link text-success subtitle-1" href="#">景點交通</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  width: 99px;
  height: 57px;
}
</style>
