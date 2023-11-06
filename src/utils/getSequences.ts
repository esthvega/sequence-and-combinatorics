import type { Subsequence } from '../types/sequenceTypes';
import type { SequencesResponse, BasicResponse } from '../types/responseTypes';
import getMongoDb from '../tools/db';
import getOriginalSequence from './getOriginalSequence';

export default async function getSequences(): Promise<SequencesResponse | BasicResponse> {
  try {
    const db = await getMongoDb();
    const sequenceCollection = db.collection('sequences');
    const subsequences = await sequenceCollection
      .find<Subsequence>({}, { limit: 10, sort: { createdAt: -1 } })
      .toArray();

    return {
      ok: true,
      data: subsequences.map(({ subsequence }) => ({
        sequence: getOriginalSequence(subsequence),
        subsequence,
      })),
    };
  } catch (err) {
    const { message, stack } = err as Error;
    return {
      ok: false,
      error: message || stack,
    };
  }
}
