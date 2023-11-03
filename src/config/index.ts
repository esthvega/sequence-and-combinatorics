import 'dotenv/config';

export const EXPIRATION_MILLISECONDS = process.env.EXPIRATION_MILLISECONDS ? parseInt(process.env.EXPIRATION_MILLISECONDS, 10) : 600 // 10 min

export const SECRET_KEY = process.env.SECRET_KEY || '';