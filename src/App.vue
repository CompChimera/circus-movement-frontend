<script>


export default {
  components: {

  },
  data: () => ({
    currentPage: "Home",
    userList: []
  }),
  computed: {

    // activePageClass() {
      
    // }
  },
  methods: {

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

</style>
./views/RoutinePage.vue./views/HomePage.vue./views/ApparatusPage.vue