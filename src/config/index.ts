import 'dotenv/config';

export const EXPIRATION_MILLISECONDS = process.env.EXPIRATION_MILLISECONDS ? parseInt(process.env.EXPIRATION_MILLISECONDS, 10) : 600 // 10 min

export const SECRET_KEY = process.env.SECRET_KEY || '';

export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';

export const DB_NAME = process.env.DB_NAME || 'sequences-db';