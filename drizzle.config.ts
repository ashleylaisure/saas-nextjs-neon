import { defineConfig } from 'drizzle-kit';
import { env } from '@/drizzle/env/server';

export default defineConfig({
    out: './drizzle/migrations',
    schema: './drizzle/db/schema.ts',
    dialect: 'postgresql',
    strict: true,
    verbose: true,
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});
