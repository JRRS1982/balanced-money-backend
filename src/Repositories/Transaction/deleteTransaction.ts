import { Transaction } from '../../Entities/Transaction.entity';
import { DeleteResult, getManager } from 'typeorm';

export const deleteTransaction = async (id: number): Promise<DeleteResult> => {
  return await getManager()
    .createQueryBuilder()
    .delete()
    .from(Transaction)
    .where('id = :id', { id })
    .execute();
};
