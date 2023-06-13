<script setup lang="ts">
import TransactionListItem from './TransactionListItem.vue';
import { useTransactions } from '../store/transactions';
import { storeToRefs } from 'pinia';

const transactionStore = useTransactions();
const { transactions } = storeToRefs(transactionStore);
</script>

<template>
  <TransitionGroup id="transaction-list" name="list" tag="ul">
    <TransactionListItem
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
  </TransitionGroup>
</template>

<style scoped lang="scss">
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
