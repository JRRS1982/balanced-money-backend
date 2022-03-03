import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class SaveUserArgs {
  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;
}
