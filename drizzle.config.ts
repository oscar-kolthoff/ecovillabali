import { defineConfig } from "drizzle-kit";

const host = process.env.DATABASE_HOST;
if (!host) {
  throw new Error("DATABASE_HOST (and the other DATABASE_* vars) are required to run drizzle commands");
}

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    host,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 4000,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: { minVersion: "TLSv1.2", rejectUnauthorized: true },
  },
});
