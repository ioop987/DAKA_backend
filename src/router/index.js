import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
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
        path: "/seats",
        name: "seats",

        component: () => import("../components/Seats.vue"),
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
