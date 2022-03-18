import { ColumnNumericTransformer } from '../Actions/__helpers__/columnNumericTransformer';
import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { ITransaction, User } from './';

@Entity()
@ObjectType()
export class Transaction extends BaseEntity implements ITransaction {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ name: 'account', type: 'varchar', length: 255 })
  account: string;

  /**
   * amount is a decimal column, thus typeorm saves it as a string in the DB, this transformer is used by typeorm to transform that string back into a decimal number on the way out.
   */
  @Field(() => Number)
  @Column({
    name: 'amount',
    type: 'decimal',
    precision: 9,
    scale: 2,
    transformer: new ColumnNumericTransformer()
  })
  amount: number;

  // TODO add currency so can handle multiple
  @Field(() => Date)
  @Column({ name: 'date', type: 'timestamp', precision: 3 }) // precision to microseconds in date
  date: Date;

  // TODO is this right - the docs say this is correct by DB doesn't look correct
  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: 'user' })
  user: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
