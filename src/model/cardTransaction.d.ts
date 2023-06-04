import type Transaction from "./transaction";

type cardTransactions = {
  [cardId: string]: Transaction[];
};

export default cardTransactions;
