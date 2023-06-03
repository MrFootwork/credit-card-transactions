import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Test from "../components/TestComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },
    {
      path: "/test",
      component: Test,
    },
  ],
});

export default router;
