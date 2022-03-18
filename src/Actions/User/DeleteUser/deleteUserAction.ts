import { deleteUser } from '../../../Repositories/User';

interface IDeleteInput {
  id: number;
}

export const deleteUserAction = async (
  body: IDeleteInput
): Promise<boolean> => {
  const { id } = body;
  const result = await deleteUser(id);

  if (result.affected && result.affected > 0) {
    return true;
  }

  return false;
};
