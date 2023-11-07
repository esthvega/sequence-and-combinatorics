import type { Request, Response } from 'express';
import type { Sequence } from './types/sequenceTypes';
import verifyToken from './tools/verifyToken';
import insertSubsequence from './tools/insertSubsequence';
import getSubsequence from './utils/getSubsequences';

export default async function createSubsequences(req: Request, res: Response): Promise<void> {
  try {
    const validToken = verifyToken(req);
    if (!validToken.ok) {
      res.status(401).json(validToken);
      return;
    }

    const body = req.body as Sequence | undefined;

    if (!body?.sequence || !body.sequence.length) {
      res.status(501).json({ ok: false, error: 'Missing sequence' });
      return;
    }
    const { sequence } = req.body as Sequence;
    const subsequence = getSubsequence(sequence);
    const insertedRes = await insertSubsequence(subsequence);
    res.status(200).json({ ...insertedRes, subsequence });
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
