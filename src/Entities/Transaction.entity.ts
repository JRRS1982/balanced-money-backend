import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

/**
 * TypeGraphQL automatically creates a GraphQL schema from TS classes, which helps avoid the need to create a schema definition file and interfaces describing the schema https://typegraphql.com/docs/0.17.0/types-and-fields.html
 */
@Entity()
@ObjectType()
export class Transaction extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ name: "account", type: "varchar", length: 255 })
  account: string;

  @Field(() => Number)
  @Column({ name: "amount", type: "decimal", precision: 9, scale: 2 }) // scale for decimal round and precision for size
  amount: number;

  @Field(() => Date)
  @Column({ name: "date", type: "timestamp", precision: 3 }) // need precision for microseconds in Date()
  date: Date;
}
