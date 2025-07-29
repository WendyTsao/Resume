<template>
  <!-- 圖片區塊 -->
  <div class="banner">
    <!-- 選單 -->
    <Navbar></Navbar>
    <div class="container" id="top">
      <div class="banner-text">
        <h1>YU HSUAN TSAO</h1>
        <p>Product Management｜Process Optimization｜Front-End Background</p>
        <a href="#about" class="rolldownbtn">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- 關於我 -->
  <div class="area-space about" id="about">
    <div class="container">
      <div class="title">
        <h2>ABOUT ME</h2>
      </div>
      <div class="content d-md-flex col-10 mx-auto">
        <div class="avatar">
          <img src="../assets/pic/wendy.png" />
        </div>
        <div class="text">
          <transition name="fade" mode="out-in">
            <div v-if="currentBtn === '2'" class="block">
              <h4>勇於嘗試 • 挑戰自我</h4>
              <p>
                積極負責、勇於嘗試是我對工作的基本態度。
                <span class="highlight">「Try and do my best」</span>
                對於不熟悉的領域，願意主動研究、提出問題並從錯誤中調整。
              </p>
              <p>
                善於溝通及團隊合作，喜歡與不同角色交流觀點，擅長在團隊中協調資源、釐清分歧，找到推進任務的平衡點。
              </p>
              <ToggleButton :title="'轉職前端的養成計畫'"  @click="changeBtn('3')">
                <template #icon-right>
                    <i class="far fa-hand-point-right"></i>
                </template>
              </ToggleButton>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="currentBtn === '3'" class="block">
                <h4>自主學習 • 精進成長 </h4>
                <p>
                  下定決心從平面設計轉職至前端開發時，我就開始透過實體與線上課程學習 HTML、CSS、jQuery 等語法與切版技術，搭配開源套件完成互動頁面與 RWD 設計，也透過實作專案逐步接觸開發流程、版本控管與 UI 邏輯。
                </p>
                <p>
                  這段跨領域的經歷不僅打下了技術基礎，也讓我熟悉與開發與設計之間的語言與合作方式，成為我後來轉職產品經理的養分。
                </p>
              <ToggleButton :title="'現在，我是一位產品經理'"  @click="changeBtn('1')">
                <template #icon-right>
                    <i class="far fa-hand-point-right"></i>
                </template>
              </ToggleButton>
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="currentBtn === '1'" class="block">
                <h4> PM 視角 • 流程與決策</h4>
                <p>
                  轉職為PM後，開始更深入理解「一個產品如何從構想到落地」的每個環節。從競品分析、市場調查到用戶需求釐清，獨立擬定產品定位與核心目標，規劃功能模組與使用流程設計，並擔任協調團隊的角色、拆解任務與追蹤進度。
                </p>
                <p>希望持續精進產品管理技能，從使用者需求、產品規劃到跨部門協作，優化自己在實務流程中的理解與判斷力。</p>
              <ToggleButton :title="'成為PM前，我是這樣的人'"  @click="changeBtn('2')">
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
      <div class="content mx-auto">
        <div class="row py-5 g-4 align-items-stretch">
          <CardList data-aos="zoom-in" data-aos-delay="200" :title="'產品規劃 × 團隊協作'">
              <ul>
                <li v-for="item in skillManagementItems" class="py-1" :key="item.managementSkill">
                  {{ item.managementSkill }}
                </li>
              </ul>
          </CardList>
          <CardList data-aos="zoom-in" data-aos-delay="300" :title="'前端技術 × 版本控管'">
              <ul>
                <li v-for="item in skillProgrammingItems" class="py-1" :key="item.programmingSkill">
                  {{ item.programmingSkill }}
                </li>
              </ul>
          </CardList>
          <CardList data-aos="zoom-in" data-aos-delay="400" :title="'流程效率 × 溝通工具'">
              <ul>
                <li v-for="item in skillOthersItems" class="py-1" :key="item.designSkill">
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
      <div class="row g-4">
        <div class="col-md-6 mx-auto">
          <div class="timeline text">
            <span class="badge rounded-pill mb-4">
              <i class="fas fa-briefcase"></i>
              2024 Oct. - 
            </span>
            <h4>創意點子數位股份有限公司 Bravo Ideas | 產品經理</h4>
            <p><span class="highlight">【 產品設計與規劃 】</span></p>
            <ul>
              <li>• 主導0→1直播電商平台開發，從競品分析、市場調查到需求釐清，擬定產品定位與核心目標</li>
              <li>• 根據直播銷售情境設計操作流程，針對後台操作系統（商品管理、訂單處理、帳務追蹤）進行規劃，同時優化消費者購物流程與商家操作體驗</li>
              <li>• 規劃功能模組與使用流程設計，繪製Functional Map、Wireframe、Flow Chart、UI Flow，建立產品架構與操作邏輯</li>
              <li>• 撰寫完整產品規格文件，明確定義功能需求與流程細節，協助開發團隊有效落實執行</li>
              <li>• 與RD及UI團隊協作，推動產品從規劃到上線，確保系統功能滿足跨部門營運需求</li>
            </ul>
            <p><span class="highlight">【 專案管理 】</span></p>
            <ul>
              <li>• 同時管理多項專案與功能優化，靈活調整優先順序與資源配置，確保團隊穩定交付</li>
              <li>• 建立專案進度追蹤與驗收流程，即時排查問題並降低溝通落差，維持交付品質</li>
              <li>• 定期檢視各項任務進度，釐清需求並進行功能複驗，確保專案如期完成</li>
            </ul>
            <p><span class="highlight">【 跨部門溝通與流程優化 】</span></p>
            <ul>
              <li>• 整合業務、客服、會計等部門需求，釐清痛點並轉化為系統功能，降低人工操作、提升效率與數據準確性</li>
              <li>• 規劃並優化跨部門工作流程，從需求收斂到合作開發，提升協作效率</li>
              <li>• 建立透明化的任務管理流程與工具，提升專案可追蹤性與跨部門溝通成效</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 mx-auto">
          <div class="timeline text">
            <span class="badge rounded-pill mb-4">
              <i class="fas fa-briefcase"></i>
              2021 July. - 2024 Oct.
            </span>
            <h4>格拉墨科技有限公司 Gram | 軟體開發工程師</h4>
            <p><span class="highlight">【 前端開發 】</span></p>
            <ul>
              <li>• 協作開發兌換商城前台功能</li>
              <li>• 串接三方遊戲、整合多平台網站</li>
              <li>• 實現UI設計的活動頁面</li>
              <li>• 協作規範開發及上版流程，確保產品順利上線</li>
            </ul>
            <p><span class="highlight">【 專案管理 】</span></p>
            <ul>
              <li>• 控管前端專案進度，分派工作項目</li>
              <li>• 制定Redmine規範，讓團隊與其他部門更快釐清開發範圍及進度</li>
              <li>• 協助PM與前端溝通，預估開發時程與人力分配</li>
              <li>• 參與跨部門會議進行需求釐清及討論</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 mx-auto">
          <div class="timeline text">
            <span class="badge rounded-pill mb-4">
              <i class="fas fa-briefcase"></i>
              2017 July. - 2021 Mar.
            </span>
            <h4>禮文股份有限公司 Mitek | 網管工程師</h4>
            ❖ 主要工作內容
            <ul>
              <li>• 產品推廣設計 (如：海報、型錄、文宣、網頁設計、基本影片編輯...)</li>
              <li>• 年度參展規劃 (如：攤位設計、佈展規劃、承包商接洽...)</li>
              <li>• 處理行政相關作業（如：招標採購、合約製作、公文收發..）</li>
              <li>• 產品業務推廣，國外廠商溝通協商，市場調查開發潛在客戶</li>
            </ul>
            ❖ 重要專案<br/>
            <p>
              <span class="highlight">【 公司形象網站改版 】成果</span>：新增後台管理系統及RWD設計，提供更好的使用者體驗
            </p>
            <ul>
              <li>• 獨立負責規劃網站架構</li>
              <li>• 控制成本預算，尋找評估適合的承接廠商</li>
              <li>• 與主管和廠商溝通功能需求與介面設計</li>
              <li>• 掌控完成時間及進度，確保網站完成度</li>
              <li>• 進行內部後台管理系統使用教學</li>
              <li>• 撰寫系統管理使用文件，降低操作問題發生</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 mx-auto">
          <div class="timeline text">
            <span class="badge rounded-pill">
                <i class="fas fa-briefcase"></i>
                2016 July. - Aug.
              </span>
              <h4>新加坡商鈦坦科技 Titansoft</h4>
              <p>
                針對人資、面試官以及面試者開發的內部管理系統，可以進行線上測驗、填寫各式表單以及確認面試者的狀態。
              </p>
              <ul>
                <li>• 提供面試者參與個人線上測驗</li>
                <li>• 可以填寫相關人格特質測試</li>
                <li>• 提供HR確認面試者測驗進度及參與回覆狀態</li>
              </ul>
              <p>
                <span class="highlight">在專案上主要負責繪製流程圖以及前端介面設計。</span>
              </p>
              <p>
                專案開發的流程為敏捷式開發，透過Scrum來進行團隊之間的分工與討論。<span class="highlight">在團隊中扮演「協調者」的角色</span>，能夠快速釐清需求與問題，聆聽團隊的意見並總結方向，遇到困難時會互相協助、提供方法解決，並在空閒時間拿出來討論、交流，讓每一個人可以學習，了解自己著手以外的部分。
              </p>
          </div>
        </div>
      </div>   
    </div>
  </div>

  <!-- 作品集 -->
  <div class="area-space portfolio" id="portfolio">
    <div class="container">
      <div class="title">
        <h2>PORTFOLIO</h2>
      </div>
      <!-- <div class="portfolio-management">
        <div class="text">
          <h4>- 產品規劃實踐｜建立需求分析與流程設計能力 -</h4>
        </div>
        <div class="row g-0">
          <Graphic v-for="pmGraphic in pmGraphicItem" 
          :content="pmGraphic"
          :key="pmGraphic.imgUrl">
          </Graphic>
        </div>
      </div> -->
      <div class="portfolio-programming">
        <div class="text">
          <h4>- 介面基礎實作｜建立前端語言與產品邏輯的連結 -</h4>
        </div>
        <div class="row g-0">
          <Graphic v-for="programmingGraphic in programmingGraphicItem" 
          :content="programmingGraphic"
          :key="programmingGraphic.imgUrl">
            <template #link>
              <a 
                :href="programmingGraphic.link" 
                :target="/^http(s?):*?/.test(programmingGraphic.link) ? '_blank' : ''" 
                class="btn">
                Check Out
              </a>
            </template>
          </Graphic>
        </div>
      </div>
      <div class="portfolio-design">
        <div class="text">
          <h4>- 使用者介面設計練習｜強化邏輯與視覺整合能力 -</h4>
        </div>
        <div class="row">
          <Graphic v-for="designGraphic in designGraphicItem" 
          :content="designGraphic"
          :key="designGraphic.imgUrl"></Graphic>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import CardList from '../components/CardList.vue';
