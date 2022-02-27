import { isDate, isNumber, isString } from 'lodash';
import { Transaction } from '../../Entities/Transaction.entity';
import { saveTransaction } from '../../Repositories/Transaction/saveTransaction';

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
