import { ITransaction } from './ITransaction';

export interface IUser {
  createdAt: Date;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  transactions: ITransaction[];
  updatedAt: Date;
}
