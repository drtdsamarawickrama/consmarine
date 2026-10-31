const sharp = require('sharp');
const fs = require('fs');

async function createFavicons() {
  const markBuffer = fs.readFileSync('test-extract.png');
  
  // 1. Transparent icon
  const transparent512 = await sharp(markBuffer)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();
  fs.writeFileSync('preview-transparent.png', transparent512);

  // 2. White rounded squircle badge (very popular for enterprise & modern browsers, ensures visibility in both dark & light tab bars)
  const size = 512;
  const radius = 104;
  const svgWhiteSquircle = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#071d33" flood-opacity="0.18" />
        </filter>
      </defs>
      <!-- Base squircle -->
      <rect x="16" y="16" width="${size - 32}" height="${size - 32}" rx="${radius}" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="8" />
    </svg>
  `);

  const markFit = await sharp(markBuffer)
    .resize(430, 240, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  const whiteSquircle512 = await sharp(svgWhiteSquircle)
    .composite([{ input: markFit, gravity: 'center' }])
    .png()
    .toBuffer();
  fs.writeFileSync('preview-squircle-white.png', whiteSquircle512);

  // 3. Midnight Navy squircle badge (#071d33) with crisp white inner card
  const svgNavyBadge = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="${size - 16}" height="${size - 16}" rx="${radius}" fill="#071d33" />
      <rect x="36" y="36" width="${size - 72}" height="${size - 72}" rx="${radius - 20}" fill="#ffffff" />
    </svg>
  `);
  const navyBadge512 = await sharp(svgNavyBadge)
    .composite([{ input: markFit, gravity: 'center' }])
    .png()
    .toBuffer();
  fs.writeFileSync('preview-squircle-navy.png', navyBadge512);

  // 4. Circular white badge
  const svgCircle = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="256" cy="256" r="240" fill="#ffffff" stroke="#e2e8f0" stroke-width="10" />
    </svg>
  `);
  const circle512 = await sharp(svgCircle)
    .composite([{ input: markFit, gravity: 'center' }])
    .png()
    .toBuffer();
  fs.writeFileSync('preview-circle.png', circle512);

  console.log("Previews created successfully!");
}

createFavicons().catch(console.error);

