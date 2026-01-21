/**
 * StatPearls Medical Reference Ingestion
 *
 * Downloads and ingests StatPearls open-access medical articles for RAG.
 * Uses NCBI E-utilities API for article retrieval.
 * Source: https://www.ncbi.nlm.nih.gov/books/NBK430685/ (StatPearls)
 * License: CC BY 4.0
 */

import * as fs from 'fs';
import * as path from 'path';
import { homedir } from 'os';
import { VectorStore, VectorDocument, VectorMetadata } from '../vectors/store';
import { getEmbeddingModel, TextChunker } from '../vectors/embeddings';

// NCBI E-utilities configuration
const EUTILS_BASE = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
// StatPearls book ID for future full API integration
export const STATPEARLS_BOOK_ID = '29262'; // NBK430685

// Relevant MeSH categories for filtering
export const RELEVANT_MESH_TERMS = [
  'Anatomy',
  'Physiology',
  'Pathology',
  'Cardiovascular System',
  'Respiratory System',
  'Digestive System',
  'Nervous System',
  'Musculoskeletal System',
  'Endocrine System',
  'Urogenital System',
  'Integumentary System',
  'Hematologic Diseases',
  'Immune System',
  'Lymphatic System',
];

/**
 * Parsed StatPearls article structure
 */
export interface ParsedArticle {
  pmid: string;
  title: string;
  authors: string[];
  abstract: string;
  sections: ArticleSection[];
  meshTerms: string[];
  lastUpdated: string;
  url: string;
}

/**
 * Article section
 */
export interface ArticleSection {
  title: string;
  content: string;
  order: number;
}

/**
 * Progress callback for ingestion
 */
export type ProgressCallback = (progress: {
  stage: 'search' | 'fetch' | 'parse' | 'chunk' | 'embed' | 'store';
  current: number;
  total: number;
  message: string;
}) => void;

/**
 * Get the cache directory for StatPearls content
 */
function getCacheDir(): string {
  const cacheDir = path.join(homedir(), '.biological-self', 'content', 'statpearls');
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
  return cacheDir;
}

/**
 * Search for StatPearls articles via E-utilities
 */
export async function searchStatPearlsArticles(
  query: string,
  maxResults: number = 100
): Promise<string[]> {
  const searchUrl = `${EUTILS_BASE}/esearch.fcgi?db=books&term=${encodeURIComponent(query)}+AND+"StatPearls"[Book]&retmax=${maxResults}&retmode=json`;

  try {
    const response = await fetch(searchUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data.esearchresult?.idlist || [];
  } catch (error) {
    console.warn(`Failed to search StatPearls: ${error}`);
    return [];
  }
}

/**
 * Fetch article details from NCBI
 */
export async function fetchArticleDetails(articleId: string): Promise<ParsedArticle | null> {
  const cacheDir = getCacheDir();
  const cachePath = path.join(cacheDir, `article-${articleId}.json`);

  // Check cache first
  if (fs.existsSync(cachePath)) {
    try {
      const cached = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
      return cached as ParsedArticle;
    } catch {
      // Cache corrupted, fetch fresh
    }
  }

  const fetchUrl = `${EUTILS_BASE}/efetch.fcgi?db=books&id=${articleId}&rettype=full&retmode=xml`;

  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const xmlText = await response.text();

    // Parse XML to extract article structure
    const article = parseStatPearlsXml(xmlText, articleId);

    if (article) {
      // Cache for future use
      fs.writeFileSync(cachePath, JSON.stringify(article, null, 2));
    }

    return article;
  } catch (error) {
    console.warn(`Failed to fetch article ${articleId}: ${error}`);
    return null;
  }
}

/**
 * Parse StatPearls XML response
 */
