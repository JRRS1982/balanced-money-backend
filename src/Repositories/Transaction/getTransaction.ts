import { ITransaction, Transaction } from '../../Entities';
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

// TODO add more where clauses i.e. account, amount, date etc
export const getTransaction = async (id: number): Promise<ITransaction> => {
  const transaction = await getManager()
    .createQueryBuilder(Transaction, 'transaction')
    .where('transaction.id = :id', { id })
    .getOneOrFail(); // should only be called with an id which exists.

  return toTransactionEntity(transaction);
};
