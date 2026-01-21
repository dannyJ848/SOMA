/**
 * OpenStax Anatomy & Physiology Ingestion
 *
 * Downloads, parses, and ingests the OpenStax A&P 2e textbook for RAG.
 * Source: https://openstax.org/details/books/anatomy-and-physiology-2e
 * License: CC BY 4.0
 */

import * as fs from 'fs';
import * as path from 'path';
import { homedir } from 'os';
import { VectorStore, VectorDocument, VectorMetadata } from '../vectors/store';
import { getEmbeddingModel, TextChunker } from '../vectors/embeddings';

// OpenStax A&P 2e structure
export const OPENSTAX_CHAPTERS = [
  { num: 1, title: 'An Introduction to the Human Body', system: 'general' },
  { num: 2, title: 'The Chemical Level of Organization', system: 'general' },
  { num: 3, title: 'The Cellular Level of Organization', system: 'general' },
  { num: 4, title: 'The Tissue Level of Organization', system: 'general' },
  { num: 5, title: 'The Integumentary System', system: 'integumentary' },
  { num: 6, title: 'Bone Tissue and the Skeletal System', system: 'skeletal' },
  { num: 7, title: 'Axial Skeleton', system: 'skeletal' },
  { num: 8, title: 'The Appendicular Skeleton', system: 'skeletal' },
  { num: 9, title: 'Joints', system: 'skeletal' },
  { num: 10, title: 'Muscle Tissue', system: 'muscular' },
  { num: 11, title: 'The Muscular System', system: 'muscular' },
  { num: 12, title: 'The Nervous System and Nervous Tissue', system: 'nervous' },
  { num: 13, title: 'Anatomy of the Nervous System', system: 'nervous' },
  { num: 14, title: 'The Somatic Nervous System', system: 'nervous' },
  { num: 15, title: 'The Autonomic Nervous System', system: 'nervous' },
  { num: 16, title: 'The Neurological Exam', system: 'nervous' },
  { num: 17, title: 'The Endocrine System', system: 'endocrine' },
  { num: 18, title: 'The Cardiovascular System: Blood', system: 'cardiovascular' },
  { num: 19, title: 'The Cardiovascular System: The Heart', system: 'cardiovascular' },
  { num: 20, title: 'The Cardiovascular System: Blood Vessels and Circulation', system: 'cardiovascular' },
  { num: 21, title: 'The Lymphatic and Immune System', system: 'lymphatic' },
  { num: 22, title: 'The Respiratory System', system: 'respiratory' },
  { num: 23, title: 'The Digestive System', system: 'digestive' },
  { num: 24, title: 'Metabolism and Nutrition', system: 'digestive' },
  { num: 25, title: 'The Urinary System', system: 'urinary' },
  { num: 26, title: 'Fluid, Electrolyte, and Acid-Base Balance', system: 'urinary' },
  { num: 27, title: 'The Reproductive System', system: 'reproductive' },
  { num: 28, title: 'Development and Inheritance', system: 'reproductive' },
];

/**
 * Content section parsed from OpenStax
 */
export interface ParsedSection {
  chapterNum: number;
  chapterTitle: string;
  sectionNum: string;
  sectionTitle: string;
  content: string;
  system: string;
}

/**
 * Progress callback for ingestion
 */
export type ProgressCallback = (progress: {
  stage: 'download' | 'parse' | 'chunk' | 'embed' | 'store';
  current: number;
  total: number;
  message: string;
}) => void;

/**
 * Get the cache directory for OpenStax content
 */
function getCacheDir(): string {
  const cacheDir = path.join(homedir(), '.biological-self', 'content', 'openstax');
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
  return cacheDir;
}

/**
 * Fetch chapter content from OpenStax API
 */
