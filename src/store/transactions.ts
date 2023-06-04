import { defineStore } from "pinia";
import { ref } from "vue";

import { transactions as rawData } from "../../data/transactions";
// import type Transaction from "../model/transaction.d.ts";

export const useTransactions = defineStore("transactions", () => {
  // state
  const transactions = ref({});

  // getters (computed())
  // FIXME keep transactions private
  // instead provide 1. all transactions and 2. filtered transactions

  // actions
  async function fetchTransactions() {
    setTimeout(() => {
      transactions.value = rawData;
    }, 600);
  }

  return { transactions, fetchTransactions };
});
