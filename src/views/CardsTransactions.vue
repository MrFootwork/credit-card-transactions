<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";
import { useSelection } from "../store/selection";

const cardsStore = useCards();
const { cards } = storeToRefs(cardsStore);
const { fetchCards } = cardsStore;

const transactionsStore = useTransactions();
const { transactions } = storeToRefs(transactionsStore);
const { fetchTransactions } = transactionsStore;

const selectionStore = useSelection();
const { cardId } = storeToRefs(selectionStore);
const { selectCardByID } = selectionStore;
</script>

<template>
  <div>
    <!-- FIXME add all needed components -->
    <p>selected card: {{ cardId }}</p>
    <button @click="selectCardByID('lkmfkl-mlfkm-dlkfm')">Select Card</button>
    <pre>{{ cards }}</pre>
    <button @click="fetchCards">Fetch Cards</button>
    <pre>{{ transactions }}</pre>
    <button @click="fetchTransactions">Fetch Transactions</button>
  </div>
</template>

<style scoped></style>