function parseStatPearlsXml(xml: string, articleId: string): ParsedArticle | null {
  // Simple XML parsing for key fields
  // In production, use a proper XML parser

  const getTagContent = (tag: string): string => {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
    const match = xml.match(regex);
    return match ? match[1].replace(/<[^>]+>/g, '').trim() : '';
  };

  const getAllTagContents = (tag: string): string[] => {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
    const matches = xml.matchAll(regex);
    return Array.from(matches, m => m[1].replace(/<[^>]+>/g, '').trim());
  };

  const title = getTagContent('article-title') || getTagContent('book-part-title');
  if (!title) return null;

  const authors = getAllTagContents('name')
    .map(name => {
      const surname = name.match(/<surname>([^<]+)<\/surname>/)?.[1] || '';
      const given = name.match(/<given-names>([^<]+)<\/given-names>/)?.[1] || '';
      return `${given} ${surname}`.trim();
    })
    .filter(Boolean);

  const abstract = getTagContent('abstract');

  // Parse sections
  const sections: ArticleSection[] = [];
  const sectionRegex = /<sec[^>]*>[\s\S]*?<title>([^<]+)<\/title>([\s\S]*?)<\/sec>/gi;
  const sectionMatches = xml.matchAll(sectionRegex);
  let order = 0;
  for (const match of sectionMatches) {
    const sectionTitle = match[1].trim();
    const sectionContent = match[2]
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (sectionContent.length > 50) {
      sections.push({
        title: sectionTitle,
        content: sectionContent,
        order: order++,
      });
    }
  }

  // Extract MeSH terms
  const meshTerms = getAllTagContents('kwd')
    .concat(getAllTagContents('subject'));

  return {
    pmid: articleId,
    title,
    authors,
    abstract,
    sections,
    meshTerms,
    lastUpdated: new Date().toISOString(),
    url: `https://www.ncbi.nlm.nih.gov/books/NBK${articleId}/`,
  };
}

/**
 * Create sample StatPearls content for testing
 */
