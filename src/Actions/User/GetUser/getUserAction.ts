import { IUser } from '../../../Entities';
import { getUser } from '../../../Repositories/User/getUser';

interface IGetUserInput {
  id: number;
}

export const getUserAction = async (
  body: IGetUserInput
): Promise<IUser | undefined> => {
  return await getUser(body.id);
};
