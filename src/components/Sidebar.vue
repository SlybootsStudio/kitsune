<template>
  <div>
    <SidebarBox title="Action Summary"><ActionSummary /></SidebarBox>
  </div>
</template>

<script>
import SidebarBox from "@/components/SidebarBox";
import ActionSummary from "@/components/ActionSummary";
export default {
  name: "Sidebar",
  components: { SidebarBox, ActionSummary },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
