import { Transaction } from '../../Entities/Transaction.entity';
import { DeepPartial, getConnection } from 'typeorm';
import { transactionMock } from '../__mocks__/transaction.mock';

const createTransactionRecord = async (
  overwrites?: DeepPartial<Transaction>
): Promise<Transaction> => {
  const manager = getConnection().manager;

  return await manager.save(
    Transaction.create({ ...transactionMock, ...overwrites })
  );
};

export default createTransactionRecord;
