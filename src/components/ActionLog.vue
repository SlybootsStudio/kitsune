<template>
  <div>
    <button class="btn btn-link btn-sm text-small float-end" @click="clear">
      Clear
    </button>
    <button class="btn btn-link btn-sm text-small float-end" @click="add">
      Add
    </button>
    <div class="text-small p-3 log">
      <p v-for="entry in entries" :key="entry.id">
        <span class="text-secondary text-small">[{{ entry.time }}]</span>
        {{ entry.content }}
      </p>
      <div class="text-muted">
        <p class="p-0 m-0">
          {{ !entries.length ? `Log entry is empty` : null }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionSummary",
  data: function() {
    return {
      entries: []
    };
  },
  methods: {
    add() {
      this.entries.push({
        id: this.entries.length + 1,
        time: "Today",
        content: "+1 Rune of the Forest"
      });
    },
    clear() {
      this.entries = [];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
