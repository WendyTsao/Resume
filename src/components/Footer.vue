<template>
  <div class="container-fluid footer">
    &copy; copyright 2021 by Wendy
    <div class="portfolioLink">
      <a v-for="link in portfolioLink" :key="link.iconLink" :href="link.iconLink" >
        <i :class="link.iconClass"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const portfolioLink = [
      { iconLink: "https://github.com/WendyTsao", iconClass: "fab fa-github-alt" },
      { iconLink: "https://codepen.io/WendyTsao/pens/public", iconClass: "fab fa-codepen" },
      { iconLink: "mailto:wendytsao84@gmail.com", iconClass: "fas fa-envelope" },
    ];

    return { portfolioLink };
  },
};
</script>

<style>
</style>