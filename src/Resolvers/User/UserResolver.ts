import {
  deleteUserAction,
  saveUserAction,
  updateUserAction,
  getUserAction
} from 'Actions';
import { IUser, User } from 'Entities';
import { Args, Mutation, Resolver } from 'type-graphql';
import { DeleteUserArgs } from './DeleteUserArgs';
import { GetUserArgs } from './GetUserArgs';
import { SaveUserArgs } from './SaveUserArgs';
import { UpdateUserArgs } from './UpdateUserArgs';

/**
 * @Resolver is a decorator for type-graphql, it declares UserResolver as a graphql resolver
 * @Query is another decorator - it declares that users() will return an array of users
 */
@Resolver()
export class UserResolver {
  @Mutation(() => User)
  saveUser(@Args() saveArgs: SaveUserArgs): Promise<IUser | undefined> {
    return saveUserAction(saveArgs);
  }

  @Mutation(() => User)
  updateUser(
    @Args() updateUserArgs: UpdateUserArgs
  ): Promise<IUser | undefined> {
    return updateUserAction(updateUserArgs);
  }

  @Mutation(() => Boolean)
  deleteUser(@Args() deleteArgs: DeleteUserArgs): Promise<boolean> {
    return deleteUserAction(deleteArgs);
  }

  @Mutation(() => User)
  getUser(@Args() getUserArgs: GetUserArgs): Promise<IUser | undefined> {
    return getUserAction(getUserArgs);
  }
}
