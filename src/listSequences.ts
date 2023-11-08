import type { Request, Response } from 'express';
import verifyToken from './tools/verifyToken';
import getSequences from './utils/getSequences';


/**
 * Gets sequences and subsequences from data base
 * @function listSequences
 * @async
 */
export default async function listSequences(req: Request, res: Response): Promise<void> {
  try {
    const validToken = verifyToken(req);
    if (!validToken.ok) {
      res.status(401).json(validToken);
      return;
    }

    const response = await getSequences();
    res.status(200).json({ ...response });
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
