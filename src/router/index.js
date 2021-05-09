import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

import Skills from "../views/Skills.vue";
import Treasury from "../views/Treasury.vue";

import Temple from "../views/Temple.vue";

import Adventure from "../views/Adventure.vue";
import Regions from "../views/Regions.vue";
import Quests from "../views/Quests.vue";
import Honors from "../views/Honors.vue";

import Support from "../views/Support.vue";
import MyData from "../views/MyData.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/treasury",
    name: "Treasury",
    component: Treasury
  },
  {
    path: "/temple",
    name: "Temple",
    component: Temple
  },
  {
    path: "/adventure",
    name: "Adventure",
    component: Adventure
  },
  {
    path: "/regions",
    name: "Regions",
    component: Regions
  },
  {
    path: "/quests",
    name: "Quests",
    component: Quests
  },
  {
    path: "/quests",
    name: "Quests",
    component: Quests
  },
  {
    path: "/honors",
    name: "Honors",
    component: Honors
  },
  {
    path: "/support",
    name: "Support",
    component: Support
  },
  {
    path: "/my-data",
    name: "MyData",
    component: MyData
  }
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "active fw-bold",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
