import { ISaveUserInput } from 'Actions/User/SaveUser/saveUserAction';
import { IUser, User } from 'Entities';

export const saveUser = async (user: ISaveUserInput): Promise<IUser> => {
  const userEntity = User.create(user);
  await User.save(userEntity);
  return userEntity;
};
