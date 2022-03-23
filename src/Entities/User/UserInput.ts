import { Transaction } from '../Transaction/Transaction.entity';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserInput {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  password!: string;

  @Field(() => [Transaction])
  transactions!: Transaction[];
}
