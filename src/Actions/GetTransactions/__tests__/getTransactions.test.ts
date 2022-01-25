import { baseConfig } from '../../../Configs';
import { getTransactions } from '../../../Repositories/Transaction/getTransactions';
import { Connection, createConnection } from 'typeorm';
import createTransactionRecord from '../../../Actions/__helpers__/createTransactionRecord.factory';
import { transactionMock } from '../../../Actions/__mocks__/transaction.mock';

describe('getTransactions', () => {
  let connection: Connection;

  beforeEach(async () => {
    connection = await createConnection(baseConfig);
    await connection.runMigrations();
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
    jest.resetAllMocks;
  });

  it('should successfully return all transactions', async () => {
    await createTransactionRecord();
    const result = await getTransactions();

    expect(result[0].id).toEqual(transactionMock.id);
    expect(result[0].account).toEqual(transactionMock.account);
    expect(result[0].amount).toEqual(transactionMock.amount);
    expect(result[0].date).toEqual(transactionMock.date);
    expect(result.length).toEqual(1);
  });
});
