<template>
  <!-- 圖片區塊 -->
  <div class="banner">
    <!-- 選單 -->
    <div class="menubar">
      <nav class="navbar navbar-expand-lg">
        <div class="container justify-content-end">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skill">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
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
      <a href="#about" class="rolldownbtn"
        ><i class="fas fa-chevron-down"></i
      ></a>
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
        <div v-if="isShow" class="text personality d-flex flex-column">
          <h4>勇於嘗試 • 挑戰自我</h4>
          <p>
            積極向上、獨立負責且勇於嘗試，<span class="highlight"
              >「Try and do my best」</span
            >是我從小對自己的期望，對於不熟悉的事物都會打破砂鍋問到底，從哪裡失敗就從哪裡站起來。
          </p>
          <p>
            熱心公益、關心周遭瑣碎事物且心思縝密，善於溝通及團隊合作，喜歡從合作的過程中彼此交流對於事情不同的想法，並可在扮演不同角色中學習應對事情的不同角度。
          </p>
          <div class="tag" @click="ContentToggle">
            <span class="badge rounded-pill">
              踏入前端世界的女孩做了什麼準備
              <i class="far fa-hand-point-right"></i>
            </span>
          </div>
        </div>
        <div v-else class="text study d-flex flex-column">
            <h4>精進成長 • 學習不中斷</h4>
            <p>下定決心從平面設計轉職成前端設計時，我就開始尋找相關實體/線上課程進修：學習基礎的網頁語法 - HTML、CSS、jQuery，實作切版畫面(含RWD)搭配網頁動畫以及靈活運用線上開源套件。
            </p>
            <p>除了課堂上的學習，我也會搭配線上教學影片自行練習，讓學習更有效率。目前也仍持續在學習前端框架 Vue 和 CSS切版等相關知識。</p>
            <div class="tag" @click="ContentToggle">
              <span class="badge rounded-pill">
                  <i class="far fa-hand-point-left"></i>
                  認識這個女孩
              </span>
            </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 技能 -->
  <div class="skills" id="skill">
    <div class="container">
      <div class="content col-10 mx-auto">
        <div class="row py-5">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body programming-skill text">
                <h4>PROGRAMMING</h4>
                <ul class="d-flex flex-wrap">
                  <li class="skill-list">HTML5</li>
                  <li class="skill-list">JavaScript</li>
                  <li class="skill-list">CSS</li>
                  <li class="skill-list">Vue</li>
                  <li class="skill-list">Bootstrap</li>
                  <li class="skill-list">Git & Github</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body design-skill text">
                <h4>DESIGN</h4>
                <ul class="d-flex flex-column align-items-center">
                  <li class="skill-list">Photoshop</li>
                  <li class="skill-list">Illustrator</li>
                  <li class="skill-list">InDesign</li>
                </ul>
              </div>
            </div>
          </div>
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
            <div class="text">
              <span class="badge rounded-pill">
                <i class="fas fa-briefcase"></i>
                2016 July. - Aug.
              </span>
              <h4>新加坡商鈦坦科技 Titansoft Pte Ltd.</h4>
              <p>
                針對人資、面試官以及面試者開發的內部管理系統，可以進行線上測驗、填寫各式表單以及確認面試者的狀態。
              </p>
              <p>
                <span class="highlight"
                  >在專案上主要負責繪製流程圖以及前端介面設計。</span
                >
              </p>
              <p>
                專案開發的流程為敏捷式開發，透過Scrum來進行團隊之間的分工與討論。<span
                  class="highlight"
                  >在團隊中扮演的角色為「溝通者」</span
                >，在固定的時間討論當日要完成的目標，遇到困難時會互相協助、提供方法解決，並在空閒時間拿出來討論、交流，讓每一個人可以學習，了解自己著手以外的部分。
              </p>
            </div>
          </li>
          <li>
            <div class="text">
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
        <div class="row">
          <Graphic v-for="programmingGraphic in programmingGraphicItem" 
          :content="programmingGraphic"
          :key="programmingGraphic.imgUrl"></Graphic>
          <!-- <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/VuePracticeBootstrap.png" />
            <div class="text">
              <h3>VUE PRACTICE</h3>
              <h3>Bootstrap Theme</h3>
            </div>
          </div>
          <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/VuePractice5xRuby.png" />
            <div class="text">
              <h3>VUE PRACTICE</h3>
              <h3>五倍紅寶石官網</h3>
            </div>
          </div>
          <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/VuePracticeResume.png" />
            <div class="text">
              <h3>VUE PRACTICE</h3>
              <h3>Resume</h3>
            </div>
          </div> -->
        </div>
      </div>
      <div class="portfolio-design">
        <div class="text">
          <h4>- 嘗試繪製前端介面，享受設計的快樂 -</h4>
        </div>
        <div class="row">
          <Graphic v-for="designGraphic in designGraphicItem" 
          :content="designGraphic"
          :key="designGraphic.imgUrl"></Graphic>
          <!-- <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/DailyUIDesktop001.jpg" />
            <div class="text">
              <h3>Daily UI 001</h3>
              <h3>SIGN UP</h3>
            </div>
          </div>
          <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/DailyUIDesktop017.jpg" />
            <div class="text">
              <h3>Daily UI 017</h3>
              <h3>EMAIL RECEIPT</h3>
            </div>
          </div>
          <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/DailyUIDesktop025.jpg" />
            <div class="text">
              <h3>Daily UI 025</h3>
              <h3>TV APP</h3>
            </div>
          </div>
          <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/DailyUIMobile015.jpg" />
            <div class="text">
              <h3>Daily UI 015</h3>
              <h3>ON/OFF SWITCH</h3>
            </div>
          </div>
          <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/DailyUIMobile023.jpg" />
            <div class="text">
              <h3>Daily UI 023</h3>
              <h3>ONBOARDING</h3>
            </div>
          </div>
          <div class="portfolio-item col-lg-4">
            <img src="../assets/pic/DailyUIMobile024.jpg" />
            <div class="text">
              <h3>Daily UI 024</h3>
              <h3>BOARDING PASS</h3>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- 頁尾區塊 -->
  <div class="container-fluid footer">
    &copy; copyright 2021 by Wendy
    <div class="portfolioLink">
      <a href="#"><i class="fab fa-github-alt"></i></a>
      <a href="#"><i class="fab fa-codepen"></i></a>
      <a href="#"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Graphic from '../components/Graphic.vue';
