<script setup lang="ts">
import TransactionListItem from './TransactionListItem.vue';
import { useTransactions } from '../store/transactions';
import { storeToRefs } from 'pinia';

const transactionStore = useTransactions();
const { transactions } = storeToRefs(transactionStore);
</script>

<template>
  <div>
    <ul>
      <TransactionListItem
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
}
</style>
