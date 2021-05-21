<template>
  <div class="tag">
    <span class="badge rounded-pill">
      <slot name="icon-left"></slot>
      <!-- <i class="far fa-hand-point-left"></i> -->
      <!-- 認識這個女孩 -->
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

<style>
</style>