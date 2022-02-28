import { baseConfig } from 'Configs';
import { getTransactions } from 'Repositories/Transaction';
import { Connection, createConnection } from 'typeorm';
import createTransactionRecord from 'Actions/Transaction/__mocks__/createTransactionRecord.factory';
import { deleteTransactionAction } from '..';

describe('deleteTransactionsAction', () => {
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

  it('should successfully delete a transaction', async () => {
    await createTransactionRecord();
    const before = await getTransactions();
    await deleteTransactionAction({ id: 1 });
    const after = await getTransactions();

    expect(after.length).toEqual(before.length - 1);
  });

  it("should not delete a transaction which doesn't exist", async () => {
    await createTransactionRecord({ id: 3 });
    const before = await getTransactions();
    await deleteTransactionAction({ id: 1 });
    const after = await getTransactions();

    expect(after.length).toEqual(before.length);
  });
});
