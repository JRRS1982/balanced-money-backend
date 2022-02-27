import { baseConfig } from '../../../Configs/ormconfig';
import { ITransaction } from '../../../Entities/ITransaction';
import { getTransactions } from '../../../Repositories/Transaction/getTransactions';
import { Connection, createConnection } from 'typeorm';
import { transaction } from '../../__mocks__/transaction.mock';
import { saveTransactionAction } from '../saveTransactionAction';

describe('saveTransactionAction', () => {
  let connection: Connection;
  let mockTransaction: ITransaction;

  beforeEach(async () => {
    connection = await createConnection(baseConfig);
    await connection.runMigrations();
    mockTransaction = transaction();
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
    jest.resetAllMocks;
  });

  it('should successfully save a transaction', async () => {
    await saveTransactionAction(mockTransaction);
    const result = await getTransactions();

    expect(result[0].id).toEqual(mockTransaction.id);
    expect(result[0].account).toEqual(mockTransaction.account);
    expect(result[0].amount).toEqual(mockTransaction.amount);
    expect(result[0].date).toEqual(mockTransaction.date);
    expect(result.length).toEqual(1);
  });

  it('should not save a transaction which has a missing account', async () => {
    const mockTransactionNoAccount = transaction({ account: undefined });
    await saveTransactionAction(mockTransactionNoAccount);
    const result = await getTransactions();
    expect(result).toEqual([]);
  });

  it('should not save a transaction which has a missing amount', async () => {
    const mockTransactionNoAmount = transaction({ amount: undefined });
    await saveTransactionAction(mockTransactionNoAmount);
    const result = await getTransactions();
    expect(result).toEqual([]);
  });

  it('should not save a transaction which has a missing date', async () => {
    const mockTransactionNoDate = transaction({ date: undefined });
    await saveTransactionAction(mockTransactionNoDate);
    const result = await getTransactions();
    expect(result).toEqual([]);
  });
});
