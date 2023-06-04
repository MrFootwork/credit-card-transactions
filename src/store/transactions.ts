import { defineStore } from "pinia";
import { ref } from "vue";

export const useTransactions = defineStore("transactions", () => {
  // state
  const counter = ref(0);
  // getters (computed())
  // actions
  function increaseCounter() {
    counter.value++;
  }

  return { counter, increaseCounter };
});
