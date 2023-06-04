import { defineStore } from "pinia";
import { ref } from "vue";

export const useSelection = defineStore("selection", () => {
  // state
  const cardId = ref("");
  const minimalAmount = ref(0);

  // getters (computed())
  // actions
  function selectCardByID(id: string) {
    cardId.value = id;
  }

  function setMinimalAmount(amount: number) {
    minimalAmount.value = amount;
  }

  return { cardId, minimalAmount, selectCardByID, setMinimalAmount };
});
