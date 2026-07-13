import { drizzle } from "drizzle-orm/mysql2";
import { inquiries } from "../../drizzle/schema";
import type { InsertInquiry } from "../../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
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
