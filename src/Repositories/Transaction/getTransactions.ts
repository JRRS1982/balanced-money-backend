import { Transaction, ITransaction } from 'Entities/Transaction.entity';
import { map } from 'lodash';
import { getManager } from 'typeorm';

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

export const getTransactions = async (): Promise<ITransaction[]> => {
  const query = await getManager().createQueryBuilder(
    Transaction,
    'transaction'
  );
  return map(await query.getMany(), toTransactionEntity);
};
