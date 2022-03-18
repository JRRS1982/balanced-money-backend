import { ITransaction, Transaction, User } from '../../../Entities';
import { DeepPartial, getConnection } from 'typeorm';
import { transactionMock } from './transaction.mock';
import { userMock } from '../../../Actions/User/__mocks__/user.mock';

const createTransactionRecord = async (
  overwrites?: DeepPartial<ITransaction>
): Promise<ITransaction> => {
  const manager = getConnection().manager;

  // Foreign Key constraint - a transaction needs to have a user
  await manager.save(User.create({ ...userMock }));

  return await manager.save(
    Transaction.create({ ...transactionMock, ...overwrites })
  );
};

export default createTransactionRecord;
