import { Connection, createConnection } from "typeorm";
import { baseConfig } from "Configs/ormconfig";
import { saveTransactionAction } from "../saveTransactionAction";
import createTransactionRecord from "../../__helpers__/createTransactionRecord.factory";
import { transaction } from "../../__mocks__/transaction.mock";
import { ITransaction } from "Entities/ITransaction";
import { getTransactions } from "Repositories/Transaction";

describe("saveTransactions", () => {
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
    createTransactionRecord(transactionMock);
    const before = await getTransactions();

    expect(before.length).toEqual(0);
    await saveTransactionAction(transactionMock);
    const after = await getTransactions();

    expect(after.length).toEqual(1);
  });
});
