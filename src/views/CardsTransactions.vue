<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";

const cardsStore = useCards();
const { cards } = storeToRefs(cardsStore);
const { fetchCards } = cardsStore;

const transactionsStore = useTransactions();
const { transactions } = storeToRefs(transactionsStore);
const { fetchTransactions } = transactionsStore;
</script>

<template>
  <div>
    <p>This is page CardsTransactions</p>
    <router-link to="/test">Go To Test</router-link>
    <router-link to="/hello">Go To Hello</router-link>
    <pre>{{ cards }}</pre>
    <button @click="fetchCards">Fetch Cards</button>
    <pre>{{ transactions }}</pre>
    <button @click="fetchTransactions">Fetch Transactions</button>
  </div>
</template>

<style scoped></style>