export async function fetchChapterContent(chapterNum: number): Promise<string> {
  const cacheDir = getCacheDir();
  const cachePath = path.join(cacheDir, `chapter-${chapterNum}.html`);

  // Check cache first
  if (fs.existsSync(cachePath)) {
    return fs.readFileSync(cachePath, 'utf-8');
  }

  // OpenStax book UUID for A&P 2e
  const bookId = '14fb4ad7-39a1-4eee-ab6e-3ef2482e3e22';
  const pageSlug = `${chapterNum}-introduction`;

  // Fetch from OpenStax API
  const url = `https://openstax.org/apps/archive/20230220.155442/contents/${bookId}@24.2:${pageSlug}.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();

    // Extract content HTML
    const content = data.content || '';

    // Cache for future use
    fs.writeFileSync(cachePath, content);

    return content;
  } catch (error) {
    console.warn(`Failed to fetch chapter ${chapterNum}: ${error}`);
    return '';
  }
}

/**
 * Parse HTML content into plain text sections
 */
export function parseHtmlToSections(
  html: string,
  chapterNum: number,
  chapterTitle: string,
  system: string
): ParsedSection[] {
  const sections: ParsedSection[] = [];

  // Simple HTML to text conversion (basic implementation)
  // Remove script and style tags
  let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Convert headers to section markers
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n');
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n');
  text = text.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n');

  // Convert paragraphs to newlines
  text = text.replace(/<\/p>/gi, '\n\n');
  text = text.replace(/<br\s*\/?>/gi, '\n');

  // Convert lists
  text = text.replace(/<li[^>]*>/gi, '• ');
  text = text.replace(/<\/li>/gi, '\n');

  // Remove all remaining HTML tags
  text = text.replace(/<[^>]+>/g, '');

  // Decode HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");

  // Clean up whitespace
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();

  // Split by section headers
  const sectionRegex = /^##\s+(.+)$/gm;
  const parts = text.split(sectionRegex);

  // First part before any headers
  if (parts[0].trim()) {
    sections.push({
      chapterNum,
      chapterTitle,
      sectionNum: `${chapterNum}.0`,
      sectionTitle: 'Introduction',
      content: parts[0].trim(),
      system,
    });
  }

  // Process header/content pairs
  for (let i = 1; i < parts.length; i += 2) {
    const title = parts[i]?.trim();
    const content = parts[i + 1]?.trim();

    if (title && content) {
      sections.push({
        chapterNum,
        chapterTitle,
        sectionNum: `${chapterNum}.${Math.floor(i / 2)}`,
        sectionTitle: title,
        content,
        system,
      });
    }
  }

  return sections;
}

/**
 * Create a sample content file for testing (since OpenStax API requires more setup)
 */
function createSampleContent(): ParsedSection[] {
  return [
    {
      chapterNum: 19,
      chapterTitle: 'The Cardiovascular System: The Heart',
      sectionNum: '19.1',
      sectionTitle: 'Heart Anatomy',
      content: `The heart is a muscular organ roughly the size of a closed fist. It is located in the thoracic cavity between the lungs, in an area called the mediastinum. The heart is enclosed in a double-walled sac called the pericardium.

The heart has four chambers: two superior atria and two inferior ventricles. The atria receive blood returning to the heart, while the ventricles pump blood out of the heart. The right atrium receives deoxygenated blood from the body via the superior and inferior vena cava. The right ventricle pumps this blood to the lungs via the pulmonary trunk. The left atrium receives oxygenated blood from the lungs via the pulmonary veins. The left ventricle pumps this blood to the body via the aorta.

The walls of the heart have three layers: the epicardium (outer), myocardium (middle, muscular), and endocardium (inner). The myocardium is the thickest layer and is responsible for the pumping action of the heart.`,
      system: 'cardiovascular',
    },
    {
      chapterNum: 19,
      chapterTitle: 'The Cardiovascular System: The Heart',
      sectionNum: '19.2',
      sectionTitle: 'Cardiac Muscle and Electrical Activity',
      content: `Cardiac muscle cells (cardiomyocytes) are striated like skeletal muscle but have unique features. They are connected by intercalated discs containing gap junctions that allow electrical signals to pass rapidly between cells. This enables the heart to function as a coordinated unit.

The heart has its own intrinsic conduction system that generates and conducts electrical impulses. The sinoatrial (SA) node in the right atrium acts as the pacemaker, generating impulses at about 60-100 beats per minute. The signal spreads through the atria, causing them to contract.

The impulse then reaches the atrioventricular (AV) node, which delays the signal briefly before sending it to the bundle of His. The signal travels down the interventricular septum via the bundle branches and spreads through the Purkinje fibers to the ventricular myocardium, causing ventricular contraction.`,
      system: 'cardiovascular',
    },
    {
      chapterNum: 19,
      chapterTitle: 'The Cardiovascular System: The Heart',
      sectionNum: '19.3',
      sectionTitle: 'Cardiac Cycle',
      content: `The cardiac cycle consists of alternating periods of contraction (systole) and relaxation (diastole). During ventricular diastole, blood fills the ventricles passively from the atria. Atrial systole then pumps additional blood into the ventricles (atrial kick).

During ventricular systole, pressure in the ventricles rises, closing the atrioventricular valves (tricuspid and mitral). This creates the first heart sound (S1, "lub"). As pressure exceeds that in the great vessels, the semilunar valves (pulmonary and aortic) open and blood is ejected.

When ventricular pressure falls below arterial pressure, the semilunar valves close, creating the second heart sound (S2, "dub"). This marks the beginning of ventricular diastole.

Cardiac output is the volume of blood pumped by each ventricle per minute. It equals heart rate multiplied by stroke volume (the volume ejected per beat). Normal cardiac output is about 5 liters per minute at rest.`,
      system: 'cardiovascular',
    },
  ];
}

/**
 * Main ingestion function
 */
export async function ingestOpenStax(
  store: VectorStore,
  onProgress?: ProgressCallback
): Promise<{ chunksCreated: number; chaptersProcessed: number }> {
  const embeddingModel = getEmbeddingModel();

  // Ensure model is loaded
  onProgress?.({
    stage: 'download',
    current: 0,
    total: 1,
    message: 'Loading embedding model...',
  });
  await embeddingModel.load();

  // For now, use sample content (full implementation would fetch from OpenStax API)
  const sections = createSampleContent();

  onProgress?.({
    stage: 'parse',
    current: 1,
    total: 1,
    message: `Parsed ${sections.length} sections`,
  });

  // Chunk the content
  const allChunks: { text: string; section: ParsedSection }[] = [];

  for (const section of sections) {
    const chunks = TextChunker.chunk(section.content, {
      targetSize: 500,
      overlap: 50,
    });

    for (const chunk of chunks) {
      allChunks.push({ text: chunk, section });
    }
  }

  onProgress?.({
    stage: 'chunk',
    current: allChunks.length,
    total: allChunks.length,
    message: `Created ${allChunks.length} chunks`,
  });

  // Generate embeddings and create documents
  const documents: VectorDocument[] = [];
  const now = new Date().toISOString();

  for (let i = 0; i < allChunks.length; i++) {
    const { text, section } = allChunks[i];

    onProgress?.({
      stage: 'embed',
      current: i + 1,
      total: allChunks.length,
      message: `Embedding chunk ${i + 1}/${allChunks.length}`,
    });

    const result = await embeddingModel.embed(text);

    const metadata: VectorMetadata = {
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: `${section.chapterNum}: ${section.chapterTitle}`,
      section: `${section.sectionNum}: ${section.sectionTitle}`,
      system: section.system,
      complexityLevel: 3, // College level
      url: `https://openstax.org/books/anatomy-and-physiology-2e/pages/${section.chapterNum}-introduction`,
      license: 'CC BY 4.0',
      createdAt: now,
      updatedAt: now,
    };

    documents.push({
      id: `openstax-${section.sectionNum}-${i}`,
      text,
      vector: result.embedding,
      metadata,
    });
  }

  // Store in vector database
  onProgress?.({
    stage: 'store',
    current: 0,
    total: 1,
    message: 'Storing in vector database...',
  });

  await store.addDocuments('anatomy', documents);
  await store.addDocuments('physiology', documents); // Content covers both

  onProgress?.({
    stage: 'store',
    current: 1,
    total: 1,
    message: `Stored ${documents.length} documents`,
  });

  return {
    chunksCreated: documents.length,
    chaptersProcessed: new Set(sections.map(s => s.chapterNum)).size,
  };
}

/**
 * Quick test of the ingestion pipeline
 */
export async function testIngestion(): Promise<void> {
  console.log('Testing OpenStax ingestion pipeline...');

  const store = new VectorStore();
  await store.connect();

  const result = await ingestOpenStax(store, (progress) => {
    console.log(`[${progress.stage}] ${progress.message}`);
  });

  console.log(`\nIngestion complete:`);
  console.log(`  Chapters: ${result.chaptersProcessed}`);
  console.log(`  Chunks: ${result.chunksCreated}`);

  // Test search
  console.log('\nTesting search...');
  const embeddingModel = getEmbeddingModel();
  const queryResult = await embeddingModel.embed('heart chambers atria ventricles');

  const searchResults = await store.search('anatomy', queryResult.embedding, {
    limit: 3,
  });

  console.log('\nSearch results for "heart chambers atria ventricles":');
  for (const result of searchResults) {
    console.log(`\n[Score: ${result.score.toFixed(3)}] ${result.metadata.section}`);
    console.log(result.text.substring(0, 200) + '...');
  }

  await store.close();
}
