import { defineStore, storeToRefs } from "pinia";
import { ref, computed } from "vue";

import { transactions as rawData } from "../../data/transactions";
import type Transaction from "../model/transaction";
import type CardTransactions from "../model/cardTransaction";

import { useSelection } from "../store/selection";

export const useTransactions = defineStore("transactions", () => {
  // state
  const transactionsRaw = ref<CardTransactions>({});

  const selectionStore = useSelection();
  const { cardId, minimalAmount } = storeToRefs(selectionStore);

  // getters (computed())
  const transactions = computed(() => {
    if (cardId.value) return transactionsRaw.value[cardId.value];

    const cardTransactions = Object.values(transactionsRaw.value);
    const cardIDs = Object.keys(transactionsRaw.value);

    const transactionsAll: Transaction[] = [];

    cardTransactions.forEach((transactionSet, i) => {
      const transactionSetIsSelected =
        cardId.value === cardIDs[i] || !cardId.value;

      if (!transactionSetIsSelected) return;

      // push only transactions above minimal amount
      transactionSet.forEach((transaction) => {
        if (minimalAmount.value <= transaction.amount) {
          transactionsAll.push(transaction);
        }
      });
    });

    return transactionsAll;
  });

  // actions
  async function fetchTransactions() {
    setTimeout(() => {
      transactionsRaw.value = rawData;
    }, 600);
  }

  return { transactions, fetchTransactions };
});
