<template>
  <div class="col-sm-4">
    <div class="card h-100">
      <div class="card-body text">
        <h4>{{ title }}</h4>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>