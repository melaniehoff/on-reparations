/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

import store from '@/store'

import Meditation from "@/components/Meditation.vue";
import ResponsesView from "@/components/ResponsesView.vue";
import IslandView from "@/components/IslandView.vue";
import ReparationsDisplay from "@/components/ReparationsDisplay.vue";
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import NavHeader from "@/components/NavHeader.vue";
import BlankHeader from "@/components/BlankHeader.vue";


Vue.use(VueRouter);

var siteName = "Reparations Brigade"

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    components: {
      header: BlankHeader,
      view: Home,
    },
  },
  {
    path: "/meditation",
    name: "Meditation",
    components: {
      header: BlankHeader,
      view: Meditation,
    }
  },
  {
    path: "/island-view",
    name: "IslandView",
    components: {
      header: NavHeader,
      view: IslandView,
    },
  },
  {
    path: "/reparations-display",
    name: "ReparationsDisplay",
    components: {
      header: NavHeader,
      view: ReparationsDisplay,
    },
  },

  {
    path: "/responses/:question?",
    name: "ResponsesView",
    components: {
      header: NavHeader,
      view: ResponsesView,
    },
  },
  {
    path: "/about",
    name: "NavHeader",
    components: {
      header: NavHeader,
      view: About ,
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
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

