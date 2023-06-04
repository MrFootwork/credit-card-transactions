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
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
    <!-- <div v-for="card in cards" :key="card.id">
      <CardSelectorBankingCard :card="card" />
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}
</style>
