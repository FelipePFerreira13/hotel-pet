import 'dotenv/config';
import { defineConfig } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';

export default defineConfig({
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  clientUrl: process.env.DATABASE_URL,
  driverOptions: {
    // most managed Postgres providers (Neon, Vercel Postgres, Supabase) require SSL
    ssl: process.env.DATABASE_SSL === 'false' ? false : { rejectUnauthorized: false },
  },
  extensions: [Migrator, SeedManager],
});
