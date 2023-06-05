import { createRouter, createWebHistory } from "vue-router";
import CardsTransactions from "../views/CardsTransactions.vue";

const pageTitle = "Transactions";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CardsTransactions,
  },
  {
    path: "/private",
    name: "Private",
    component: CardsTransactions,
  },
  {
    path: "/business",
    name: "Business",
    component: CardsTransactions,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((_to, _from, next) => {
  document.title = `${pageTitle}`;
  next();
});

export default router;
