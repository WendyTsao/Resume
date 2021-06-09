<template>
  <!-- 圖片區塊 -->
  <div class="banner">
    <!-- 選單 -->
    <Navbar></Navbar>
    <div class="container">
      <div class="banner-text col-10 col-lg-8">
        <div class="upper">
          <p>PORTFOLIO.</p>
        </div>
        <div class="down">
          <p>Create by</p>
          <p>TSAO YU HSUAN</p>
        </div>
      </div>
      <a href="#about" class="rolldownbtn">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </div>

  <!-- 關於我 -->
  <div class="area-space about" id="about">
    <div class="container">
      <div class="title">
        <h2>ABOUT ME</h2>
      </div>
      <div class="content d-lg-flex col-10 mx-auto">
        <div class="avatar">
          <img src="../assets/pic/wendy.png" />
        </div>
        <div class="text">
          <transition name="fade">
            <div v-show="isBtn2 && btn1Disable" class="personality">
              <h4>勇於嘗試 • 挑戰自我</h4>
              <p>
                積極向上、獨立負責且勇於嘗試，<span class="highlight"
                  >「Try and do my best」</span
                >是我從小對自己的期望，對於不熟悉的事物都會打破砂鍋問到底，從哪裡失敗就從哪裡站起來。
              </p>
              <p>
                熱心公益、關心周遭瑣碎事物且心思縝密，善於溝通及團隊合作，喜歡從合作的過程中彼此交流對於事情不同的想法，並可在扮演不同角色中學習應對事情的不同角度。
              </p>
              <ToggleButton :title="'踏入前端世界的女孩做了什麼準備'"  @click="changeBtn('1')">
                <template #icon-right>
                    <i class="far fa-hand-point-right"></i>
                </template>
              </ToggleButton>
            </div>
          </transition>
          <transition name="fade">
            <div v-show="isBtn1 && btn2Disable" class="study">
                <h4>精進成長 • 學習不中斷</h4>
                <p>下定決心從平面設計轉職成前端設計時，我就開始尋找相關實體/線上課程進修：學習基礎的網頁語法 - HTML、CSS、jQuery，實作切版畫面(含RWD)搭配網頁動畫以及靈活運用線上開源套件。
                </p>
                <p>除了課堂上的學習，我也會搭配線上教學影片自行練習，讓學習更有效率。目前也仍持續在學習前端框架 Vue 和 CSS切版等相關知識。</p>
              <ToggleButton :title="'認識這個女孩'"  @click="changeBtn('2')">
                <template #icon-left>
                  <i class="far fa-hand-point-left"></i>
                </template>
              </ToggleButton>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>

  <!-- 技能 -->
  <div class="skills" id="skill">
    <div class="container">
      <div class="content col-10 mx-auto">
        <div class="row py-5">
          <CardList data-aos="zoom-in" :title="'PROGRAMMING'">
              <ul class="d-flex flex-wrap">
                <li v-for="item in skillProgrammingItems" class="skill-list" :key="item.programmingSkill">
                  {{ item.programmingSkill }}
                </li>
              </ul>
          </CardList>
          <CardList data-aos="zoom-in" data-aos-delay="500" :title="'DESIGN'">
              <ul class="d-flex flex-column align-items-center">
                <li v-for="item in skillDesignItems" class="skill-list" :key="item.designSkill">
                  {{ item.designSkill }}
                </li>
              </ul>
          </CardList>
        </div>
      </div>
    </div>
  </div>

  <!-- 工作經歷 -->
  <div class="area-space experience" id="experience">
    <div class="container">
      <div class="title">
        <h2>JOB EXPERIENCE</h2>
      </div>
      <div class="content col-10 col-lg-12 mx-auto">
        <ul class="timeline">
          <li>
            <div class="text" data-aos="fade-left">
              <span class="badge rounded-pill">
                <i class="fas fa-briefcase"></i>
                2016 July. - Aug.
              </span>
              <h4>新加坡商鈦坦科技 Titansoft Pte Ltd.</h4>
              <p>
                針對人資、面試官以及面試者開發的內部管理系統，可以進行線上測驗、填寫各式表單以及確認面試者的狀態。
              </p>
              <p>
                <span class="highlight">在專案上主要負責繪製流程圖以及前端介面設計。</span>
              </p>
              <p>
                專案開發的流程為敏捷式開發，透過Scrum來進行團隊之間的分工與討論。<span class="highlight">在團隊中扮演的角色為「溝通者」</span>，在固定的時間討論當日要完成的目標，遇到困難時會互相協助、提供方法解決，並在空閒時間拿出來討論、交流，讓每一個人可以學習，了解自己著手以外的部分。
              </p>
            </div>
          </li>
          <li>
            <div class="text" data-aos="fade-left" data-aos-delay="500" >
              <span class="badge rounded-pill">
                <i class="fas fa-briefcase"></i>
                2017 July. - 2021 Mar.
              </span>
              <h4>禮文股份有限公司 Mitek Lab Co., Ltd.</h4>
              <p>
                - 主要工作內容:<br />• 產品推廣設計
                (如：海報、型錄、文宣、網頁設計等)。<br />• 年度參展規劃
                (如：攤位設計、佈展等)。<br />• 負責網站管理及維護。
              </p>
              <p>
                - 重要專案:<br />
                <span class="highlight">【 公司形象網站改版 】成果</span
                >：新增後台管理系統及RWD設計，提供更好的使用者體驗。<br />
                • 負責規劃網站架構<br />
                • 與網頁公司溝通功能需求與介面設計<br />
                • 與公司業務進行後台管理系統使用教學
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 作品集 -->
  <div class="area-space portfolio" id="portfolio">
    <div class="container">
      <div class="title">
        <h2>PORTFOLIO</h2>
      </div>
      <div class="portfolio-programming">
        <div class="text">
          <h4>- 實作切版學習，靈活運用前端框架 -</h4>
        </div>
        <div class="row g-0 justify-content-center">
          <Graphic v-for="programmingGraphic in programmingGraphicItem" 
          :content="programmingGraphic"
          :key="programmingGraphic.imgUrl"></Graphic>
        </div>
      </div>
      <div class="portfolio-design">
        <div class="text">
          <h4>- 嘗試繪製前端介面，享受設計的快樂 -</h4>
        </div>
        <div class="row">
          <!-- <Graphic v-for="designGraphic in designGraphicItem" 
          :content="designGraphic"
          :key="designGraphic.imgUrl"></Graphic> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import CardList from '../components/CardList.vue';
