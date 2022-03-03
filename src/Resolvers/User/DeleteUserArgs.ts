import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class DeleteUserArgs {
  @Field(() => Number)
  id: number;
}
