import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '@/drizzle/env/server';
import * as schema from './db/schema';

// const db = drizzle(process.env.DATABASE_URL);

const sql = neon(env.DATABASE_URL);
export const db = drizzle({ client: sql, schema });

