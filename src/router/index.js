import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profile/index.vue"),
    children: [
      {
        path: "post",
        name: "Profile Post",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/post.vue"),
      },
      {
        path: "igtv",
        name: "Profile IGTV",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/igtv.vue"),
      },
      {
        path: "save",
        name: "Profile Saved",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/save.vue"),
      },
      {
        path: "tag",
        name: "Tag",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/profile/tag.vue"),
      },
    ],
  },
  {
    path: "/direct",
    name: "Direct",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/direct/index.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/explore/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
