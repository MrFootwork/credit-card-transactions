<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";

import CardSelector from "../components/CardSelector.vue";
import AmountFilter from "../components/AmountFilter.vue";
import TransactionList from "../components/TransactionList.vue";

const cardsStore = useCards();
const { fetchCards } = cardsStore;

const transactionsStore = useTransactions();
const { fetchTransactions } = transactionsStore;

const currencyInputOptions = {
  locale: "de-DE",
  currency: "EUR",
  precision: { min: 2 },
};

const modelValue = ref(0);

onBeforeMount(async () => {
  await fetchCards();
  await fetchTransactions();
});
</script>

<template>
  <div class="wrapper app">
    <CardSelector></CardSelector>
    <AmountFilter v-model="modelValue" :options="currencyInputOptions" />
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