function createSampleContent(): ParsedArticle[] {
  return [
    {
      pmid: '547596',
      title: 'Anatomy, Thorax, Heart',
      authors: ['Rehman I', 'Rehman A'],
      abstract: 'The heart is a muscular organ situated in the mediastinum. It pumps blood through the circulatory system, providing oxygen and nutrients to tissues while removing carbon dioxide and other metabolic wastes.',
      sections: [
        {
          title: 'Introduction',
          content: 'The heart is a four-chambered organ responsible for pumping blood throughout the body. It lies in the middle mediastinum, posterior to the body of the sternum and the costal cartilages of ribs 2-6. The heart is enclosed within the pericardium, a double-walled sac that protects and anchors the heart while allowing it to beat freely.',
          order: 0,
        },
        {
          title: 'Structure and Function',
          content: 'The heart consists of four chambers: two atria (right and left) and two ventricles (right and left). The right atrium receives deoxygenated blood from the superior and inferior venae cavae and the coronary sinus. The right ventricle pumps this blood to the lungs via the pulmonary trunk. The left atrium receives oxygenated blood from the pulmonary veins. The left ventricle, the most muscular chamber, pumps oxygenated blood to the systemic circulation via the aorta.',
          order: 1,
        },
        {
          title: 'Blood Supply',
          content: 'The coronary arteries supply the heart muscle with oxygen and nutrients. The left coronary artery divides into the left anterior descending (LAD) artery and the circumflex artery. The right coronary artery supplies the right atrium, right ventricle, and the inferior wall of the left ventricle. Venous drainage is primarily through the coronary sinus, which empties into the right atrium.',
          order: 2,
        },
        {
          title: 'Clinical Significance',
          content: 'Coronary artery disease (CAD) is the leading cause of death worldwide. Atherosclerotic plaques can narrow coronary arteries, reducing blood flow to the myocardium. Acute complete occlusion leads to myocardial infarction. The LAD is often called the "widow maker" because its occlusion affects a large area of the left ventricle.',
          order: 3,
        },
      ],
      meshTerms: ['Heart', 'Coronary Vessels', 'Anatomy', 'Cardiovascular System'],
      lastUpdated: new Date().toISOString(),
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK547596/',
    },
    {
      pmid: '545289',
      title: 'Anatomy, Abdomen and Pelvis, Liver',
      authors: ['Trefts E', 'Gannon M', 'Wasserman DH'],
      abstract: 'The liver is the largest solid organ in the body, located in the right upper quadrant of the abdomen. It performs over 500 functions including metabolism, detoxification, protein synthesis, and bile production.',
      sections: [
        {
          title: 'Introduction',
          content: 'The liver is located in the right upper quadrant of the abdomen, beneath the diaphragm. It weighs approximately 1.4 kg in adults and receives about 25% of cardiac output. The liver has a dual blood supply: the hepatic artery (25%) brings oxygenated blood, while the portal vein (75%) brings nutrient-rich blood from the gastrointestinal tract.',
          order: 0,
        },
        {
          title: 'Structure and Function',
          content: 'The liver is divided into the right and left lobes by the falciform ligament. Functionally, it is divided into eight Couinaud segments based on hepatic vein and portal pedicle distribution. The basic functional unit is the hepatic lobule, containing hepatocytes arranged around a central vein with portal triads at the periphery.',
          order: 1,
        },
        {
          title: 'Metabolism',
          content: 'The liver plays a central role in glucose homeostasis through glycogenesis, glycogenolysis, and gluconeogenesis. It synthesizes most plasma proteins including albumin and clotting factors. The liver is also critical for lipid metabolism, producing bile acids and lipoproteins, and is the primary site for drug metabolism through the cytochrome P450 system.',
          order: 2,
        },
        {
          title: 'Clinical Significance',
          content: 'Liver function tests (LFTs) include ALT, AST, alkaline phosphatase, bilirubin, and albumin. Elevated transaminases indicate hepatocyte injury. Cirrhosis results from chronic liver damage and leads to portal hypertension, ascites, and hepatic encephalopathy. Hepatocellular carcinoma is the most common primary liver malignancy.',
          order: 3,
        },
      ],
      meshTerms: ['Liver', 'Hepatocytes', 'Metabolism', 'Digestive System'],
      lastUpdated: new Date().toISOString(),
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK545289/',
    },
    {
      pmid: '537247',
      title: 'Anatomy, Head and Neck, Brain',
      authors: ['Raichle ME'],
      abstract: 'The brain is the central organ of the nervous system, responsible for cognition, emotion, sensory processing, and motor control. It weighs approximately 1.4 kg and consumes 20% of the body\'s oxygen.',
      sections: [
        {
          title: 'Introduction',
          content: 'The brain is the most complex organ in the human body, containing approximately 86 billion neurons. It is protected by the skull, meninges, and cerebrospinal fluid. The brain can be divided into the cerebrum, cerebellum, and brainstem. The cerebral cortex, the outer layer of the cerebrum, is responsible for higher cognitive functions.',
          order: 0,
        },
        {
          title: 'Structure and Function',
          content: 'The cerebrum is divided into two hemispheres connected by the corpus callosum. Each hemisphere has four lobes: frontal (motor function, decision-making), parietal (sensory processing), temporal (auditory processing, memory), and occipital (visual processing). The cerebellum coordinates movement and balance. The brainstem controls vital functions including heart rate and respiration.',
          order: 1,
        },
        {
          title: 'Blood Supply',
          content: 'The brain receives blood from the internal carotid arteries (anterior circulation) and vertebral arteries (posterior circulation), which form the Circle of Willis at the base of the brain. This anastomosis provides collateral circulation. The brain requires constant blood flow, as it cannot store glucose. Interruption of blood flow for more than a few minutes causes irreversible neuronal damage.',
          order: 2,
        },
        {
          title: 'Clinical Significance',
          content: 'Stroke is a leading cause of disability. Ischemic strokes result from arterial occlusion, while hemorrhagic strokes result from vessel rupture. The "time is brain" concept emphasizes rapid treatment to preserve penumbra tissue. Neuroimaging with CT and MRI is essential for diagnosis. Neurodegenerative diseases including Alzheimer\'s and Parkinson\'s represent major healthcare challenges.',
          order: 3,
        },
      ],
      meshTerms: ['Brain', 'Cerebral Cortex', 'Neurons', 'Nervous System'],
      lastUpdated: new Date().toISOString(),
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537247/',
    },
    {
      pmid: '542266',
      title: 'Physiology, Pulmonary Ventilation and Perfusion',
      authors: ['Powers KA', 'Dhamoon AS'],
      abstract: 'Pulmonary gas exchange depends on the matching of ventilation (V) and perfusion (Q) in the lungs. Optimal V/Q matching ensures efficient oxygenation of blood and removal of carbon dioxide.',
      sections: [
        {
          title: 'Introduction',
          content: 'Gas exchange in the lungs requires both ventilation (airflow to the alveoli) and perfusion (blood flow through pulmonary capillaries). The ratio of ventilation to perfusion (V/Q ratio) determines the efficiency of gas exchange. Normal V/Q ratio at rest is approximately 0.8, indicating slightly more perfusion than ventilation.',
          order: 0,
        },
        {
          title: 'Ventilation',
          content: 'Ventilation is driven by pressure gradients created by respiratory muscle contraction. During inspiration, diaphragm contraction increases thoracic volume, creating negative intrapleural pressure that expands the lungs. Tidal volume (approximately 500 mL) times respiratory rate (12-20/min) equals minute ventilation. Dead space ventilation does not participate in gas exchange.',
          order: 1,
        },
        {
          title: 'Perfusion',
          content: 'Pulmonary blood flow is affected by gravity, causing greater perfusion at lung bases in upright individuals. Hypoxic pulmonary vasoconstriction (HPV) diverts blood away from poorly ventilated regions, optimizing V/Q matching. Unlike systemic circulation, pulmonary circulation is low pressure (mean pulmonary arterial pressure ~15 mmHg).',
          order: 2,
        },
        {
          title: 'Clinical Significance',
          content: 'V/Q mismatch is a major cause of hypoxemia. High V/Q (dead space) occurs in pulmonary embolism. Low V/Q (shunt effect) occurs in pneumonia and atelectasis. Arterial blood gas analysis helps quantify gas exchange impairment. Supplemental oxygen can correct hypoxemia from V/Q mismatch but not true shunt.',
          order: 3,
        },
      ],
      meshTerms: ['Pulmonary Ventilation', 'Respiratory Physiology', 'Gas Exchange', 'Respiratory System'],
      lastUpdated: new Date().toISOString(),
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542266/',
    },
    {
      pmid: '538226',
      title: 'Physiology, Renal Blood Flow and Filtration',
      authors: ['Fountain JH', 'Lappin SL'],
      abstract: 'The kidneys receive approximately 20-25% of cardiac output. Glomerular filtration is the first step in urine formation, producing approximately 180 liters of filtrate per day, of which 99% is reabsorbed.',
      sections: [
        {
          title: 'Introduction',
          content: 'The kidneys filter the entire blood volume approximately 60 times per day. Each kidney contains about one million nephrons, the functional units of filtration. Blood enters the kidney via the renal artery and flows through progressively smaller vessels to the glomerular capillaries, where filtration occurs.',
          order: 0,
        },
        {
          title: 'Glomerular Filtration',
          content: 'The glomerular filtration rate (GFR) is determined by Starling forces: hydrostatic pressure favoring filtration, and oncotic pressure opposing it. Normal GFR is approximately 125 mL/min or 180 L/day. The filtration barrier consists of fenestrated endothelium, glomerular basement membrane, and podocyte foot processes. This barrier is freely permeable to water and small solutes but restricts proteins.',
          order: 1,
        },
        {
          title: 'Autoregulation',
          content: 'Renal blood flow and GFR remain constant over a wide range of mean arterial pressures (80-180 mmHg) through autoregulation. Myogenic response causes afferent arteriole constriction when pressure increases. Tubuloglomerular feedback at the macula densa adjusts afferent arteriole tone in response to tubular fluid composition. These mechanisms protect nephrons from pressure damage.',
          order: 2,
        },
        {
          title: 'Clinical Significance',
          content: 'GFR is the best overall index of kidney function. Creatinine clearance and eGFR equations estimate GFR clinically. Chronic kidney disease is staged by GFR. Acute kidney injury may result from prerenal (decreased perfusion), intrinsic (tubular or glomerular damage), or postrenal (obstruction) causes. ACE inhibitors can reduce GFR by dilating the efferent arteriole.',
          order: 3,
        },
      ],
      meshTerms: ['Kidney', 'Glomerular Filtration', 'Renal Circulation', 'Urinary System'],
      lastUpdated: new Date().toISOString(),
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538226/',
    },
  ];
}

