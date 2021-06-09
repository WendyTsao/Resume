<template>
  <div class="item col-8">
    <div class="pic">
      <img :src="require(`@/assets/pic/${content.image}`)" />
    </div>
    <div class="text">
      <h4>{{ content.title }}</h4>
      <p>{{ content.text }}</p>
      <a :href="content.link" class="portfolio-link">
        <Toggle-button>
          <template #icon-right>
            前往查看作品
            <i class="far fa-hand-point-right"></i>
          </template>
        </Toggle-button>
      </a>
    </div>
  </div>

  <!-- <div class="portfolio-item col-lg-4">
    <img :src="require(`@/assets/pic/${content.image}`)" />

    <a class="text" :href="content.link">
      <h3>{{ content.title }}</h3>
      <h3>{{ content.subTitle }}</h3>
    </a>
  </div> -->
</template>

<script>
import ToggleButton from "./ToggleButton.vue";

export default {
  components: { ToggleButton },
  props: {
    content: {
      type: Object,
    },
  },
};
</script>

<style>
</style>