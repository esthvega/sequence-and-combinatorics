import type { Request, Response } from 'express';
import verifyToken from './tools/verifyToken';

/**
 * Checks jwt token validation
 * @function getToken
 */
export default function checkToken(req: Request, res: Response): void {
  try {
    const validToken = verifyToken(req);
    if (validToken.ok) {
      res.status(200).json({ ok: true });
      return;
    }
    res.status(401).json(validToken);
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
