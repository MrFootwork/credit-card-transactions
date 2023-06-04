import type Transaction from "./transaction";

type cardTransaction = {
  [cardId: string]: Transaction[];
};

export default cardTransaction;
