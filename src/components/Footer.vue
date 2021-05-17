<template>
  <div class="container-fluid footer">
    <slot></slot>
    <div class="portfolioLink">
      <a v-for="link in portfolioLink" :key="link.iconLink"
        :href="link.iconLink">
        <i :class="link.iconClass"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const portfolioLink = [
      { iconLink: "#", iconClass: "fab fa-github-alt" },
      { iconLink: "#", iconClass: "fab fa-codepen" },
      { iconLink: "#", iconClass: "fas fa-envelope" },
    ];

    return { portfolioLink };
  },
};
</script>

<style>
</style>