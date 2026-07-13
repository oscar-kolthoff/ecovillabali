import mysql from "mysql2";
import { drizzle } from "drizzle-orm/mysql2";
import { inquiries } from "../../drizzle/schema";
import type { InsertInquiry } from "../../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
// TiDB Serverless (and most managed MySQL) requires TLS, which a bare
// connection-string URI can't reliably express for mysql2 — so we build an
// explicit connection object instead.
function getDb() {
  if (!_db && process.env.DATABASE_HOST) {
    try {
      const pool = mysql.createPool({
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 4000,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        ssl: { minVersion: "TLSv1.2", rejectUnauthorized: true },
      });
      _db = drizzle(pool);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function createInquiry(inquiry: InsertInquiry) {
  const db = getDb();
  if (!db) {
    console.warn("[Database] Cannot create inquiry: database not available");
    throw new Error("Database not available");
  }

  try {
    return await db.insert(inquiries).values(inquiry);
  } catch (error) {
    console.error("[Database] Failed to create inquiry:", error);
    throw error;
  }
}
