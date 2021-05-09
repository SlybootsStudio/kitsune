<template>
  <div>
    <SidebarBox title="Action Summary" class="mb-3"
      ><ActionSummary
    /></SidebarBox>
    <SidebarBox title="Spirit Guide" class="mb-3"><ActionSummary /></SidebarBox>
    <SidebarBox title="Effects" class="mb-3"><EffectsSummary /></SidebarBox>
    <SidebarBox title="Action Log" class="mb-3"><ActionLog /></SidebarBox>
  </div>
</template>

<script>
import SidebarBox from "@/components/sidebar/SidebarBox";
import ActionSummary from "@/components/sidebar/ActionSummary";
import EffectsSummary from "@/components/sidebar/EffectsSummary";
import ActionLog from "@/components/sidebar/ActionLog";
export default {
  name: "Sidebar",
  components: { SidebarBox, ActionSummary, EffectsSummary, ActionLog },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
