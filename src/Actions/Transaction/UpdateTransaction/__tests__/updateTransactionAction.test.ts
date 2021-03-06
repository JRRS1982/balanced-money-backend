import createTransactionRecord from '../../../../Actions/Transaction/__mocks__/createTransactionRecord.factory';
import { transactionUpdate } from '../../../../Actions/Transaction/__mocks__/transactionUpdate.mock';
import { baseConfig } from '../../../../Configs/ormconfig';
import { getTransactions } from '../../../../Repositories/Transaction/getTransactions';
import { Connection, createConnection } from 'typeorm';
import {
  IUpdateInput,
  UpdateOptions,
  updateTransactionAction
} from '../updateTransactionAction';

describe('updateTransactionAction', () => {
  let connection: Connection;
  let mockTransactionUpdate: IUpdateInput;

  beforeEach(async () => {
    connection = await createConnection(baseConfig);
    mockTransactionUpdate = transactionUpdate();
    await connection.runMigrations();
    await createTransactionRecord();
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should successfully update a transaction account', async () => {
    const before = await getTransactions();
    await updateTransactionAction(mockTransactionUpdate);
    const after = await getTransactions();

    expect(before[0].account).toEqual('example name');
    expect(after[0].account).toEqual('Monzo');
  });

  it('should successfully update a transaction value', async () => {
    const before = await getTransactions();
    await updateTransactionAction({
      id: 1,
      field: UpdateOptions.AMOUNT,
      value: '12.4'
    });
    const after = await getTransactions();

    expect(before[0].amount).toEqual(410.1);
    expect(after[0].amount).toEqual(12.4);
  });

  it('should successfully update a transaction date', async () => {
    const before = await getTransactions();
    const newDate = new Date();

    await updateTransactionAction({
      id: 1,
      field: UpdateOptions.DATE,
      value: newDate.toISOString()
    });
    const after = await getTransactions();

    expect(before[0].date).not.toEqual(newDate);
    expect(after[0].date).toEqual(newDate);
  });
});
