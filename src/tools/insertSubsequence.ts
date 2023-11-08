import type { BasicResponse } from '../types/responseTypes';
import getMongoDb from './db';

export default async function insertSubsequence(
  subsequence: number[][],
): Promise<BasicResponse> {
  try {
    const db = await getMongoDb();
    const sequenceCollection = db.collection('sequences');
    const res = await sequenceCollection.insertOne({
      subsequence,
      createdAt: new Date(),
    });
    if (res.insertedId) {
      return {
        ok: true,
      };
    }
    return {
      ok: false,
      error: 'Something went wrong inserting subsequence on data base',
    };
  } catch (err) {
    const { message, stack } = err as Error;
    return {
      ok: false,
      error: message || stack,
    };
  }
}
