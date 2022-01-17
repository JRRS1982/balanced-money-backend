import { Transaction } from "Entities";
import { DeepPartial, getConnection } from "typeorm";
import { transaction as transactionMock } from "../__mocks__/transaction.mock";

const defaults = transactionMock();

const createTransactionRecord = async (
  overwrites?: DeepPartial<Transaction>
): Promise<Transaction> => {
  const manager = getConnection().manager;

  return await manager.save(Transaction.create({ ...defaults, ...overwrites }));
};

export default createTransactionRecord;
