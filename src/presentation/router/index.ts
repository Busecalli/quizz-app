import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/quiz-app",
    component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "/quiz-app",
        name: "quizApp",
        component: () => import("../views/QuizzApp.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
