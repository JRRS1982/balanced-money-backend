import { User } from 'Entities';
import { DeleteResult, getManager } from 'typeorm';

export const deleteUser = async (id: number): Promise<DeleteResult> => {
  return await getManager()
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('id = :id', { id })
    .execute();
};
