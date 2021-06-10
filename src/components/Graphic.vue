<template>
  <div class="item col-lg-4">
    <div class="pic">
      <a :href="content.link"  target="_blank" >
        <img :src="require(`@/assets/pic/${content.image}`)" />
      </a>
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