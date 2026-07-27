import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const cols = await sql`
  select column_name, data_type from information_schema.columns
  where table_name = 'projects' order by ordinal_position
`;
const idx = await sql`select indexname from pg_indexes where tablename = 'projects'`;
const count = await sql`select count(*)::int as n from projects`;

console.log('columns:', cols.map((c) => c.column_name).join(', '));
console.log('indexes:', idx.map((i) => i.indexname).join(', '));
console.log('rows:', count[0].n);
