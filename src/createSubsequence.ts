import type { Request, Response } from 'express';
import type { BodySequence } from './types/sequenceTypes';
import verifyToken from './tools/verifyToken';
import insertSubsequence from './tools/insertSubsequence';
import getSubsequence from './utils/getSubsequence';

export default async function createSubsequence(req: Request, res: Response): Promise<void> {
  try {
    const validToken = verifyToken(req);
    if (!validToken.ok) {
      res.status(401).json(validToken);
      return;
    }

    const body = req.body as BodySequence | undefined;

    if (!body?.sequence || !body.sequence.length) {
      res.status(501).json({ ok: false, error: 'Missing sequence' });
      return;
    }
    const { sequence } = req.body as BodySequence;
    const subsequence = getSubsequence(sequence);
    await insertSubsequence(subsequence);
    res.status(200).json({ ok: true });
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
