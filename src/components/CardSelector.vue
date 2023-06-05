<script setup lang="ts">
import CardSelectorBankingCard from "./CardSelectorBankingCard.vue";
import { useCards } from "../store/cards";
import { storeToRefs } from "pinia";

const cardsStore = useCards();
const { cards } = storeToRefs(cardsStore);
</script>

<template>
  <div class="wrapper">
    <CardSelectorBankingCard
      v-for="(card, i) in cards"
      :key="card.id"
      :card="card"
      :tabindex="i + 1"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}
</style>
