<template>
  <Header />
  <Navbar class="mb-3" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 col-md-8 col-lg-9">
        <router-view />
      </div>
      <div class="col-sm-6 col-md-4 col-lg-3">
        <Sidebar />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Sidebar,
    Footer
  }
};
</script>

<style scoped>
div {
}
</style>
