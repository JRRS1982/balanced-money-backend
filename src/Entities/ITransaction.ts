import { IUser } from './IUser';

export interface ITransaction {
  account: string;
  amount: number;
  createdAt: Date;
  date: Date;
  id: number;
  updatedAt: Date;
  user: IUser;
}
