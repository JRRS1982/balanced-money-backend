import { ITransaction, Transaction } from '../../../Entities';
import { userMock } from '../../User/__mocks__/user.mock';

export const transaction = (
  overwrites?: Partial<Transaction>
): ITransaction => ({
  id: 1,
  account: 'example name',
  amount: 410.1,
  date: new Date(),
  user: userMock,
  createdAt: new Date(),
  updatedAt: new Date(),
  ...overwrites
});

export const transactionMock = transaction();
