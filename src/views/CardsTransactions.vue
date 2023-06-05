<script setup lang="ts">
import { onBeforeMount } from "vue";

import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";

import CardSelector from "../components/CardSelector.vue";
import AmountFilter from "../components/AmountFilter.vue";
import TransactionList from "../components/TransactionList.vue";

import { storeToRefs } from "pinia";
import { useSelection } from "../store/selection";

const cardsStore = useCards();
const { fetchCards } = cardsStore;

const transactionsStore = useTransactions();
const { fetchTransactions } = transactionsStore;

const currencyInputOptions = {
  locale: "de-DE",
  currency: "EUR",
  precision: { min: 2, max: 2 },
};

const selectionStore = useSelection();
const { minimalAmount } = storeToRefs(selectionStore);

onBeforeMount(async () => {
  await fetchCards();
  await fetchTransactions();
});
</script>

<template>
  <div class="wrapper app">
    <CardSelector></CardSelector>
    <AmountFilter v-model="minimalAmount" :options="currencyInputOptions" />
    <TransactionList></TransactionList>
  </div>
</template>

<style scoped lang="scss">
.wrapper.app {
  height: 100vh;
  width: min(85vw, 38rem);
  margin: auto;
}
</style>
