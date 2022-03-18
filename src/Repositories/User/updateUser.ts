import { IUser, User } from '../../Entities';

export const updateUser = async (transaction: IUser): Promise<User> => {
  const transactionEntity = User.create(transaction);
  await User.save(transactionEntity);
  return transactionEntity;
};
