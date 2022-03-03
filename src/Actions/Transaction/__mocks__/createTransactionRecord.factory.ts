import { ITransaction, Transaction } from 'Entities';
import { DeepPartial, getConnection } from 'typeorm';
import { transactionMock } from './transaction.mock';

const createTransactionRecord = async (
  overwrites?: DeepPartial<ITransaction>
): Promise<ITransaction> => {
  const manager = getConnection().manager;

  return await manager.save(
    Transaction.create({ ...transactionMock, ...overwrites })
  );
};

export default createTransactionRecord;
