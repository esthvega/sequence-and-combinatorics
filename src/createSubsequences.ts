import type { Request, Response } from 'express';
import { sequenceBodySchema } from './types/bodyTypes';
import verifyToken from './tools/verifyToken';
import insertSubsequence from './tools/insertSubsequence';
import getSubsequences from './utils/getSubsequences';

/**
 * Gets subsequences from a sequence
 * @function createSubsequences
 * @async
 */
export default async function createSubsequences(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const validToken = verifyToken(req);
    if (!validToken.ok) {
      res.status(401).json(validToken);
      return;
    }

    const bodySchema = sequenceBodySchema.safeParse(req.body);
    1;
    if (!bodySchema.success) {
      res.status(501).json({ ok: false, error: bodySchema.error });
      return;
    }

    const {
      data: { sequence },
    } = bodySchema;

    const subsequence = getSubsequences(sequence);
    if (subsequence.length) {
      const insertedRes = await insertSubsequence(subsequence);
      res.status(200).json({ ...insertedRes, subsequence });
    } else {
      res.status(200).json({
        ok: false,
        error:
          'Empty subsequence generated. The subsequence has not been saved in data base.',
      });
    }
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
