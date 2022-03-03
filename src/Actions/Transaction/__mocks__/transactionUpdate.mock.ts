import { IUpdateInput, UpdateOptions } from '../UpdateTransaction/updateTransactionAction';

export const transactionUpdate = (
  overwrites?: Partial<IUpdateInput>
): IUpdateInput => ({
  id: 1,
  field: UpdateOptions.ACCOUNT,
  value: 'Monzo',
  ...overwrites
});
