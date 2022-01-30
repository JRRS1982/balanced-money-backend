import { deleteTransaction } from '../../Repositories/Transaction/deleteTransaction';

interface IDeleteInput {
  id: number;
}

export const deleteTransactionAction = async (
  body: IDeleteInput
): Promise<boolean> => {
  const { id } = body;
  const result = await deleteTransaction(id);

  if (result.affected && result.affected > 0) {
    return true;
  }

  return false;
};
