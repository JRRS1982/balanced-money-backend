import { UpdateUserOptions } from 'Actions/User/UpdateUser/updateUserAction';
import { ArgsType, Field } from 'type-graphql';

/**
 * Should be the transaction id, with the field that is going to be updated with the value which will be applied to that field.
 */
@ArgsType()
export class UpdateUserArgs {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  field: UpdateUserOptions;

  @Field(() => String)
  value: string;
}
