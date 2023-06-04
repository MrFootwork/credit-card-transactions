import { createRouter, createWebHistory } from "vue-router";
import CardsTransactions from "../views/CardsTransactions.vue";

const routes = [
  {
    path: "/",
    component: CardsTransactions,
  },
  {
    path: "/private",
    component: CardsTransactions,
  },
  {
    path: "/business",
    component: CardsTransactions,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
