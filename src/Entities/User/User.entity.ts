import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { IUser } from '..';

@Entity()
@ObjectType()
export class User extends BaseEntity implements IUser {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ name: 'email', type: 'varchar', length: 255 })
  email!: string;

  @Field(() => String)
  @Column({ name: 'firstName', type: 'varchar', length: 255 })
  firstName!: string;

  @Field(() => String)
  @Column({ name: 'lastName', type: 'varchar', length: 255 })
  lastName!: string;

  @Field(() => String)
  @Column({ name: 'password', type: 'varchar', length: 255 })
  password!: string; // will need hashing / moving to auth0 at some point maybe

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date;
}
