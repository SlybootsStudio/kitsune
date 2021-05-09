<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark text-light border-top border-bottom border-secondary"
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
          <div class="navbar-sm d-sm-block d-md-none">
            <router-link class="btn btn-link" :to="{ name: 'Main' }"
              >Home</router-link
            >

            <router-link class="btn btn-link" :to="{ name: 'Skills' }"
              >Skills</router-link
            >
            <router-link class="btn btn-link" :to="{ name: 'Treasury' }"
              >Treasury</router-link
            >
            <router-link class="btn btn-link" :to="{ name: 'Temple' }"
              >Temple</router-link
            >

            <router-link class="btn btn-link" :to="{ name: 'Adventure' }"
              >Adventure</router-link
            >

            <router-link class="btn btn-link" :to="{ name: 'Regions' }"
              >Regions</router-link
            >
            <!--
            <router-link class="btn btn-link" :to="{ name: 'Quests' }"
              >Quests
            </router-link>
            -->
            <!--
            <router-link class="btn btn-link" :to="{ name: 'Dungeons' }"
              >Dungeons</router-link
            >
            -->
            <!--
            <router-link class="btn btn-link" :to="{ name: 'Honors' }"
              >Honors</router-link
            >
            -->
          </div>

          <div class="navbar-md d-sm-none d-none d-md-block">
            <router-link class="btn btn-secondary me-2" :to="{ name: 'Main' }"
              >Home</router-link
            >

            <div class="btn-group me-2" role="group" aria-label="First group">
              <router-link class="btn btn-secondary" :to="{ name: 'Skills' }"
                >Skills</router-link
              >
              <router-link class="btn btn-secondary" :to="{ name: 'Treasury' }"
                >Treasury</router-link
              >
              <router-link class="btn btn-secondary" :to="{ name: 'Temple' }"
                >Temple</router-link
              >
            </div>
            <div class="btn-group me-2" role="group" aria-label="First group">
              <router-link class="btn btn-secondary" :to="{ name: 'Adventure' }"
                >Adventure</router-link
              >
              <router-link class="btn btn-secondary" :to="{ name: 'Regions' }"
                >Regions</router-link
              >
            </div>
            <div class="btn-group me-2" role="group" aria-label="First group">
              <router-link class="btn btn-secondary" :to="{ name: 'Log' }"
                >Log</router-link
              >
              <router-link class="btn btn-secondary" :to="{ name: 'Support' }"
                >Support</router-link
              >
              <router-link class="btn btn-secondary" :to="{ name: 'MyData' }"
                >My Data</router-link
              >
            </div>
            <!--
            <div class="btn-group me-2" role="group" aria-label="First group">
              <router-link class="btn btn-secondary" :to="{ name: 'Main' }"
                >Quests</router-link
              >
              <router-link class="btn btn-secondary" :to="{ name: 'Main' }"
                >Honors</router-link
              >
            </div>

            -->
          </div>
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
