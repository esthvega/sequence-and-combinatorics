import { MongoClient } from 'mongodb';
import { DB_NAME, MONGO_URL } from '../config';

let client: MongoClient;

function getClient() {
  if (!client) {
    client = new MongoClient(MONGO_URL);
  }
  return client;
}

export default async function getMongoDb() {
  const connection = await getClient().connect();
  return connection.db(DB_NAME);
}

export async function closeConnection() {
  await getClient().close();
}
