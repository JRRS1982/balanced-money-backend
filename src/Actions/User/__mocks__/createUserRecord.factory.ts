import { IUser, User } from '../../../Entities';
import { DeepPartial, getConnection } from 'typeorm';
import { userMock } from './user.mock';

const createUserRecord = async (
  overwrites?: DeepPartial<IUser>
): Promise<IUser> => {
  const manager = getConnection().manager;

  return await manager.save(User.create({ ...userMock, ...overwrites }));
};

export default createUserRecord;
