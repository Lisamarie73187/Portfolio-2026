/**
 * Uploads one or more local image files to the Vercel Blob store and prints
 * their public URLs. Does not touch `projects.ts` — paste the printed URLs
 * into the right fields yourself (or hand them to Claude to wire in).
 *
 *   npx tsx scripts/upload-image.ts <blobFolder> <file1> [file2] [...]
 *
 * Example:
 *   npx tsx scripts/upload-image.ts meal-prep \
 *     ~/Desktop/mealPlanner/MealPlannerOne.png \
 *     ~/Desktop/mealPlanner/MealPlannerTwo.png
 */
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { put } from '@vercel/blob';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  throw new Error('BLOB_READ_WRITE_TOKEN is not set — export it before running this script.');
}

const [folder, ...files] = process.argv.slice(2);
if (!folder || files.length === 0) {
  throw new Error('Usage: npx tsx scripts/upload-image.ts <blobFolder> <file1> [file2] [...]');
}

for (const filePath of files) {
  const buffer = readFileSync(filePath);
  const pathname = `${folder}/${basename(filePath)}`;

  const blob = await put(pathname, buffer, {
    access: 'public',
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  console.log(`${filePath} -> ${blob.url}`);
}
