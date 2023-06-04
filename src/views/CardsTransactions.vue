<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";

import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";
import { useSelection } from "../store/selection";

import CardSelector from "../components/CardSelector.vue";

const cardsStore = useCards();
const { cards } = storeToRefs(cardsStore);
const { fetchCards } = cardsStore;

const transactionsStore = useTransactions();
const { transactions } = storeToRefs(transactionsStore);
const { fetchTransactions } = transactionsStore;

const selectionStore = useSelection();
const { cardId } = storeToRefs(selectionStore);
const { selectCardByID } = selectionStore;

onBeforeMount(async () => {
  await fetchCards();
  await fetchTransactions();
});
</script>

<template>
  <div>
    <!-- FIXME add all needed components -->
    <CardSelector></CardSelector>

    <p>selected card: {{ cardId }}</p>
    <button @click="selectCardByID('lkmfkl-mlfkm-dlkfm')">Select Card</button>
    <pre>{{ cards }}</pre>
    <button @click="fetchCards">Fetch Cards</button>
    <pre>{{ transactions }}</pre>
    <button @click="fetchTransactions">Fetch Transactions</button>
  </div>
</template>

<style scoped></style>
