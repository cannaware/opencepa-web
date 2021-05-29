import { Db, MongoClient } from 'mongodb';

type MongoConnection = {
  client: MongoClient;
  db: Db;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      mongo: {
        conn: MongoConnection | null;
        promise: Promise<MongoConnection> | null;
      };
    }
  }
}

const { MONGODB_URI = 'mongodb://localhost:27017/opencepa-dev', MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

export const connectToDatabase = async (): Promise<MongoConnection> => {
  if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
  }

  if (cached?.conn) {
    return cached.conn;
  }

  if (!cached?.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client): MongoConnection => {
      return {
        client,
        db: client.db(MONGODB_DB),
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
