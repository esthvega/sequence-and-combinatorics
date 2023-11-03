import jwt from 'jsonwebtoken';
import type { Response, Request } from 'express';
import { EXPIRATION_MILLISECONDS, SECRET_KEY } from './config';

export default function getToken(_: Request, res: Response): void {
  try {
    const token = jwt.sign(
      { exp: Math.floor(Date.now() / 1000) + EXPIRATION_MILLISECONDS },
      SECRET_KEY,
    );
    res.status(200).json({ ok: true, token });
  } catch (err) {
    const { message, stack } = err as Error;
    res.status(501).json({ ok: false, error: message || stack });
  }
}