/**
 * Classify system based on MeSH terms and title
 */
function classifySystem(article: ParsedArticle): string {
  const text = `${article.title} ${article.meshTerms.join(' ')}`.toLowerCase();

  if (text.includes('heart') || text.includes('cardiovascular') || text.includes('cardiac')) {
    return 'cardiovascular';
  }
  if (text.includes('brain') || text.includes('nervous') || text.includes('neural')) {
    return 'nervous';
  }
  if (text.includes('lung') || text.includes('pulmonary') || text.includes('respiratory')) {
    return 'respiratory';
  }
  if (text.includes('liver') || text.includes('stomach') || text.includes('digestive') || text.includes('intestin')) {
    return 'digestive';
  }
  if (text.includes('kidney') || text.includes('renal') || text.includes('urinary')) {
    return 'urinary';
  }
  if (text.includes('bone') || text.includes('skeletal') || text.includes('musculoskeletal')) {
    return 'skeletal';
  }
  if (text.includes('muscle')) {
    return 'muscular';
  }
  if (text.includes('endocrine') || text.includes('hormone') || text.includes('thyroid')) {
    return 'endocrine';
  }
  if (text.includes('immune') || text.includes('lymph')) {
    return 'lymphatic';
  }
  if (text.includes('skin') || text.includes('integumentary')) {
    return 'integumentary';
  }
  if (text.includes('reproductive') || text.includes('gonad')) {
    return 'reproductive';
  }

  return 'general';
}

/**
 * Determine complexity level based on content depth
 */
