import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import LoginLayout from "../layouts/LoginLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
      }
    ]
  },
  {
    path: "/login",
    name: "LoginLayout",
    component: LoginLayout
    // children: [
    //   {
    //     path: "/dashboard",
    //     name: "Dashboard",
    //     component: Dashboard
    //   },
    // ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
