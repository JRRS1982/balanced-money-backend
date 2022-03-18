import { ITransaction } from '../../../Entities';
import { getTransactions } from '../../../Repositories/Transaction/getTransactions';

export const getTransactionsAction = async (): Promise<ITransaction[]> => {
  // TODO: Add validation
  return await getTransactions();
};
