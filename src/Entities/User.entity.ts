import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { IUser, Transaction } from './';

@Entity()
@ObjectType()
export class User extends BaseEntity implements IUser {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ name: 'email', type: 'varchar', length: 255 })
  email: string;

  @Field(() => String)
  @Column({ name: 'firstName', type: 'varchar', length: 255 })
  firstName: string;

  @Field(() => String)
  @Column({ name: 'lastName', type: 'varchar', length: 255 })
  lastName: string;

  @Field(() => String)
  @Column({ name: 'password', type: 'varchar', length: 255 })
  password: string;

  @Field(() => [Transaction], { defaultValue: [] })
  @OneToMany(() => Transaction, (transaction) => transaction.user)
  @JoinColumn({ name: 'transaction' }) // join on the User Table under transactions column
  transactions: Transaction[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
