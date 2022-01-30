import { Transaction } from '../../Entities/Transaction.entity';
import { saveTransaction } from '../../Repositories/Transaction/saveTransaction';

export interface ISaveInput {
  account: string;
  amount: number;
  date: Date;
}

export const saveTransactionAction = async (
  body: ISaveInput
): Promise<Transaction> => {
  // TODO: Add some validation to the request to this backend, will need headers and body on the request to validation that only the transactions for the current user are updated
  const { account, amount, date } = body;

  return await saveTransaction({ account, amount, date });
};
