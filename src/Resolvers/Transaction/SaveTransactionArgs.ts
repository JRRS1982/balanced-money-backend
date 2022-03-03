import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class SaveTransactionArgs {
  @Field()
  account: string;

  @Field()
  amount: number;

  @Field()
  date: Date;
}