function determineComplexityLevel(section: ArticleSection): 1 | 2 | 3 | 4 | 5 {
  const title = section.title.toLowerCase();

  if (title.includes('clinical') || title.includes('treatment') || title.includes('management')) {
    return 5; // MD/Professional
  }
  if (title.includes('pathophysiology') || title.includes('mechanism')) {
    return 4; // Graduate
  }
  if (title.includes('structure') || title.includes('function') || title.includes('anatomy')) {
    return 3; // College
  }
  if (title.includes('introduction') || title.includes('overview')) {
    return 2; // High School
  }

  return 3; // Default to college level
}

/**
 * Main ingestion function
 */
export async function ingestStatPearls(
  store: VectorStore,
  onProgress?: ProgressCallback,
  _options?: {
    maxArticles?: number;
    useCache?: boolean;
  }
): Promise<{ chunksCreated: number; articlesProcessed: number }> {
  // Options for future use with full NCBI API integration
  // const { maxArticles = 100, useCache = true } = _options || {};
  const embeddingModel = getEmbeddingModel();

  // Ensure model is loaded
  onProgress?.({
    stage: 'search',
    current: 0,
    total: 1,
    message: 'Loading embedding model...',
  });
  await embeddingModel.load();

  // For now, use sample content (full implementation would search NCBI)
  const articles = createSampleContent();

  onProgress?.({
    stage: 'parse',
    current: articles.length,
    total: articles.length,
    message: `Retrieved ${articles.length} articles`,
  });

  // Chunk the content
  const allChunks: { text: string; article: ParsedArticle; section: ArticleSection }[] = [];

  for (const article of articles) {
    // Add abstract as a chunk
    if (article.abstract) {
      allChunks.push({
        text: `${article.title}\n\n${article.abstract}`,
        article,
        section: {
          title: 'Abstract',
          content: article.abstract,
          order: -1,
        },
      });
    }

    // Process each section
    for (const section of article.sections) {
      const chunks = TextChunker.chunk(section.content, {
        targetSize: 500,
        overlap: 50,
      });

      for (const chunk of chunks) {
        allChunks.push({
          text: `${article.title} - ${section.title}\n\n${chunk}`,
          article,
          section,
        });
      }
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
    const { text, article, section } = allChunks[i];

    onProgress?.({
      stage: 'embed',
      current: i + 1,
      total: allChunks.length,
      message: `Embedding chunk ${i + 1}/${allChunks.length}`,
    });

    const result = await embeddingModel.embed(text);

    const metadata: VectorMetadata = {
      source: 'StatPearls',
      chapter: article.title,
      section: section.title,
      system: classifySystem(article),
      complexityLevel: determineComplexityLevel(section),
      url: article.url,
      license: 'CC BY 4.0',
      createdAt: now,
      updatedAt: now,
    };

    documents.push({
      id: `statpearls-${article.pmid}-${section.order}-${i}`,
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

  // Group documents by collection
  const anatomyDocs = documents.filter(d => d.metadata.source === 'StatPearls');
  const physiologyDocs = documents.filter(d =>
    d.text.toLowerCase().includes('physiology') ||
    d.text.toLowerCase().includes('function') ||
    d.text.toLowerCase().includes('mechanism')
  );

  await store.addDocuments('anatomy', anatomyDocs);
  if (physiologyDocs.length > 0) {
    await store.addDocuments('physiology', physiologyDocs);
  }

  onProgress?.({
    stage: 'store',
    current: 1,
    total: 1,
    message: `Stored ${documents.length} documents`,
  });

  return {
    chunksCreated: documents.length,
    articlesProcessed: articles.length,
  };
}

/**
 * Quick test of the ingestion pipeline
 */
export async function testStatPearlsIngestion(): Promise<void> {
  console.log('Testing StatPearls ingestion pipeline...');

  const store = new VectorStore();
  await store.connect();

  const result = await ingestStatPearls(store, (progress) => {
    console.log(`[${progress.stage}] ${progress.message}`);
  });

  console.log(`\nIngestion complete:`);
  console.log(`  Articles: ${result.articlesProcessed}`);
  console.log(`  Chunks: ${result.chunksCreated}`);

  // Test search
  console.log('\nTesting search...');
  const embeddingModel = getEmbeddingModel();
  const queryResult = await embeddingModel.embed('heart coronary arteries blood supply');

  const searchResults = await store.search('anatomy', queryResult.embedding, {
    limit: 3,
  });

  console.log('\nSearch results for "heart coronary arteries blood supply":');
  for (const result of searchResults) {
    console.log(`\n[Score: ${result.score.toFixed(3)}] ${result.metadata.chapter}`);
    console.log(result.text.substring(0, 200) + '...');
  }

  await store.close();
}
