import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useCards } from "./cards";

export const useSelection = defineStore("selection", () => {
  // state
  const cardId = ref("");
  const minimalAmount = ref(0);
  // card store
  const { cards } = storeToRefs(useCards());

  // getters (computed())
  const cardType = computed(() => {
    const currentCard = cards.value.find((card) => card.id === cardId.value);
    return currentCard?.description.split(" ")[0].toLowerCase() as
      | "private"
      | "business";
  });

  // actions
  function selectCardByID(id: string) {
    if (cardId.value !== id) {
      minimalAmount.value = 0;
      cardId.value = id;
    }
  }

  function setMinimalAmount(amount: number) {
    minimalAmount.value = amount;
  }

  return { cardId, cardType, minimalAmount, selectCardByID, setMinimalAmount };
});
