import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import TestComponent from "../components/TestComponent.vue";
import CardsTransactions from "../views/CardsTransactions.vue";

const routes = [
  {
    path: "/",
    component: CardsTransactions,
  },
  {
    path: "/hello",
    component: HelloWorld,
  },
  {
    path: "/test",
    component: TestComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
