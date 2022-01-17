import { baseConfig } from "Configs";
import { ITransaction } from "Entities";
import { getTransactions } from "Repositories/Transaction";
import { Connection, createConnection } from "typeorm";
import createTransactionRecord from "Actions/__helpers__/createTransactionRecord.factory";
import { transaction } from "Actions/__mocks__/transaction.mock";

describe('getTransactions', () => {
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

  it('should successfully return all transactions', async () => {
    await createTransactionRecord(transactionMock);
    const result = await getTransactions();

    expect(result.length).toEqual(1);
  });
});
