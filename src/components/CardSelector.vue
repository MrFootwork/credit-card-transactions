<script setup lang="ts">
import CardSelectorBankingCard from "./CardSelectorBankingCard.vue";
import { useCards } from "../store/cards";
import { storeToRefs } from "pinia";

const cardsStore = useCards();
const { cards } = storeToRefs(cardsStore);
// const { fetchCards } = cardsStore;
</script>

<template>
  <div>
    <div v-for="card in cards" :key="card.id">
      Card here: {{ card.description }}
      <CardSelectorBankingCard />
    </div>
  </div>
</template>

<style scoped></style>
