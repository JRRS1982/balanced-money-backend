import { IUser, User } from '../../Entities';
import { getManager } from 'typeorm';

export const toUserEntity = ({
  id,
  email,
  firstName,
  lastName,
  password,
  createdAt,
  updatedAt
}: IUser): IUser => ({
  id,
  email,
  firstName,
  lastName,
  password,
  createdAt,
  updatedAt
});

// TODO add more where clauses i.e. account, amount, date etc
export const getUser = async (id: number): Promise<IUser | undefined> => {
  const user = await getManager()
    .createQueryBuilder(User, 'user')
    .where('user.id = :id', { id })
    .getOne();

  if (!user) {
    return;
  }

  return toUserEntity(user);
};
