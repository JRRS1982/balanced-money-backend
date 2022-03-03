import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetUserArgs {
  @Field(() => Number)
  id: number;
}
