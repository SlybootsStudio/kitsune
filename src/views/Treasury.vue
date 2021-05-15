<template>
  <div class="h4 text-uppercase mb-3">Treasury</div>

  <div class="row">
    <div class="col">
      <SolidBox title="Resources">
        <div v-for="item in itemsData" :key="item.id" class="row">
          <div class="col">{{ item.label }}</div>
          <div class="col">Level 1</div>
          <div class="col">5/10</div>
          <div class="col">
            {{ item }}
          </div>
        </div>
      </SolidBox>
    </div>
    <div class="col">
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
    </div>
  </div>
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
