<template>
  <div ref="menu" class="menubar">
    <a class="menubarBtn" @click="clickMenubar">
      <i class="fas fa-bars"></i>
    </a>
    <ul class="navBar">
      <li v-for="item in navbarItems" :key="item.href" @click="scrollTo(item.href)"
      :class="['show-menu',{'hidden-menu':!menubarStatus}]"> 
        <a class="navLink">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
export default {
  setup() {
    const navbarItems = [
      { href: "#about", title: "About" },
      { href: "#skill", title: "Skills" },
      { href: "#experience", title: "Experience" },
      { href: "#portfolio", title: "Portfolio" },
    ];

    // 模板引用:https://reurl.cc/dG55ng
    const menu = ref(null);
    const showMenu = ref(false);
    const screenWidth = ref(document.body.offsetWidth);
      // document.body.offsetWidth 指body的寬度
    const isDesktop = computed(()=> screenWidth.value >= 992);

    onMounted(() => {
      document.addEventListener('scroll', ()=> showMenu.value = false);
      window.addEventListener('resize', ()=>  screenWidth.value = document.body.offsetWidth);
    });

    const menubarStatus = computed(()=> isDesktop.value || showMenu.value );
    const clickMenubar = ()=> showMenu.value = !showMenu.value;

    const scrollTo = (id)=>{
      // offsetTop 取得頁面最高點，也就是0到about的top距離是多少
      const top = document.querySelector(id).offsetTop;
      const menuHeight = isDesktop.value ? 0 : menu.value.offsetHeight;
      window.scrollTo(0, top - menuHeight)
    };

    return { navbarItems, menubarStatus, clickMenubar, scrollTo, menu };
  },
};
</script>

<style scoped>
  .show-menu{ 
      height: 55px;
      padding: 3px 0;
  }
  .hidden-menu{ 
      height: 0;
      padding: 0;
  }
</style>