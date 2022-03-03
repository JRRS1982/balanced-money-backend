import { Transaction } from './Transaction.entity';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  transactions: Transaction[];
  updatedAt?: Date;
  createdAt?: Date;
}
