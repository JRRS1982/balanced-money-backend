import { Connection, createConnection } from "typeorm";
import { baseConfig } from "Configs/ormconfig";
import { getTransactionsAction } from "../GetTransactions/getTransactionsAction";
import createTransactionRecord from "../__helpers__/createTransactionRecord.factory";
import { transaction } from "./../__mocks__/transaction.mock";
import { ITransaction } from 'Entities/ITransaction';

describe("getTransactions", () => {
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

  it("should successfully return all transactions", async () => {
    await createTransactionRecord(transactionMock);

    const result = await getTransactionsAction();
    expect(result).toEqual([
      {
        id: transactionMock.id,
        account: transactionMock.account,
        amount: "12.30",
        date: transactionMock.date,
      },
    ]);
  });
});
