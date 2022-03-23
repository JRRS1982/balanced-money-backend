import { baseConfig } from '../../../../Configs/ormconfig';
import { Connection, createConnection } from 'typeorm';
import { updateUserAction, UpdateUserOptions } from '../updateUserAction';
import createUserRecord from '../../../../Actions/User/__mocks__/createUserRecord.factory';
import { userMock } from '../../__mocks__/user.mock';
import { getUser } from '../../../../Repositories/User';

describe('updateUserAction', () => {
  let connection: Connection;

  beforeEach(async () => {
    connection = await createConnection(baseConfig);
    await connection.runMigrations();
    await createUserRecord();
  });

  afterEach(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should successfully update a user email', async () => {
    await updateUserAction({
      id: userMock.id,
      field: UpdateUserOptions.EMAIL,
      value: 'newEmail@gmail.com'
    });
    const user = await getUser(userMock.id);
    expect(user?.email).toEqual('newEmail@gmail.com');
  });

  it('should successfully update a user first name', async () => {
    await updateUserAction({
      id: userMock.id,
      field: UpdateUserOptions.FIRST_NAME,
      value: 'Newbsy'
    });
    const user = await getUser(userMock.id);
    expect(user?.firstName).toEqual('Newbsy');
  });

  it('should successfully update a user last name', async () => {
    await updateUserAction({
      id: userMock.id,
      field: UpdateUserOptions.LAST_NAME,
      value: 'Newsmithy'
    });
    const user = await getUser(userMock.id);
    expect(user?.lastName).toEqual('Newsmithy');
  });

  it('should successfully update a user password', async () => {
    await updateUserAction({
      id: userMock.id,
      field: UpdateUserOptions.PASSWORD,
      value: 'ShouldBeHashed'
    });
    const user = await getUser(userMock.id);
    expect(user?.password).toEqual('ShouldBeHashed');
  });
});