import Graphic from '../components/Graphic.vue';
import ToggleButton from '../components/ToggleButton.vue';

import { ref } from 'vue';

export default {
  components: { Navbar, Graphic, CardList, ToggleButton },
  setup(){
    const pmGraphicItem = [
      {
        title: "Functional Map (X-Mind | Notion | Miro)",
        text: "梳理功能架構，協助團隊建立清楚的專案全貌與共識",
      },
      {
        title: "Wireframe & Flow Chart (Figma | FigJam)",
        text: "繪製頁面排版與架構，方便與UI、RD討論與確認方向",
      },
      {
        title: "Schedule Control (Redmine | Trello)",
        text: "追蹤進度與任務分配，確保需求落實並讓專案穩定推進",
      }
    ];

    const programmingGraphicItem = [
      {
        link: "#top",
        image: "VuePracticeResume.png",
        title: "About Wendy | Resume",
        text: "HTML | CSS | Bootstrap5 | Github | Vue3",
      },
      {
        link: "https://github.com/WendyTsao/vue-bootstrap-theme",
        image: "VuePracticeBootstrap.png",
        title: "Bootstrap Theme | Practice",
        text: "HTML | CSS | Bootstrap5 | Github | Vue3",
      },
      {
        link: "https://github.com/WendyTsao/vue-5xruby-website",
        image: "VuePractice5xRuby.png",
        title: "5xruby Website | Practice",
        text: "HTML | CSS | Bootstrap4 | Github | Vue2",
      }
    ];
    
    const designGraphicItem = [
      {
        image: "DailyUIDesktop001.jpg",
        title: "Daily UI 001-SIGN UP"
      },
      {
        image: "DailyUIDesktop017.jpg",
        title: "Daily UI 017-EMAIL RECEIPT"
      },
      {
        image: "DailyUIDesktop025.jpg",
        title: "Daily UI 025-TV APP"
      },
      {
        image: "DailyUIMobile015.jpg",
        title: "Daily UI 015-ON/OFF SWITCH"
      },
      {
        image: "DailyUIMobile023.jpg",
        title: "Daily UI 023-ONBOARDING"
      },
      {
        image: "DailyUIMobile024.jpg",
        title: "Daily UI 024-BOARDING PASS"
      }
    ];

    const skillManagementItems = [
      { managementSkill: "Notion | Appflowy" },
      { managementSkill: "Redmine | Trello" },
      { managementSkill: "Xmind" },
      { managementSkill: "Figma | FigJam" },
      { managementSkill: "HackMD" }
    ];

    const skillProgrammingItems = [
      { programmingSkill: "Vue | React" },
      { programmingSkill: "Bootstrap | Vant | Element UI" },
      { programmingSkill: "Git | Github" },
      { programmingSkill: "Render Dashboard" },
      { programmingSkill: "Responsive Web Design" }
    ];

    const skillOthersItems = [
      { designSkill: "Photoshop" },
      { designSkill: "Illustrator" },
      { designSkill: "InDesign" },
      { designSkill: "Adobe XD" },
      { designSkill: "PowerPoint | Word | Excel" }
    ];

    const currentBtn = ref('2');

    const changeBtn = btnName => {
      currentBtn.value = btnName;
    };

    return { 
      pmGraphicItem,
      programmingGraphicItem, 
      designGraphicItem, 
      skillManagementItems,
      skillProgrammingItems, 
      skillOthersItems,
      currentBtn,
      changeBtn,
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