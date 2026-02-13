import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://www.pathologyoutlines.com';

// Top level categories
const CATEGORIES = [
  '/topic/adenomahp.html',
  '/topic/adrenalgross.html',
  '/topic/breastbenign.html',
  '/topic/cellulargeneral.html',
  '/topic/cnstumor.html',
  '/topic/earnonneoplastic.html',
  '/topic/endocrinegeneral.html',
  '/topic/esophagusnonneoplastic.html',
  '/topic/eyegeneral.html',
  '/topic/gallbladdergeneral.html',
  '/topic/gistgeneral.html',
  '/topic/heartgeneral.html',
  '/topic/hemepathgeneral.html',
  '/topic/infectiousgeneral.html',
  '/topic/kidneygeneral.html',
  '/topic/larynxgeneral.html',
  '/topic/livergeneral.html',
  '/topic/lunggeneral.html',
  '/topic/lymphnodenonneoplastic.html',
  '/topic/mediastinumgeneral.html',
  '/topic/mesotheliomageneral.html',
  '/topic/metastaticgeneral.html',
  '/topic/moleculargeneral.html',
  '/topic/mouthgeneral.html',
  '/topic/musclegeneral.html',
  '/topic/nasalgeneral.html',
  '/topic/nervegeneral.html',
  '/topic/ovarygeneral.html',
  '/topic/pancreasgeneral.html',
  '/topic/parathyroidgeneral.html',
  '/topic/pediactricgeneral.html',
  '/topic/penisgeneral.html',
  '/topic/peritoneumgeneral.html',
  '/topic/pituitarygeneral.html',
  '/topic/placentageneral.html',
  '/topic/pleurageneral.html',
  '/topic/prostategeneral.html',
  '/topic/salivaryglandgeneral.html',
  '/topic/seromageneral.html',
  '/topic/skeletalgeneral.html',
  '/topic/skingeneral.html',
  '/topic/softtissuegeneral.html',
  '/topic/spermcordgeneral.html',
  '/topic/stomachgeneral.html',
  '/topic/testisgeneral.html',
  '/topic/thymusgeneral.html',
  '/topic/thyroidgeneral.html',
  '/topic/trophoblasticgeneral.html',
  '/topic/uretergeneral.html',
  '/topic/urethrageneral.html',
  '/topic/urinarygeneral.html',
  '/topic/vaginageneral.html',
  '/topic/vasculargeneral.html',
  '/topic/vulvageneral.html'
];

async function extractCategory(page: any, categoryUrl: string) {
  const fullUrl = `${BASE_URL}${categoryUrl}`;
  console.log(`  Navigating to ${fullUrl}...`);
  
  // Navigate with longer timeout
  try {
    await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  } catch (e) {
    // Try with load event instead
    await page.goto(fullUrl, { waitUntil: 'load', timeout: 60000 });
  }
  
  // Wait for any content to load
  await page.waitForTimeout(3000);
  
  // Try to find content with multiple selectors
  let foundContent = false;
  const selectors = ['.content', '#content', 'main', 'article', '[role="main"]', 'body'];
  for (const selector of selectors) {
    try {
      await page.waitForSelector(selector, { timeout: 5000 });
      foundContent = true;
      break;
    } catch {
      continue;
    }
  }
  
  if (!foundContent) {
    console.log('  Warning: Could not find content container');
  }
  
  // Extract all images on the page
  const images = await page.evaluate(() => {
    const imgs: any[] = [];
    document.querySelectorAll('img').forEach(img => {
      if (img.src && (img.src.includes('pathologyoutlines.com') || img.src.startsWith('/'))) {
        imgs.push({
          src: img.src,
          alt: img.alt || '',
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      }
    });
    return imgs;
  });
  console.log(`  Found ${images.length} images`);
  
  // Extract text content
  const content = await page.evaluate(() => {
    const sections: any[] = [];
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
      const text = heading.textContent?.trim() || '';
      const nextEl = heading.nextElementSibling;
      const paragraph = nextEl?.tagName === 'P' ? nextEl.textContent?.trim() : '';
      if (text) {
        sections.push({ heading: text, paragraph });
      }
    });
    return sections;
  });
  console.log(`  Found ${content.length} sections`);
  
  return { images, content, url: fullUrl };
}

async function main() {
  console.log('Starting Pathology Outlines extraction...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await context.newPage();
  
  const results: any[] = [];
  
  // Process first 10 categories
  const toProcess = CATEGORIES.slice(0, 10);
  
  for (let i = 0; i < toProcess.length; i++) {
    const category = toProcess[i];
    const categoryName = path.basename(category, '.html');
    console.log(`[${i + 1}/${toProcess.length}] Extracting ${categoryName}...`);
    
    try {
      const data = await extractCategory(page, category);
      
      // Download images
      const imagePaths: string[] = [];
      for (let j = 0; j < data.images.length; j++) {
        const img = data.images[j];
        const ext = path.extname(img.src.split('?')[0]) || '.jpg';
        const filename = `${categoryName}_${j}${ext}`;
        const filepath = path.join('images/pathology/pathologyoutlines', filename);
        
        try {
          // Make sure URL is absolute
          const fullUrl = img.src.startsWith('http') ? img.src : `${BASE_URL}${img.src}`;
          
          const response = await page.evaluate(async (url) => {
            try {
              const res = await fetch(url);
              if (!res.ok) return null;
              const blob = await res.blob();
              return Array.from(new Uint8Array(await blob.arrayBuffer()));
            } catch {
              return null;
            }
          }, fullUrl);
          
          if (response) {
            fs.writeFileSync(filepath, Buffer.from(response));
            imagePaths.push(filepath);
            console.log(`    Downloaded: ${filename}`);
          }
        } catch (e) {
          console.error(`    Failed to download ${img.src}`);
        }
      }
      
      // Save metadata
      const result = { ...data, imagePaths };
      fs.writeFileSync(
        `content/pathology/pathologyoutlines/${categoryName}.json`,
        JSON.stringify(result, null, 2)
      );
      results.push({ category: categoryName, success: true, images: imagePaths.length });
      console.log(`  ✓ Saved ${categoryName}.json\n`);
      
    } catch (error) {
      console.error(`  ✗ Failed ${categoryName}:`, (error as Error).message, '\n');
      results.push({ category: categoryName, success: false, error: (error as Error).message });
    }
    
    await page.waitForTimeout(3000); // Be nice
  }
  
  await browser.close();
  
  // Save summary
  fs.writeFileSync(
    'content/pathology/pathologyoutlines/extraction_summary.json',
    JSON.stringify(results, null, 2)
  );
  
  console.log('\n✓ Pathology Outlines extraction complete!');
  console.log(`  Successful: ${results.filter(r => r.success).length}/${toProcess.length} categories`);
}

main().catch(console.error);
