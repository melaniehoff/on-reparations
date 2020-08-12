/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

import store from '@/store'

import Meditation from "@/components/Meditation.vue";
import About from "@/components/About.vue";

Vue.use(VueRouter);

var siteName = "Reparations Brigade"

const routes = [
  {
    path: "/",
    redirect: "/meditation",
  },
  {
    path: "/meditation",
    name: "Meditation",
    components: {
      view: Meditation,
    }
  },
  {
    path: "/about",
    name: "About",
    components: {
      view: About
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

// adds title to document
/*router.beforeEach((to, from, next) => {
  let title = "";
  try {
    title += store.state.waypoints[to.params.wpid].fields.Name + " - " ;
  } catch { 
  }
  title += siteName;
  document.title = title;
  next();
}); */

export default router;

