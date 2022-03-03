import { IUser } from 'Entities';
import { getUser, updateUser } from 'Repositories/User';

// Properties of the user that we can / want to update
export enum UpdateUserOptions {
  EMAIL = 'email',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  PASSWORD = 'password'
}

export interface IUpdateInput {
  id: number;
  field: UpdateUserOptions;
  value: string;
}

export const updateUserAction = async (
  body: IUpdateInput
): Promise<IUser | undefined> => {
  // TODO: Add better validation
  const { id, field, value } = body;
  const user = await getUser(id);

  if (!user) {
    // TODO add some logging to inform why not updated
    return;
  }

  switch (field) {
    case UpdateUserOptions.EMAIL:
      user.email = value;
      break;
    case UpdateUserOptions.FIRST_NAME:
      user.firstName = value;
      break;
    case UpdateUserOptions.LAST_NAME:
      user.lastName = value;
      break;
    case UpdateUserOptions.PASSWORD:
      user.password = value;
      break;
    default:
      break;
  }

  return await updateUser(user);
};
