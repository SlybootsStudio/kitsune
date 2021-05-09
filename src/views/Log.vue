<template>
  <TitleCard header="Activity Log"
    >This is a log of all activity and actions. It will keep track of the last
    5000 entries.</TitleCard
  >
</template>

<script>
import TitleCard from "@/components/TitleCard";

export default {
  name: "Treasury",
  components: { TitleCard },
  data: function() {
    return {};
  },
  props: {},
  computed: {},
  methods: {}
};
</script>
