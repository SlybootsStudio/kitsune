<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark text-light border-top border-bottom border-secondary"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Home</router-link
          >

          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Skills</router-link
          >
          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Treasury</router-link
          >
          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Temple</router-link
          >

          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Adventure</router-link
          >

          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Regions</router-link
          >

          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Quests
            <span class="badge bg-success text-white">1</span></router-link
          >
          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Dungeons</router-link
          >
          <router-link class="btn btn-link" :to="{ name: 'Main2' }"
            >Honors</router-link
          >
          <!--
          <div class="btn-group me-2" role="group" aria-label="First group">
            <router-link class="btn btn-secondary" :to="{ name: 'Main2' }"
              >Home</router-link
            >
          </div>

          <div class="btn-group me-2" role="group" aria-label="First group">
            <router-link class="btn btn-secondary" :to="{ name: 'Main' }"
              >Character</router-link
            >
            <router-link class="btn btn-secondary" :to="{ name: 'Main2' }"
              >Treasury</router-link
            >
            <router-link class="btn btn-secondary" :to="{ name: 'Main2' }"
              >Temple</router-link
            >
          </div>
          <div class="btn-group me-2" role="group" aria-label="First group">
            <router-link class="btn btn-secondary" :to="{ name: 'Main' }"
              >Adventure</router-link
            >
            <router-link class="btn btn-secondary" :to="{ name: 'Main2' }"
              >Regions</router-link
            >
          </div>
          <div class="btn-group me-2" role="group" aria-label="First group">
            <router-link class="btn btn-secondary" :to="{ name: 'Main' }"
              >Quests</router-link
            >
            <router-link class="btn btn-secondary" :to="{ name: 'Main2' }"
              >Honors</router-link
            >
          </div>
          -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    expandSize: String,
    links: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: #222 !important;
}

.navbar-nav .btn {
  text-decoration: none;
}
</style>
