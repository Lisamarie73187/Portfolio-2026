/**
 * Applies schema.sql to the Neon database in DATABASE_URL.
 *   node --env-file=.env node_modules/.bin/tsx scripts/apply-schema.ts
 * (or: npm run db:schema)
 */
import { readFileSync } from 'node:fs';
import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set.');
}

const sql = neon(connectionString);
const ddl = readFileSync(new URL('../schema.sql', import.meta.url), 'utf8');

async function main() {
  console.log('Applying schema.sql…');
  // Neon's http driver runs one statement per call; split on semicolons.
  const statements = ddl
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && !s.startsWith('--'));

  for (const statement of statements) {
    await sql.query(statement);
  }
  console.log(`✓ Applied ${statements.length} statement(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
