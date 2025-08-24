<template>
  <div class="item col-lg-4">
    <div class="pic">
      <a :href="content.link" :target="/^http(s?):*?/.test(content.link) ? '_blank' : ''">
        <img :src="`/assets/pic/${content.image}`" />
      </a>
      <slot name="link"></slot>
    </div>
    <div class="text">
      <h4>{{ content.title }}</h4>
      <p>{{ content.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
};
</script>

<style>
</style>