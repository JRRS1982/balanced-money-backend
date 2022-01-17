import { ITransaction, Transaction } from "Entities";
import { getManager } from "typeorm";

const toTransactionEntity = ({
  id,
  account,
  amount,
  date
}: Transaction): ITransaction => ({
  id,
  account,
  amount,
  date
});

// TODO add more where clauses i.e. account, amount, date etc
export const getTransaction = async ({
  id
}: ITransaction): Promise<ITransaction | undefined> => {
  const transaction = await getManager()
    .createQueryBuilder(Transaction, 'transaction')
    .where('transaction.id = :id', { id })
    .getOne();

  if (transaction !== undefined) {
    return toTransactionEntity(transaction);
  }

  return undefined;
};
