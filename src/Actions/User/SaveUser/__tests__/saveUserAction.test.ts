import { user } from 'Actions/User/__mocks__/user.mock';
import { baseConfig } from 'Configs/ormconfig';
import { IUser } from 'Entities';
import { getUser } from 'Repositories/User';
import { Connection, createConnection } from 'typeorm';
import { saveUserAction } from '../saveUserAction';

describe('saveUserAction', () => {
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
  });

  it('should successfully save a user', async () => {
    await saveUserAction(mockUser);
    const result = await getUser(mockUser.id);

    expect(result?.id).toEqual(mockUser.id);
  });

  it('should not save a user which has a missing email', async () => {
    const mockUserNoEmail = user({ email: undefined });
    await saveUserAction(mockUserNoEmail);
    const result = await getUser(mockUserNoEmail.id);

    expect(result).toEqual(undefined);
  });

  it('should not save a user which has a missing firstName', async () => {
    const mockUserNoFirstName = user({ firstName: undefined });
    await saveUserAction(mockUserNoFirstName);
    const result = await getUser(mockUserNoFirstName.id);

    expect(result).toEqual(undefined);
  });

  it('should not save a user which has a missing lastName', async () => {
    const mockUserNoLastName = user({ lastName: undefined });
    await saveUserAction(mockUserNoLastName);
    const result = await getUser(mockUserNoLastName.id);

    expect(result).toEqual(undefined);
  });

  it('should not save a user which has a missing password', async () => {
    const mockUserNoPassword = user({ password: undefined });
    await saveUserAction(mockUserNoPassword);
    const result = await getUser(mockUserNoPassword.id);

    expect(result).toEqual(undefined);
  });
});
