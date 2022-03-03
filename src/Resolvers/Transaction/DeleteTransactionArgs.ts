import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class DeleteTransactionArgs {
  @Field(() => Number)
  id: number;
}
