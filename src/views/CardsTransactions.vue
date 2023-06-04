<script setup lang="ts">
import { onBeforeMount } from "vue";

import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";

import CardSelector from "../components/CardSelector.vue";

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
  </div>
</template>

<style scoped lang="scss">
.wrapper.app {
  height: 100vh;
  width: min(95vw, 42rem);
  margin: auto;
}
</style>
