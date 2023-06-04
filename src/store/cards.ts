import { defineStore } from "pinia";
import { ref } from "vue";

import { cards as rawData } from "../../data/cards";
import type Card from "../model/card.d.ts";

export const useCards = defineStore("cards", () => {
  // state
  const cards = ref<Card[]>();
  // getters (computed())
  // actions
  async function fetchCards() {
    setTimeout(() => {
      cards.value = rawData;
    }, 600);
  }

  return { cards, fetchCards };
});
