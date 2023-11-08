import type { Request, Response } from 'express';
import { subsequenceBodySchema } from './types/bodyTypes';
import verifyToken from './tools/verifyToken';
import getOriginalSequence from './utils/getOriginalSequence';


/**
 * Gets original sequence from a subsequences
 * @function getSequence
 */
export default function getSequence(req: Request, res: Response): void {
  try {
    const validToken = verifyToken(req);
    if (!validToken.ok) {
      res.status(401).json(validToken);
      return;
    }

    const bodySchema = subsequenceBodySchema.safeParse(req.body);

    if (!bodySchema.success) {
      res.status(501).json({ ok: false, error: bodySchema.error });
      return;
    }

    const {
      data: { subsequence },
    } = bodySchema;

    const sequence = getOriginalSequence(subsequence);
    res.status(200).json({ ok: true, sequence });
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
