#!/usr/bin/env node
/* eslint-env node */
// Simple responsive image generator using sharp
// Usage: node scripts/gen-responsive-images.js

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'public', 'images');
const outDir = path.join(inputDir, 'responsive');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const sizes = [480, 1024, 1920];

async function processFile(file) {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);
  for (const w of sizes) {
    const outName = `${base}-${w}${ext}`;
    const outPath = path.join(outDir, outName);
    try {
      await sharp(inputPath).resize({ width: w }).toFile(outPath);
      console.log(`Wrote ${outPath}`);
    } catch (err) {
      console.error(`Failed ${file} -> ${outName}:`, err.message);
    }
  }
}

async function run() {
  const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const f of files) {
    if (f === 'responsive') continue;
    await processFile(f);
  }
  console.log('responsive image generation complete');
}

run().catch(err => { console.error(err); process.exit(1); });
