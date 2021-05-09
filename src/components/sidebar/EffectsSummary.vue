<template>
  <div>
    <div class="row">
      <div class="col-9 text-start">
        <span class="text-success">Aspect of the Bear (4)</span><br />
        <small>+20% Health</small><br />
        <small>+20% Damage</small>
      </div>
      <div class="col text-end">340</div>
    </div>
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
