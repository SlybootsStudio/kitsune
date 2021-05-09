<template>
  <div class="card">
    <div class="card-body">
      <div v-if="header" class="text-uppercase text-warning fw-bold">
        {{ header }}
      </div>
      {{ body }}
      <slot></slot>
    </div>
    <div v-if="footer" class="card-footer text-end">{{ footer }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data: function() {
    return {};
  },
  props: {
    header: {
      type: String
    },
    body: {
      type: String
    },
    footer: {
      type: String
    }
  },
  computed: {},
  methods: {}
};
</script>
