import { transaction } from '../../../../Actions/Transaction/__mocks__/transaction.mock';
import { baseConfig } from '../../../../Configs/ormconfig';
import { ITransaction } from '../../../../Entities';
import { getTransactions } from '../../../../Repositories/Transaction/getTransactions';
import { Connection, createConnection } from 'typeorm';
import { saveTransactionAction } from '../saveTransactionAction';

describe('saveTransactionAction', () => {
  let connection: Connection;
  let mockTransaction: ITransaction;

  beforeEach(async () => {
    connection = await createConnection(baseConfig);
    await connection.runMigrations();
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should successfully save a transaction', async () => {
    mockTransaction = transaction();
    await saveTransactionAction({
      account: mockTransaction.account,
      amount: mockTransaction.amount,
      date: mockTransaction.date
    });
    const result = await getTransactions();

    expect(result[0].id).toEqual(mockTransaction.id);
    expect(result[0].account).toEqual(mockTransaction.account);
    expect(result[0].amount).toEqual(mockTransaction.amount);
    expect(result[0].date).toEqual(mockTransaction.date);
    expect(result.length).toEqual(1);
  });

  it('should not save a transaction which has a missing account', async () => {
    const mockTransactionNoAccount = transaction({ account: undefined });
    await saveTransactionAction({
      account: mockTransactionNoAccount.account,
      amount: mockTransactionNoAccount.amount,
      date: mockTransactionNoAccount.date
    });
    const result = await getTransactions();
    expect(result).toEqual([]);
  });

  it('should not save a transaction which has a missing amount', async () => {
    const mockTransactionNoAmount = transaction({ amount: undefined });
    await saveTransactionAction({
      account: mockTransactionNoAmount.account,
      amount: mockTransactionNoAmount.amount,
      date: mockTransactionNoAmount.date
    });
    const result = await getTransactions();
    expect(result).toEqual([]);
  });

  it('should not save a transaction which has a missing date', async () => {
    const mockTransactionNoDate = transaction({ date: undefined });
    await saveTransactionAction({
      account: mockTransactionNoDate.account,
      amount: mockTransactionNoDate.amount,
      date: mockTransactionNoDate.date
    });
    const result = await getTransactions();
    expect(result).toEqual([]);
  });
});
