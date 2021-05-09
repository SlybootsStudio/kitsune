<template>
  <Header />
  <Navbar class="mb-5" />
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Footer
  }
};
</script>

<style></style>
