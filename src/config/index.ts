import 'dotenv/config';

export const EXPIRATION_SECONDS = process.env.EXPIRATION_SECONDS ? parseInt(process.env.EXPIRATION_SECONDS, 10) : 600 // 10 min

export const SECRET_KEY = process.env.SECRET_KEY || '';

export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';

export const DB_NAME = process.env.DB_NAME || 'sequences-db';

export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8085 