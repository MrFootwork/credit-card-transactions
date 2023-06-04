<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";

import { useCards } from "../store/cards";
import { useTransactions } from "../store/transactions";
import { useSelection } from "../store/selection";

import CardSelector from "../components/CardSelector.vue";
import AmountFilter from "../components/AmountFilter.vue";
import TransactionList from "../components/TransactionList.vue";
import { storeToRefs } from "pinia";

const cardsStore = useCards();
const { fetchCards } = cardsStore;

const transactionsStore = useTransactions();
const { fetchTransactions } = transactionsStore;

const selectionStore = useSelection();
const { cardId } = storeToRefs(selectionStore);
const { setMinimalAmount } = selectionStore;

const value = ref(0);

function setFilter() {
  setMinimalAmount(value.value);
}

watch(cardId, (newCardId, oldCardId) => {
  if (newCardId !== oldCardId) setMinimalAmount(0);
});

onBeforeMount(async () => {
  await fetchCards();
  await fetchTransactions();
});
</script>

<template>
  <div class="wrapper app">
    <CardSelector></CardSelector>
    <AmountFilter
      v-model="value"
      :options="{ currency: 'EUR' }"
      @update:model-value="setFilter"
    />
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
