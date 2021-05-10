<template>
  <div class="h4 text-uppercase mb-3">Treasury</div>

  <SolidBox title="Test">
    <div v-for="item in itemsData" :key="item.id" class="row">
      <div class="col">{{ item.label }}</div>
      <div class="col">Level 1</div>
      <div class="col">5/10</div>
      <div class="col">
        {{ item }}
      </div>
    </div>
  </SolidBox>
</template>

<script>
import SolidBox from "@/components/SolidBox";

import itemsData from "@/data/items.json";

export default {
  name: "Treasury",
  components: { SolidBox },
  data: function() {
    return {
      itemsData: itemsData
    };
  },
  props: {},
  computed: {},
  methods: {}
};
</script>
