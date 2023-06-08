<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type Transaction from '../model/transaction';
import { useSelection } from '../store/selection';
import { computed } from 'vue';

const props = defineProps<{ transaction: Transaction }>();

const selectionStore = useSelection();
const { cardType } = storeToRefs(selectionStore);

const amountCurrency = computed(() => {
  return props.transaction.amount.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
});
</script>

<template>
  <li class="wrapper transaction" :class="cardType">
    <p>{{ props.transaction.description }}</p>
    <p data-cy-transaction="amount">{{ amountCurrency }}</p>
  </li>
</template>

<style scoped lang="scss">
li.wrapper.transaction {
  width: 100%;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;

  list-style-type: none;
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  &.private {
    background-color: var(--card-background-private);
  }
  &.business {
    background-color: var(--card-background-business);
  }
}
</style>
