<script>
import HomePage from "./views/HomePage.vue";
import ApparatusPage from "./views/ApparatusPage.vue";
import MovePage from "./views/MovePage.vue";
import RoutinePage from "./views/RoutinePage.vue";

export default {
  components: {
    ApparatusPage,
    MovePage,
    RoutinePage,
  },
  data: () => ({
    currentPage: "Home",
    userList: []
  }),
  computed: {
    renderPage() {
      return this.currentPage + 'Page';
    },
    // activePageClass() {
      
    // }
  },
  methods: {
    showApparatusPage() {
      this.currentPage = "Apparatus";
    },
    showMovePage() {
      this.currentPage = "Move";
    },
    showRoutinePage() {
      this.currentPage = "Routine";
    },
    showHomePage() {
      this.currentPage = "Home";
    }
  }
};
</script>

<template>
  <div class="header-wrapper">
    <h1>Circus Routine App</h1>
    <nav class="navigation">
      <div class="circus-actions">
        <router-link class="nav-item" v-bind:class="{}" to="/apparatus" >Apparatus</router-link>
        <router-link class="nav-item" to="/move" >Move</router-link>
        <router-link class="nav-item" to="/routine" >Routine</router-link>
      </div>
      <div class="user-actions">
        <a class="nav-item">User Information</a>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<style>
strong {
  font-weight: bold;
}
</style>
./views/RoutinePage.vue./views/HomePage.vue./views/ApparatusPage.vue