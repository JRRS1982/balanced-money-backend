import { ITransaction } from 'Entities/ITransaction';
import { getTransactions } from 'Repositories/Transaction/getTransactions';

export const getTransactionsAction = async (): Promise<ITransaction[]> => {
  return await getTransactions();
};
