import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');

const IMAGES = [
  { name: 'interior.png', width: 1920, height: 1080, color: '#4A3A24' },
  { name: 'buildings.png', width: 800, height: 600, color: '#6B4E2A' },
  { name: 'loom.png', width: 800, height: 600, color: '#8A4B32' },
  { name: 'koler-portrait.png', width: 800, height: 600, color: '#7A6248' },
  { name: 'oak.png', width: 800, height: 1000, color: '#40522B' },
  { name: 'garden-spring.png', width: 800, height: 600, color: '#7A8B4A' },
  { name: 'harvest.png', width: 800, height: 600, color: '#B08A3E' },
  { name: 'rug-pattern.png', width: 1000, height: 1000, color: '#56617A' },
  { name: 'knits.png', width: 800, height: 600, color: '#C9B896' },
  { name: 'rugs.png', width: 800, height: 600, color: '#9A5B3C' },
  { name: 'oak-gallery.png', width: 800, height: 600, color: '#53412A' },
  { name: 'garden-gallery.png', width: 800, height: 600, color: '#5F7A3C' },
  { name: 'tools.png', width: 800, height: 600, color: '#5A564A' },
  { name: 'farm-work.png', width: 800, height: 600, color: '#6E5B3A' },
  { name: 'rug-wall.png', width: 800, height: 600, color: '#A05A38' },
  { name: 'slippers.png', width: 800, height: 600, color: '#9A8B70' },
];

const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  CRC_TABLE[n] = c >>> 0;
}

function crc32(bytes) {
  let c = 0xffffffff;
  for (const b of bytes) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

function solidPng(width, height, [r, g, b]) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const row = Buffer.alloc(1 + width * 3);
  for (let x = 0; x < width; x++) {
    row[1 + x * 3] = r;
    row[1 + x * 3 + 1] = g;
    row[1 + x * 3 + 2] = b;
  }
  const raw = Buffer.concat(Array(height).fill(row));
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

mkdirSync(outDir, { recursive: true });

for (const { name, width, height, color } of IMAGES) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(color.slice(i, i + 2), 16));
  const png = solidPng(width, height, [r, g, b]);
  writeFileSync(join(outDir, name), png);
  console.log(`${name}  ${width}x${height}  ${color}  ${(png.length / 1024).toFixed(1)} KiB`);
}
