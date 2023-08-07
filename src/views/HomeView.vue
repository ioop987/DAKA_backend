
<template>
  <!-- <Login v-if="!$store.state.isLogging"></Login> -->

  <div class="main_container d-flex">
    <aside class=" d-flex flex-column align-items-center">
      <img src="@/assets/images/logo.svg" alt="daka_logo" class="main_container_logo" @click="this.$router.push('/')">
      <div class="accordion accordion-flush w-100 mt-5 main_nav" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed main_nav_btn fs-4" @click="this.$router.push('/account')">
              <img src="@/assets/images/account.svg" alt="daka_logo" class="main_sub_one_img" to="/member.vue">
              帳號管理</button>
          </h2>

        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed main_nav_btn fs-4" @click="this.$router.push('/member')">
              <img src="@/assets/images/customer.svg" alt="daka_logo" class="main_sub_one_img" to="/member.vue">
              會員管理
            </button>
          </h2>

        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed main_nav_btn fs-4" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"
              >
              <img src="@/assets/images/calendar.svg" alt="daka_logo" class="main_sub_two_img">
              座位管理
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionFlushExample" style="
    background-color: #263238 ">
            <div class="accordion-body nav_btn_inside fs-5" @click="this.$router.push('/seat_now')"><a>即時座位狀態</a></div>
            <div class="accordion-body nav_btn_inside fs-5" @click="this.$router.push('/reserve')"><a>預約座位</a></div>
            <div class="accordion-body nav_btn_inside fs-5" @click="this.$router.push('/seat_info')"><a>資料查詢</a></div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed main_nav_btn fs-4" @click="this.$router.push('/news')">
              <img src="@/assets/images/bx_news.svg" alt="daka_logo" class="main_sub_three_img">
              最新消息管理
            </button>
          </h2>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed main_nav_btn fs-4" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              <img src="@/assets/images/comics.svg" alt="daka_logo" class="main_sub_four_img">
              漫畫租借管理
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse " data-bs-parent="#accordionFlushExample" style="
    background-color: #263238 ">
            <div class="accordion-body fs-5 nav_btn_inside" @click="this.$router.push('/comic_reserve')"><a>預約取書</a></div>
            <div class="accordion-body fs-5 nav_btn_inside" @click="this.$router.push('/comic_return')"><a>歸還書籍</a></div>
            <div class="accordion-body fs-5 nav_btn_inside" @click="this.$router.push('/order_status')"><a>訂單查詢</a> </div>
            <div class="accordion-body fs-5 nav_btn_inside" @click="this.$router.push('/comic_info')"><a>書籍資料</a></div>
            <div class="accordion-body fs-5 nav_btn_inside" @click="this.$router.push('/comic_add')"><a>新書上架</a></div>
          </div>
        </div>
      </div>
      <div class="main_aside_bottom">
        <img src="@/assets/images/user.svg" alt="daka_user" class="bottom_img">
        <span>林育緯</span>
      </div>
    </aside>
    <main>
      <header>
        <h2>
          {{ title }}
        </h2>
        <Button class="main_checkout" @click.prevent="signOut">Sign Out</Button>

      </header>
      <router-view></router-view>
      <footer>版權所有 © 2023 打咖 DAKA</footer>
    </main>
  </div>
</template>
<style scoped lang="scss">
.main_container {
  width: 100%;
  height: 100vh;


  .main_nav {
    color: #fff;
    padding-left: 20px;

    .main_nav_btn {
      background-color: #263238;
      color: #fff;
      font-size: 1.2rem;
    }
  }
}

.main_sub_one_img,
.main_sub_two_img,
.main_sub_three_img,
.main_sub_four_img {
  margin-right: 10px;
}


.main_container aside {
  width: 20%;
  margin: 0 auto;
  background-color: #263238;

}

.main_container aside .main_menu {
  color: #fff;
  font-size: 1.3rem;

}


.main_container aside .main_submenu {
  color: #fff;
  font-size: 1.1rem;
}





.main_container aside .main_container_logo {
  width: 100%;
  height: 46px;
  margin-top: 100px;
  cursor: pointer;
}



.main_container aside .main_aside_bottom {
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-right: 130px;
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 400;
}

.main_container aside .main_aside_bottom .bottom_img {
  width: 44px;
  height: 44px;
  margin-right: 5px;
}

.main_container main {
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(248, 248, 248, 1);

}

.main_container main header {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}

.main_container main header h2 {
  font-size: 2.5rem;
  padding: 20px 40px;
}

.main_container main header .main_checkout {
  background-color: rgba(38, 50, 56, 1);
  color: rgba(255, 255, 255, 1);
  margin-right: 30px;

}

.nav_btn_inside {
  color: #fff;
  padding-left: 60px;
  cursor: pointer;
}

.main_container footer {
  width: 100%;
  background-color: #fff;
  text-align: center;
  font-weight: 400;
  padding: 20px 0;
}
</style>

<script>
import Member from '@/components/Member.vue'
import Comics from '@/components/Comics.vue'
import Reserve from '@/components/seats/Reserve.vue'
import SeatInfo from '@/components/seats/SeatInfo.vue'
import SeatNow from '@/components/seats/SeatNow.vue'
import Order from '@/components/comics/OrderStatus.vue'
import ComicInfo from '@/components/comics/ComicInfo.vue'
import ComicReserve from '@/components/comics/ComicReserve.vue'
import ComicReturn from '@/components/comics/ComicReturn.vue'
import ComicAdd from '@/components/comics/ComicAdd.vue'
import News from '@/components/News.vue'
import Login from '@/components/Login.vue'



export default {
  components: {
    Member, Login, News, Reserve, SeatInfo, SeatNow, Comics,Order,ComicInfo,ComicReserve,ComicReturn,ComicAdd
  },
  data() {
    return {
      current: '首頁',
      nav: [
        {
          name: '首頁',
          path: '/',

        },
        {
          name: '帳號管理',
          path: '/account',

        },
        {
          name: '會員管理',
          path: '/member',

        },
        {
          name: '即時座位狀態',
          path: '/seat_now',

        },
        {
          name: '預約座位',
          path: '/reserve',

        },
        {
          name: '資料查詢',
          path: '/seat_info',

        },
        {
          name: '最新消息管理',
          path: '/news',

        },
        {
          name: '漫畫租借管理',
          path: '/comics',

        },
        {
          name: '訂單查詢',
          path: '/order_status',
        },
        {
          name: '書籍資料',
          path: '/comic_info',
        },
        {
          name: '預約取書',
          path: '/comic_reserve',
        },
        {
          name: '歸還書籍',
          path: '/comic_return',
        },
        {
          name: '新書上架',
          path: '/comic_add',
        },
      ]


    }
  },
  computed: {
    title() {

      for (let i = 0; i < this.nav.length; i++) {
        if (this.nav[i].path == this.$route.path) {

          this.current = this.nav[i].name;
        } else {
          this.current;
        }
      }
      return this.current;
    },
    methods: {
      signOut() {
        this.$store.state.isLogging = false;
      }
    }
  }
}
</script>
