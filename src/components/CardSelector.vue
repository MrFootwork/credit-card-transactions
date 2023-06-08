<script setup lang="ts">
import CardSelectorBankingCard from './CardSelectorBankingCard.vue';
import { useCards } from '../store/cards';
import { storeToRefs } from 'pinia';

const cardsStore = useCards();
const { cards } = storeToRefs(cardsStore);
</script>

<template>
  <ul class="wrapper card selector" id="card-selector">
    <!-- FIXME add loader skeleton -->
    <CardSelectorBankingCard
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </ul>
</template>

<style scoped lang="scss">
.wrapper.card.selector {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}
</style>
