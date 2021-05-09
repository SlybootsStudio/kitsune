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
import SidebarBox from "@/components/SidebarBox";
import ActionSummary from "@/components/ActionSummary";
import EffectsSummary from "@/components/EffectsSummary";
import ActionLog from "@/components/ActionLog";
export default {
  name: "Sidebar",
  components: { SidebarBox, ActionSummary, EffectsSummary, ActionLog },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
