import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/account",
        name: "account",
        component: () => import("../components/Account.vue"),
      },
      {
        path: "/member",
        name: "member",
        component: () => import("../components/Member.vue"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("../components/News.vue"),
      },
      {
        path: "/comics",
        name: "comics",
        component: () => import("../components/Comics.vue"),
      },
      {
        path: "/comic_info",
        name: "comic_info",
        component: () => import("../components/comics/ComicInfo.vue"),
      },
      {
        path: "/order_status",
        name: "order_status",
        component: () => import("../components/comics/OrderStatus.vue"),
      },
      {
        path: "/comic_return",
        name: "comic_return",
        component: () => import("../components/comics/ComicReturn.vue"),
      },
      {
        path: "/comic_add",
        name: "comic_add",
        component: () => import("../components/comics/ComicAdd.vue"),
      },
      {
        path: "/comic_reserve",
        name: "comic_reserve",
        component: () => import("../components/comics/ComicReserve.vue"),
      },
      {
        path: "/reserve",
        name: "reserve",
        component: () => import("../components/seats/Reserve.vue"),
      },
      {
        path: "/seat_info",
        name: "seat_info",
        component: () => import("../components/seats/SeatInfo.vue"),
      },
      {
        path: "/Modal",
        name: "Modal",
        component: () => import("../components/Modal.vue"),
      },
      {
        path: "/Modal_edit",
        name: "Modal_edit",
        component: () => import("../components/Modal_edit.vue"),
      },
      
    ],
  },

  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
