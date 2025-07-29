<template>
  <div class="tag">
    <span class="badge rounded-pill">
      <slot name="icon-left"></slot>
      {{ title }}
      <slot name="icon-right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
  },
};
</script>
