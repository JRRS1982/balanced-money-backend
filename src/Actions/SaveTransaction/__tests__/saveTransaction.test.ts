import { baseConfig } from '../../../Configs/ormconfig';
import { ITransaction } from '../../../Entities/ITransaction';
import { getTransactions } from '../../../Repositories/Transaction/getTransactions';
import { Connection, createConnection } from 'typeorm';
import { transaction } from '../../../Actions/__mocks__/transaction.mock';
import { saveTransactionAction } from '../../SaveTransaction/saveTransactionAction';

describe('saveTransactions', () => {
  let connection: Connection;
  let transactionMock: ITransaction;

  beforeEach(async () => {
    connection = await createConnection(baseConfig);
    await connection.runMigrations();
    transactionMock = transaction();
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
    jest.resetAllMocks;
  });

  it('should successfully save a transaction', async () => {
    await saveTransactionAction(transactionMock);
    const result = await getTransactions();

    expect(result[0].id).toEqual(transactionMock.id);
    expect(result[0].account).toEqual(transactionMock.account);
    expect(result[0].amount).toEqual(transactionMock.amount);
    expect(result[0].date).toEqual(transactionMock.date);
    expect(result.length).toEqual(1);
  });
});
