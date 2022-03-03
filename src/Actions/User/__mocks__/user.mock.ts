import { IUser } from 'Entities';

export const user = (overwrites?: Partial<IUser>): IUser => ({
  id: 1,
  email: 'example@gmail.com',
  firstName: 'bob',
  lastName: 'smith',
  password: 'need to hash this',
  createdAt: new Date(),
  updatedAt: new Date(),
  transactions: [],
  ...overwrites
});

export const userMock = user();
