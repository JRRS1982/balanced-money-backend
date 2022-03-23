import { ITransaction } from '../../../Entities';

export const transaction = (
  overwrites?: Partial<ITransaction>
): ITransaction => ({
  id: 1,
  account: 'example name',
  amount: 410.1,
  date: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overwrites
});

export const transactionMock = transaction();
