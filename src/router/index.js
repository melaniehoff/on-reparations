/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";

import store from '@/store'

import Meditation from "@/components/Meditation.vue";
import QuestionView from "@/components/QuestionView.vue";
import IslandView from "@/components/IslandView.vue";
import ReparationsDisplay from "@/components/ReparationsDisplay.vue";
import About from "@/components/About.vue";
import TitleHeader from "@/components/TitleHeader.vue";

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
      header: TitleHeader,
      view: Meditation,
    }
  },
  {
    path: "/reparations-display",
    name: "ReparationsDisplay",
    components: {
      header: TitleHeader,
      view: ReparationsDisplay,
    },
  },
  {
    path: "/island-view",
    name: "IslandView",
    components: {
      header: TitleHeader,
      view: IslandView,
    },
  },
  {
    path: "/question-view/:question?",
    name: "QuestionView",
    components: {
      header: TitleHeader,
      view: QuestionView,
    },
  },
  {
    path: "/about",
    name: "TitleHeader",
    components: {
      header: TitleHeader,
      view: About ,
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

