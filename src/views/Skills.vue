<template>
  <div class="h4 text-uppercase">Skills</div>
  <div v-for="skill in skillsData" :key="skill.id" class="row">
    <div class="col">{{ skill.label }}</div>
    <div class="col">Level 1</div>
    <div class="col">5/10</div>
    <div class="col">
      {{ skill }}
    </div>
  </div>
</template>

<script>
import skillsData from "@/data/skills.json";

export default {
  name: "Skills",
  components: {},
  data: function() {
    return {
      skillsData: skillsData
    };
  },
  props: {},
  computed: {},
  methods: {}
};
</script>
