import { User } from '../../Entities/User.entity';

export interface ISaveInput {
  email: string;
  userName: string;
  password: string;
}

export const saveUser = async (user: ISaveInput): Promise<User> => {
  const userEntity = User.create(user);
  await User.save(userEntity);
  return userEntity;
};
