<template>
  <div class="menubar">
    <a class="menubarBtn" @click="clickMenubar">
      <i class="fas fa-bars"></i>
    </a>
    
    <ul class="navBar">
      <li v-for="item in navbarItems" :key="item.href" :class="['show-menu',{'hidden-menu':!menubarStatus}]"> 
        <a class="navLink" :href="item.href">{{item.title}}</a>
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

    const showMenu = ref(false);
    const screenWidth = ref(document.body.offsetWidth);

    onMounted(() => {
      document.addEventListener('scroll', ()=> showMenu.value = false);
      window.addEventListener('resize', ()=>  screenWidth.value = document.body.offsetWidth);
    });

    const menubarStatus = computed(()=> screenWidth.value >= 992 || showMenu.value );
    const clickMenubar = ()=> showMenu.value = !showMenu.value;    

    return { navbarItems, menubarStatus, clickMenubar };
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