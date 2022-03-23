import { ITransaction } from '../../../Entities';
import { isDate, isNumber, isString } from 'lodash';
import { saveTransaction } from '../../../Repositories/Transaction';
import { SaveTransactionArgs } from '../../../Resolvers/Transaction/SaveTransactionArgs';

const isValid = (body: SaveTransactionArgs): boolean => {
  return isString(body.account) && isNumber(body.amount) && isDate(body.date);
};

export const saveTransactionAction = async (
  body: SaveTransactionArgs
): Promise<ITransaction | undefined> => {
  const { account, amount, date } = body;

  if (!isValid(body)) {
    return;
  }

  return await saveTransaction({ account, amount, date });
};
