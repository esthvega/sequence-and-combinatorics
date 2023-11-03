import type { Request, Response } from 'express';
import verifyToken from './tools/verifyToken';

export default function createSubsequence(req: Request, res: Response): void {
  try {
    const validToken = verifyToken(req);
    if (!validToken.ok) {
      res.status(401).json(validToken);
      return;
    }
    // TODO: Creación subsequence
    res.status(200).json({ ok: true });
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
