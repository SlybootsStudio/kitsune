<template>
  <div>
    <p class="p-0 m-0 mb-3">
      You banished a <a href="#">Lost Soul</a> from the
      <router-link class="" :to="{ name: 'Main' }">Forest</router-link>...
    </p>

    <p class="p-0 m-0">+10 <span class="text-">Experience</span></p>
    <p class="p-0 m-0">+1 <span class="text-yellow">Essence</span></p>
  </div>
</template>

<script>
export default {
  name: "ActionSummary",
  props: {
    title: {
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
