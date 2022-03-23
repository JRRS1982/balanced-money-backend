import createUserRecord from '../../../../Actions/User/__mocks__/createUserRecord.factory';
import { user } from '../../../../Actions/User/__mocks__/user.mock';
import { baseConfig } from '../../../../Configs';
import { IUser } from '../../../../Entities';
import { getUser } from '../../../../Repositories/User';
import { Connection, createConnection } from 'typeorm';
import { deleteUserAction } from '../';

describe('deleteUserAction', () => {
  let connection: Connection;
  let mockUser: IUser;

  beforeEach(async () => {
    connection = await createConnection(baseConfig);
    await connection.runMigrations();
    mockUser = user();
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
    jest.resetAllMocks;
  });

  it('should successfully delete a user', async () => {
    await createUserRecord();
    await deleteUserAction({ id: mockUser.id });
    const after = await getUser(mockUser.id);

    expect(after).toEqual(undefined);
  });

  it('should only delete selected user', async () => {
    const userExample = await createUserRecord();
    await deleteUserAction({ id: 3 });
    const after = await getUser(1);

    expect(userExample).toEqual(after);
  });
});
