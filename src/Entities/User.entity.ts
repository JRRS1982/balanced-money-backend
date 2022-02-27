import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User extends BaseEntity {
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
}