import { ref } from '@vue/reactivity';

export default {
  components: { Graphic },
  setup(){
    const programmingGraphicItem = [
      {
        imgUrl: "VuePracticeBootstrap.png",
        title: "VUE PRACTICE",
        subTitle: "Bootstrap Theme",
      },
      {
        imgUrl: "VuePractice5xRuby.png",
        title: "VUE PRACTICE",
        subTitle: "五倍紅寶石官網",
      },
      {
        imgUrl: "VuePracticeResume.png",
        title: "VUE PRACTICE",
        subTitle: "Resume",
      }
    ];
    
    const designGraphicItem = [
      {
        imgUrl: "DailyUIDesktop001.jpg",
        title: "Daily UI 001",
        subTitle: "SIGN UP",
      },
      {
        imgUrl: "DailyUIDesktop017.jpg",
        title: "Daily UI 017",
        subTitle: "EMAIL RECEIPT",
      },
      {
        imgUrl: "DailyUIDesktop025.jpg",
        title: "Daily UI 025",
        subTitle: "TV APP",
      },
      {
        imgUrl: "DailyUIMobile015.jpg",
        title: "Daily UI 015",
        subTitle: "ON/OFF SWITCH",
      },
      {
        imgUrl: "DailyUIMobile023.jpg",
        title: "Daily UI 023",
        subTitle: "ONBOARDING",
      },
      {
        imgUrl: "DailyUIMobile024.jpg",
        title: "Daily UI 024",
        subTitle: "BOARDING PASS",
      }
    ];


    const isShow = ref(true);
    const ContentToggle = ()=>{
      isShow.value = !isShow.value
    }

    return { programmingGraphicItem, designGraphicItem, isShow, ContentToggle };
  }
};
</script>
