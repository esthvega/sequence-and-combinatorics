import type { Request, Response } from 'express';
import type { Subsequence } from './types/sequenceTypes';
import verifyToken from './tools/verifyToken';
import getOriginalSequence from './utils/getOriginalSequence';

export default function getSequence(req: Request, res: Response): void {
  try {
    const validToken = verifyToken(req);
    if (!validToken.ok) {
      res.status(401).json(validToken);
      return;
    }

    const body = req.body as Subsequence | undefined;

    if (!body?.subsequence || !body.subsequence.length) {
      res.status(501).json({ ok: false, error: 'Missing subsequence' });
      return;
    }
    const { subsequence } = req.body as Subsequence;
    const sequence = getOriginalSequence(subsequence);
    res.status(200).json({ ok: true, sequence });
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
