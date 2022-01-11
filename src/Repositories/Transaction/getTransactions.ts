import { map } from 'lodash';
import { ITransaction } from "../../Entities/ITransaction";
import { Transaction } from "../../Entities/Transaction.entity";
import { getManager } from "typeorm";

const toTransactionEntity = ({ id, account, amount, date }: Transaction): ITransaction => ({
  id,
  account,
  amount,
  date,
});

export const getTransactions = async (): Promise<ITransaction[]> => {
  const query = getManager().createQueryBuilder(Transaction, "transaction");
  return map(await query.getMany(), toTransactionEntity);
};