import Graphic from '../components/Graphic.vue';
import ToggleButton from '../components/ToggleButton.vue';

import { ref, computed } from 'vue';

export default {
  components: { Navbar, Graphic, CardList, ToggleButton },
  setup(){
    const programmingGraphicItem = [
      {
        link: "https://bootstrap-vue-portfolio.herokuapp.com/",
        image: "VuePracticeResume.png",
        title: "About Wendy | Resume",
        text: "下定決心從平面設計轉職成前端設計後就開始著手規劃此作品，主要內容為呈現個人專長、工作經驗以及相關前端設計的作品。本作品從版面設計、RWD切版、Vue專案建立到 Heroku 部署皆由本人獨立完成。",
      },
      {
        link: "https://vue-5xruby-website-practice.herokuapp.com/",
        image: "VuePractice5xRuby.png",
        title: "About Wendy | Resume",
        text: "獨立完成版面設計、RWD切版、Vue專案建立到 Heroku 部署。",
      },
      {
        link: "https://wendy-resume.herokuapp.com/",
        image: "VuePracticeResume.png",
        title: "About Wendy | Resume",
        text: "獨立完成版面設計、RWD切版、Vue專案建立到 Heroku 部署。",
      }
    ];
    
    const designGraphicItem = [
      {
        image: "DailyUIDesktop001.jpg",
        title: "Daily UI 001",
        subTitle: "SIGN UP",
      },
      {
        image: "DailyUIDesktop017.jpg",
        title: "Daily UI 017",
        subTitle: "EMAIL RECEIPT",
      },
      {
        image: "DailyUIDesktop025.jpg",
        title: "Daily UI 025",
        subTitle: "TV APP",
      },
      {
        image: "DailyUIMobile015.jpg",
        title: "Daily UI 015",
        subTitle: "ON/OFF SWITCH",
      },
      {
        image: "DailyUIMobile023.jpg",
        title: "Daily UI 023",
        subTitle: "ONBOARDING",
      },
      {
        image: "DailyUIMobile024.jpg",
        title: "Daily UI 024",
        subTitle: "BOARDING PASS",
      }
    ];

    const skillProgrammingItems = [
      { programmingSkill: "HTML5" },
      { programmingSkill: "JavaScript" },
      { programmingSkill: "CSS" },
      { programmingSkill: "VUE" },
      { programmingSkill: "Bootstrap" },
      { programmingSkill: "Git & Github" },
    ];

    const skillDesignItems = [
      { designSkill: "Photoshop" },
      { designSkill: "Illustrator" },
      { designSkill: "InDesign" },
    ];

    const currentBtn = ref('2');
    const btn2Disable = ref(false);
    const btn1Disable = ref(true);

    const isBtn1 = computed(()=> currentBtn.value === '1');
    const isBtn2 = computed(()=> currentBtn.value === '2');

    const changeBtn = btnName => {
      currentBtn.value = btnName;
      const time = setTimeout(() => {
        btn2Disable.value = isBtn1.value;
        btn1Disable.value = isBtn2.value;
      }, 600);
    }

    return { 
      programmingGraphicItem, 
      designGraphicItem, 
      skillProgrammingItems, 
      skillDesignItems, 
      currentBtn, btn1Disable, btn2Disable, isBtn1, isBtn2, changeBtn,
    };
  }
};
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
</style>