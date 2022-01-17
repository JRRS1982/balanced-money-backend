import { baseConfig } from "Configs/ormconfig";
import { ITransaction } from "Entities";
import { getTransactions, saveTransaction } from "Repositories/Transaction";
import { Connection, createConnection } from "typeorm";
import { transaction } from "Actions/__mocks__/transaction.mock";

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
    await saveTransaction(transactionMock);
    const after = await getTransactions();

    expect(after.length).toEqual(1);
  });
});
