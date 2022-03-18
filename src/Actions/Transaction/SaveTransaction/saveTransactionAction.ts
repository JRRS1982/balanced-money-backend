import { Transaction } from '../../../Entities';
import { isDate, isNumber, isString } from 'lodash';
import { saveTransaction } from '../../../Repositories/Transaction';

export interface ISaveInput {
  account: string;
  amount: number;
  date: Date;
}

const isValid = (body: ISaveInput): boolean => {
  return isString(body.account) && isNumber(body.amount) && isDate(body.date);
};

export const saveTransactionAction = async (
  body: ISaveInput
): Promise<Transaction | undefined> => {
  const { account, amount, date } = body;

  if (!isValid(body)) {
    return;
  }

  return await saveTransaction({ account, amount, date });
};
