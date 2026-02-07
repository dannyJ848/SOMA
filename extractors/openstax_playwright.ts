import { chromium } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const OPENSTAX_BASE = 'https://openstax.org/books/anatomy-and-physiology-2e/pages/';
const CHAPTERS = [
  '1-introduction',
  '2-the-cell',
  '3-the-tissue-level-of-organization',
  '4-the-integumentary-system',
  '5-the-skeletal-system',
  '6-bone-tissue-and-the-skeletal-system',
  '7-axial-skeleton',
  '8-appendicular-skeleton',
  '9-joints',
  '10-muscle-tissue',
  '11-the-muscular-system',
  '12-the-nervous-system-and-nervous-tissue',
  '13-anatomy-of-the-nervous-system',
  '14-the-somatic-nervous-system',
  '15-the-autonomic-nervous-system',
  '16-the-neurological-exam',
  '17-the-endocrine-system',
  '18-the-cardiovascular-system-blood',
  '19-the-cardiovascular-system-the-heart',
  '20-the-cardiovascular-system-blood-vessels-and-circulation',
  '21-the-lymphatic-and-immune-system',
  '22-the-respiratory-system',
  '23-the-digestive-system',
  '24-metabolism-and-nutrition',
  '25-the-urinary-system',
  '26-fluid-electrolyte-and-acid-base-balance',
  '27-the-reproductive-system'
];

async function extractChapter(page: Page, chapterUrl: string, chapterNum: number) {
  console.log(`  Navigating to ${chapterUrl}...`);
  
  // Navigate with longer timeout and domcontentloaded instead of networkidle
  await page.goto(chapterUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  // Wait a bit for dynamic content
  await page.waitForTimeout(3000);
  
  // Try multiple selectors for content
  let contentSelector = '[data-testid="content"]';
  try {
    await page.waitForSelector(contentSelector, { timeout: 10000 });
  } catch {
    // Fallback to common content selectors
    const selectors = ['main', 'article', '.content', '#content', '[role="main"]', 'body'];
    for (const sel of selectors) {
      const exists = await page.$(sel);
      if (exists) {
        contentSelector = sel;
        break;
      }
    }
  }
  
  // Extract chapter title
  let title = '';
  try {
    title = await page.$eval('h1', el => el.textContent?.trim() || '');
  } catch {
    title = `Chapter ${chapterNum}`;
  }
  console.log(`  Title: ${title}`);
  
  // Extract all text content
  const content = await page.evaluate(() => {
    const sections: any[] = [];
    
    // Try to find sections
    const sectionElements = document.querySelectorAll('section, [data-testid="content-section"], .section, article');
    
    if (sectionElements.length === 0) {
      // Fallback: extract all paragraphs with context
      const allParagraphs = Array.from(document.querySelectorAll('p'));
      const textContent = allParagraphs.map(p => p.textContent?.trim()).filter(Boolean);
      sections.push({ heading: 'Content', paragraphs: textContent });
    } else {
      sectionElements.forEach(section => {
        const heading = section.querySelector('h2, h3, h4')?.textContent?.trim() || '';
        const paragraphs = Array.from(section.querySelectorAll('p')).map(p => p.textContent?.trim()).filter(Boolean);
        const figures = Array.from(section.querySelectorAll('figure, img')).map(fig => {
          const img = fig.tagName === 'IMG' ? fig : fig.querySelector('img');
          return {
            caption: fig.querySelector('figcaption')?.textContent?.trim() || '',
            imageUrl: img?.getAttribute('src') || ''
          };
        }).filter(f => f.imageUrl);
        
        if (heading || paragraphs.length > 0) {
          sections.push({ heading, paragraphs, figures });
        }
      });
    }
    
    return sections;
  });
  
  // Download all images
  const images: string[] = [];
  const figureElements = await page.$$('figure img, article img, main img, .content img');
  console.log(`  Found ${figureElements.length} images`);
  
  for (let i = 0; i < figureElements.length; i++) {
    const img = figureElements[i];
    const src = await img.getAttribute('src');
    if (src && !src.startsWith('data:') && !src.startsWith('blob:')) {
      const ext = path.extname(src.split('?')[0]) || '.jpg';
      const filename = `chapter${chapterNum}_fig${i}${ext}`;
      const filepath = path.join('images/openstax', filename);
      
      try {
        // Make sure URL is absolute
        const fullUrl = src.startsWith('http') ? src : new URL(src, chapterUrl).href;
        
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
          images.push(filepath);
          console.log(`    Downloaded: ${filename}`);
        }
      } catch (e) {
        console.error(`    Failed to download ${src}:`, (e as Error).message);
      }
    }
  }
  
  return { title, content, images };
}

async function main() {
  console.log('Starting OpenStax extraction...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await context.newPage();
  
  const results: any[] = [];
  
  for (let i = 0; i < CHAPTERS.length; i++) {
    const chapter = CHAPTERS[i];
    const chapterNum = i + 1;
    const url = `${OPENSTAX_BASE}${chapter}`;
    
    console.log(`[${chapterNum}/${CHAPTERS.length}] Extracting ${chapter}...`);
    
    try {
      const data = await extractChapter(page, url, chapterNum);
      results.push({
        chapter: chapterNum,
        title: data.title,
        url,
        sections: data.content,
        images: data.images
      });
      
      // Save chapter content
      fs.writeFileSync(
        `content/openstax/chapter_${chapterNum}.json`,
        JSON.stringify(data, null, 2)
      );
      console.log(`  ✓ Saved chapter_${chapterNum}.json\n`);
      
    } catch (error) {
      console.error(`  ✗ Failed Chapter ${chapterNum}:`, (error as Error).message, '\n');
      results.push({
        chapter: chapterNum,
        title: `Chapter ${chapterNum} - FAILED`,
        url,
        error: (error as Error).message
      });
    }
    
    // Be nice to the server
    await page.waitForTimeout(2000);
  }
  
  await browser.close();
  
  // Save summary
  fs.writeFileSync('content/openstax/extraction_summary.json', JSON.stringify(results, null, 2));
  console.log('\n✓ OpenStax extraction complete!');
  console.log(`  Successful: ${results.filter(r => !r.error).length}/${CHAPTERS.length} chapters`);
}

main().catch(console.error);
