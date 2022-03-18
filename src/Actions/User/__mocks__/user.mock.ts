import { IUser } from '../../../Entities';

export const user = (overwrites?: Partial<IUser>): IUser => ({
  createdAt: new Date(),
  email: 'example@gmail.com',
  firstName: 'bob',
  id: 1,
  lastName: 'smith',
  password: 'need to hash this',
  transactions: [],
  updatedAt: new Date(),
  ...overwrites
});

export const userMock = user();
