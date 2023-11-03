import jwt from 'jsonwebtoken';
import type { Request } from 'express';
import type { BasicResponse } from '../types/responseTypes';
import { SECRET_KEY } from '../config';


export default function verifyToken(req: Request): BasicResponse {
  try {
    const token = req.headers?.authorization?.split(' ').pop() || '';
    jwt.verify(token, SECRET_KEY);
    return {
      ok: true,
    };
  } catch (err) {
    return {
      ok: false,
      error: 'Invalid token!',
    };
  }
}
