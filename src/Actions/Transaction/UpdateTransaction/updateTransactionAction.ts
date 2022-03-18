import { Transaction } from '../../../Entities';
import {
  getTransaction,
  updateTransaction
} from '../../../Repositories/Transaction';

// Properties of the transaction that we can / want to update
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
): Promise<Transaction | undefined> => {
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

  return await updateTransaction(transaction);
};
