<template>
  <div>
    <div class="text-start text-uppercase fw-bold text-dark">
      {{ title }}
    </div>

    <div class="border rounded border-secondary p-3 text-small text-muted">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarBox",
  props: {
    title: {
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
