import { UpdateOptions } from 'Actions/Transaction/UpdateTransaction/updateTransactionAction';
import { ArgsType, Field } from 'type-graphql';

/**
 * @UpdateTransactionArgs will need the id of the transaction, the new value and which field is being updated
 */
@ArgsType()
export class UpdateTransactionArgs {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  field: UpdateOptions;

  @Field(() => String)
  value: string;
}
