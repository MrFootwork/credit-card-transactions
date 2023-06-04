import { defineStore, storeToRefs } from "pinia";
import { ref, computed } from "vue";

import { transactions as rawData } from "../../data/transactions";
import type Transaction from "../model/transaction";
import type CardTransactions from "../model/cardTransaction";

import { useSelection } from "./selection";

export const useTransactions = defineStore("transactions", () => {
  /*************************
   *  States
   ************************/
  // selection store
  const selectionStore = useSelection();
  const { cardId, minimalAmount } = storeToRefs(selectionStore);

  // store state
  const transactionsRaw = ref<CardTransactions>({});

  /*************************
   * getters (computed())
   ************************/
  const cardTransactions = computed(() => Object.values(transactionsRaw.value));
  const cardIDs = computed(() => Object.keys(transactionsRaw.value));
  // filtered transactions by cardId and minimal amount
  const transactions = computed(() => {
    if (!cardId.value) return [];

    const transactionsAll: Transaction[] = [];

    cardTransactions.value.forEach((transactionSet, i) => {
      const transactionSetIsSelected =
        cardId.value === cardIDs.value[i] || !cardId.value;

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

  /*************************
   * actions
   ************************/

  async function fetchTransactions() {
    setTimeout(() => {
      transactionsRaw.value = rawData;
    }, 600);
  }

  return { transactions, fetchTransactions };
});
