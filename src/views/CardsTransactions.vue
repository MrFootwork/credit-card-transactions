<script setup lang="ts">
import { onBeforeMount } from "vue";

import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";

import CardSelector from "../components/CardSelector.vue";
import AmountFilter from "../components/AmountFilter.vue";
import TransactionList from "../components/TransactionList.vue";

const cardsStore = useCards();
const { fetchCards } = cardsStore;

const transactionsStore = useTransactions();
const { fetchTransactions } = transactionsStore;

onBeforeMount(async () => {
  await fetchCards();
  await fetchTransactions();
});
</script>

<template>
  <div class="wrapper app">
    <!-- FIXME add all needed components -->
    <CardSelector></CardSelector>
    <AmountFilter></AmountFilter>
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
