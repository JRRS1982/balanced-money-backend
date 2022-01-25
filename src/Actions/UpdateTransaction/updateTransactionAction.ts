import { getTransaction } from '../../Repositories/Transaction/getTransaction';
import { Transaction } from '../../Entities/Transaction.entity';
import { saveTransaction } from '../../Repositories/Transaction/saveTransaction';

/**
 * Transaction properties that we can update - don't want to update the index of the transaction, but other options... we may want to update.
 */
export enum UpdateOptions {
  ACCOUNT = 'account',
  AMOUNT = 'amount',
  DATE = 'date'
}

export interface IUpdateInput {
  id: number;
  field: UpdateOptions;
  value: string;
}

export const updateTransactionAction = async (
  body: IUpdateInput
): Promise<Transaction> => {
  // TODO: Add some validation to the request to this backend, will need headers and body on the request to validation that only the transactions for the current user are updated. Also add validation if we get a update option which is not on our list.
  const { id, field, value } = body;

  const transaction = await getTransaction(id);

  switch (field) {
    case UpdateOptions.ACCOUNT:
      transaction.account = value;
      break;
    case UpdateOptions.AMOUNT:
      transaction.amount = Number(value);
      break;
    case UpdateOptions.DATE:
      transaction.date = new Date(value);
      break;
    default:
      break;
  }

  return await saveTransaction(transaction);
};
