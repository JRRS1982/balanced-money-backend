import { ColumnNumericTransformer } from '../../Actions/__helpers__/columnNumericTransformer';
import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
@ObjectType()
export class Transaction extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ name: 'account', type: 'varchar', length: 255 })
  account!: string;

  @Field(() => Number)
  @Column({
    name: 'amount',
    type: 'decimal',
    precision: 9, // formatting the decimal
    scale: 2, // formatting the decimal
    transformer: new ColumnNumericTransformer() // amount is a decimal, typeorm saves decimals to string in DB, this transforms it to a decimal on the way out of the DB.
  })
  amount!: number;

  @Field(() => Date)
  @Column({ name: 'date', type: 'timestamp', precision: 3 }) // precision to set date with microseconds depth
  date!: Date;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date;
}
