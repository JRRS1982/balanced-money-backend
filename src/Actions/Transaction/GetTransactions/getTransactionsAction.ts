import { ITransaction } from 'Entities/Transaction.entity';
import { getTransactions } from 'Repositories/Transaction/getTransactions';

export const getTransactionsAction = async (): Promise<ITransaction[]> => {
  // TODO: Add validation
  return await getTransactions();
};
