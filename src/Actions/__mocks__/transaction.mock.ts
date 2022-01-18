import { ITransaction, Transaction } from '../../Entities';

export const transaction = (
  overwrites?: Partial<Transaction>
): ITransaction => ({
  id: 1,
  account: 'example name',
  amount: 12.3,
  date: new Date(),
  ...overwrites
});
