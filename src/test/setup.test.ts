import { describe, test, expect } from 'vitest';

describe('import vue components', () => {
  const componentFileNames = [
    'AmountFilter',
    'CardSelector',
    'CardSelectorBankingCard',
    'TransactionList',
    'TransactionListItem',
  ];

  componentFileNames.forEach((fileName) => {
    test(`import ${fileName}.vue as expected`, async () => {
      const cmp = await import(`../components/${fileName}.vue`);
      expect(cmp).toBeDefined();
    });
  });
});
