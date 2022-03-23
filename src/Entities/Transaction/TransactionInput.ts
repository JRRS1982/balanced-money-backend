import { Field, InputType } from 'type-graphql';
import { User } from '..';

@InputType()
export class TransactionInput {
  @Field(() => Number)
  readonly id!: number;

  @Field(() => String)
  account!: string;

  @Field(() => Number)
  amount!: number;

  @Field(() => Date)
  date!: Date;

  @Field(() => User)
  user!: User;
}
