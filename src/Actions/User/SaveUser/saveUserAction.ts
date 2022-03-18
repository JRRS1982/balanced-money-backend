import { IUser } from '../../../Entities';
import { isString } from 'lodash';
import { saveUser } from '../../../Repositories/User';

export interface ISaveUserInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const isValid = (body: ISaveUserInput): boolean => {
  // TODO - need better validation than this - add something to check that the string is longer than 0 and can add a email checker to check that the email is a format and password is a minimum length and quality.
  // TODO - if not valid would like to return why its not valid - so the gql response lets the requester know why it failed.
  return (
    isString(body.email) &&
    isString(body.firstName) &&
    isString(body.lastName) &&
    isString(body.password)
  );
};

export const saveUserAction = async (
  body: ISaveUserInput
): Promise<IUser | undefined> => {
  const { email, firstName, lastName, password } = body;

  if (!isValid(body)) {
    // TODO add some custom logging
    return;
  }

  // TODO going to want to hash the PII data here
  return await saveUser({ email, firstName, lastName, password });
};
