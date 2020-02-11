import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../views/MainLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
