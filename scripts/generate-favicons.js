const sharp = require('sharp');
const fs = require('fs');

async function buildFavicons() {
  const mark = fs.readFileSync('test-extract.png');
  
  // Create master 512x512 squircle
  const size = 512;
  const radius = 104;
  
  // High quality SVG container:
  // - Pure white background
  // - Subtle modern ocean-slate border (#d0dbe5)
  // - Very subtle elegant bottom-accent/shadow
  const svgBase = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#f8fafc" />
        </linearGradient>
      </defs>
      <!-- Squircle Base -->
      <rect x="14" y="14" width="${size - 28}" height="${size - 28}" rx="${radius}" fill="url(#cardGrad)" stroke="#cbd5e1" stroke-width="12" />
    </svg>
  `);

  // Maximize mark size inside the squircle:
  // The mark is 601x248. Let's fit it into 460x240 inside 512x512 with crisp positioning.
  const markResized = await sharp(mark)
    .resize(460, 240, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const master512 = await sharp(svgBase)
    .composite([{ input: markResized, gravity: 'center' }])
    .png()
    .toBuffer();

  // Generate all required standard sizes:
  // 1. icon.png (512x512 for PWA & high-res)
  fs.writeFileSync('public/icon-512.png', master512);
  
  // 2. 192x192 (Android / PWA)
  const icon192 = await sharp(master512).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192.png', icon192);

  // 3. Apple Touch Icon (180x180)
  const appleIcon = await sharp(master512).resize(180, 180).png().toBuffer();
  fs.writeFileSync('src/app/apple-icon.png', appleIcon);
  fs.writeFileSync('public/apple-touch-icon.png', appleIcon);

  // 4. Standard Next.js icon.png (32x32 & 48x48)
  const icon32 = await sharp(master512)
    .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8, m1: 1.2, m2: 0.5 })
    .png()
    .toBuffer();
  fs.writeFileSync('src/app/icon.png', icon32);
  fs.writeFileSync('public/icon.png', icon32);

  const icon16 = await sharp(master512)
    .resize(16, 16, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.0, m1: 1.5, m2: 0.5 })
    .png()
    .toBuffer();

  const icon48 = await sharp(master512)
    .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.7, m1: 1.1, m2: 0.5 })
    .png()
    .toBuffer();

  // 5. Multi-size favicon.ico containing 16x16, 32x32, and 48x48
  function buildIco(pngBuffers, sizes) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(pngBuffers.length, 4);
    let offset = 6 + 16 * pngBuffers.length;
    const entries = [];
    for (let i = 0; i < pngBuffers.length; i++) {
      const entry = Buffer.alloc(16);
      const size = sizes[i];
      entry.writeUInt8(size >= 256 ? 0 : size, 0);
      entry.writeUInt8(size >= 256 ? 0 : size, 1);
      entry.writeUInt8(0, 2);
      entry.writeUInt8(0, 3);
      entry.writeUInt16LE(1, 4);
      entry.writeUInt16LE(32, 6);
      entry.writeUInt32LE(pngBuffers[i].length, 8);
      entry.writeUInt32LE(offset, 12);
      entries.push(entry);
      offset += pngBuffers[i].length;
    }
    return Buffer.concat([header, ...entries, ...pngBuffers]);
  }

  const icoBuffer = buildIco([icon16, icon32, icon48], [16, 32, 48]);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  // Also save a preview of 32x32 scaled up for inspection
  const preview32 = await sharp(icon32).resize(256, 256, { kernel: sharp.kernel.nearest }).png().toBuffer();
  fs.writeFileSync('test-preview-32-scaled.png', preview32);

  console.log("All favicons generated successfully!");
}

buildFavicons().catch(console.error);
