import createUserRecord from '../../../../Actions/User/__mocks__/createUserRecord.factory';
import { user } from '../../../../Actions/User/__mocks__/user.mock';
import { baseConfig } from '../../../../Configs';
import { IUser } from '../../../../Entities';
import { Connection, createConnection } from 'typeorm';
import { getUserAction } from '../';

describe('getUserAction', () => {
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

  it('should successfully get a user', async () => {
    await createUserRecord();
    const result = await getUserAction({ id: mockUser.id });

    expect(result?.id).toEqual(mockUser.id);
  });

  it('should not get a user that does not exist', async () => {
    const result = await getUserAction({ id: mockUser.id });

    expect(result?.id).toEqual(undefined);
  });
});
