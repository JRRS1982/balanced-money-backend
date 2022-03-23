import { IUser } from '../../../Entities/User/IUser';

export const user = (overwrites?: Partial<IUser>): IUser => ({
  createdAt: new Date(),
  email: 'example@gmail.com',
  firstName: 'bob',
  id: 1,
  lastName: 'smith',
  password: 'need to hash this',
  updatedAt: new Date(),
  ...overwrites
});

export const userMock = user();
