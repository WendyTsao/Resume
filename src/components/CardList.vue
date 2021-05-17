<template>
  <div class="col-sm-6">
    <div class="card">
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