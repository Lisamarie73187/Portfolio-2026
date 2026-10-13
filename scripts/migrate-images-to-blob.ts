/**
 * One-off migration: downloads every project image currently hosted on S3
 * (referenced in `src/data/projects.ts`) and re-uploads it to Vercel Blob,
 * then rewrites `projects.ts` to point at the new Blob URLs.
 *
 * Idempotent-ish: re-running re-uploads (Blob dedupes by content hash via
 * `addRandomSuffix: false` would collide on name, so we let Blob add its
 * default random suffix — safe to re-run, just creates new blobs).
 *
 *   BLOB_READ_WRITE_TOKEN=... npx tsx scripts/migrate-images-to-blob.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { put } from '@vercel/blob';

const PROJECTS_FILE = new URL('../src/data/projects.ts', import.meta.url);

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  throw new Error('BLOB_READ_WRITE_TOKEN is not set — export it before running this script.');
}

const source = readFileSync(PROJECTS_FILE, 'utf8');

// Find every unique S3 URL referenced in the file.
const s3UrlPattern = /https?:\/\/lisaportfolio2024\.s3[^\s'"]+/g;
const urls = [...new Set(source.match(s3UrlPattern) ?? [])];

console.log(`Found ${urls.length} unique S3 image URLs.`);

const urlMap = new Map<string, string>();

for (const [index, url] of urls.entries()) {
  process.stdout.write(`  [${index + 1}/${urls.length}] ${url} … `);
  const res = await fetch(url);
  if (!res.ok) {
    console.log(`SKIPPED (HTTP ${res.status})`);
    continue;
  }
  const buffer = Buffer.from(await res.arrayBuffer());

  // Preserve a readable pathname: <folder>/<filename>, decoded from the URL.
  const pathname = decodeURIComponent(new URL(url).pathname.replace(/^\/+/, ''));

  const blob = await put(pathname, buffer, {
    access: 'public',
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  urlMap.set(url, blob.url);
  console.log(`-> ${blob.url}`);
}

// Rewrite projects.ts with the new URLs (longest URLs first so a prefix
// doesn't accidentally get replaced inside a longer, unreplaced URL).
let updated = source;
const sortedEntries = [...urlMap.entries()].sort((a, b) => b[0].length - a[0].length);
for (const [oldUrl, newUrl] of sortedEntries) {
  updated = updated.split(oldUrl).join(newUrl);
}

writeFileSync(PROJECTS_FILE, updated);
console.log(`\nDone. Rewrote ${urlMap.size} URLs in src/data/projects.ts.`);
console.log('Next steps: npm run typecheck && npm run seed');
