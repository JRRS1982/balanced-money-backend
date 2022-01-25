import { ITransaction } from '../../Entities/ITransaction';
import { Transaction } from '../../Entities/Transaction.entity';

export const transaction = (
  overwrites?: Partial<Transaction>
): ITransaction => ({
  id: 1,
  account: 'example name',
  amount: 410.1,
  date: new Date(),
  ...overwrites
});

export const transactionMock = transaction();
