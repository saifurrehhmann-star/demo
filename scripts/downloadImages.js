import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = {
  'villa-cleaning.jpg': 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
  'apartment-cleaning.jpg': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
  'move-in-out.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  'maid-service.jpg': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
  'holiday-homes.jpg': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
  'marble-clean.jpg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  'kitchen-detail.jpg': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80',
  'banner-services.jpg': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80',
  'banner-holiday.jpg': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
  'banner-pricing.jpg': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&q=80',
  'banner-about.jpg': 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80',
  'banner-contact.jpg': 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80',
  'banner-transformations.jpg': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80'
};

const outputDir = path.resolve(__dirname, '../public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(outputDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await downloadFile(url, dest);
      console.log(`✓ Saved ${filename}`);
    } catch (e) {
      console.error(`✗ Error downloading ${filename}:`, e.message);
    }
  }
  console.log('Finished downloading all images.');
}

run();
