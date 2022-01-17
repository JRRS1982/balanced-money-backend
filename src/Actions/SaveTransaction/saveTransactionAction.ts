import { ITransaction, Transaction } from "Entities";
import { saveTransaction } from "Repositories/Transaction";

export const saveTransactionAction = async (
  body: ITransaction
): Promise<Transaction> => {
  // TODO: Add some validation to the request to this backend, will need headers and body on the request to validation that only the transactions for the current user are updated
  const { id, account, amount, date } = body;

  return await saveTransaction({ id, account, amount, date });
};
