import { ITransaction, Transaction } from '../../Entities';
import { map } from 'lodash';
import { getManager } from 'typeorm';

const toTransactionEntity = ({
  id,
  account,
  amount,
  date,
  createdAt,
  updatedAt
}: Transaction): ITransaction => ({
  id,
  account,
  amount,
  date,
  createdAt,
  updatedAt
});

export const getTransactions = async (): Promise<ITransaction[]> => {
  const query = getManager().createQueryBuilder(Transaction, 'transaction');

  return map(await query.getMany(), toTransactionEntity);
};
