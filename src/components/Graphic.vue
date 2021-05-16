<template>
  <div class="portfolio-item col-lg-4">
    <img :src="require(`@/assets/pic/${content.imgUrl}`)" />
    <div class="text">
      <h3>{{ content.title }}</h3>
      <h3>{{ content.subTitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  }
};
</script>

<style>
</style>