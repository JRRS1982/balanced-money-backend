import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface ITransaction {
  id: number;
  account: string;
  amount: number;
  date: Date;
}

export class ColumnNumericTransformer {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }
}

/**
 * TypeGraphQL automatically creates a GraphQL schema from TS classes, which helps avoid the need to create a schema definition file and interfaces describing the schema https://typegraphql.com/docs/0.17.0/types-and-fields.html
 */
@Entity()
@ObjectType()
export class Transaction extends BaseEntity {
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

  @Field(() => Date)
  @Column({ name: 'date', type: 'timestamp', precision: 3 }) // precision to microseconds in date
  date: Date;
}
