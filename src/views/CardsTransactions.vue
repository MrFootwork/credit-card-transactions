<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCards } from "../store/cards";

const cardsStore = useCards();
const { cards } = storeToRefs(cardsStore);
const { fetchCards } = cardsStore;
</script>

<template>
  <div>
    <p>This is page CardsTransactions</p>
    <router-link to="/test">Go To Test</router-link>
    <router-link to="/hello">Go To Hello</router-link>
    <span>{{ cards }}</span>
    <button @click="fetchCards">Fetch Cards</button>
  </div>
</template>

<style scoped></style>
