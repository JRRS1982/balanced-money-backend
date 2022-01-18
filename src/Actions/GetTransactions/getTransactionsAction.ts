import { ITransaction } from '../../Entities';
import { getTransactions } from '../../Repositories/Transaction/getTransactions';

export const getTransactionsAction = async (): Promise<ITransaction[]> => {
  // TODO: Add some validation to the request to this backend, will need headers and body on the request to validation that only the transactions for the current user are returned.
  return await getTransactions();
};
