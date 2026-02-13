/**
 * Seed Knowledge
 *
 * Seeds the knowledge base with foundational medical knowledge.
 * In production, this would load from curated medical textbooks and literature.
 */

import { VectorStore, KnowledgeChunk } from './vector-store.js';

// ============================================================================
// Foundational Medical Knowledge
// ============================================================================

const FOUNDATIONAL_KNOWLEDGE: Omit<KnowledgeChunk, 'id' | 'embedding' | 'createdAt'>[] = [
  // ========== Gastrointestinal System ==========
  {
    content: `The gastrointestinal (GI) tract is a continuous tube from mouth to anus, approximately 30 feet long in adults. Its primary functions are digestion, absorption, and elimination. The small intestine (duodenum, jejunum, ileum) is where most nutrient absorption occurs, with villi and microvilli increasing surface area to approximately 250 square meters.`,
    source: 'Medical Physiology - Guyton & Hall',
    sourceType: 'textbook',
    chapter: 'Gastrointestinal Physiology',
    section: 'Overview',
  },
  {
    content: `Intestinal adhesions are bands of fibrous scar tissue that form between abdominal organs and tissues. They commonly develop after abdominal surgery (occurring in up to 93% of patients after open abdominal surgery), peritonitis, or abdominal infection. Adhesions can cause bowel obstruction by kinking, twisting, or compressing the intestine.`,
    source: 'Surgical Complications - Thompson et al.',
    sourceType: 'textbook',
    chapter: 'Post-operative Complications',
    section: 'Adhesive Disease',
  },
  {
    content: `Small bowel obstruction (SBO) occurs when intestinal contents cannot pass through the small intestine. Symptoms include crampy abdominal pain, nausea, vomiting, abdominal distension, and obstipation. Adhesions account for approximately 60-70% of SBOs in developed countries. Treatment ranges from conservative management (NPO, NG tube, IV fluids) to surgical intervention.`,
    source: 'Surgical Complications - Thompson et al.',
    sourceType: 'textbook',
    chapter: 'Small Bowel Obstruction',
    section: 'Etiology and Management',
  },
  {
    content: `The enteric nervous system (ENS) contains over 100 million neurons embedded in the gut wall, sometimes called the "second brain." The ENS controls peristalsis, secretion, absorption, and blood flow independently of the central nervous system. It consists of two main plexuses: the myenteric (Auerbach's) plexus controlling motility and the submucosal (Meissner's) plexus controlling secretion.`,
    source: 'Medical Physiology - Guyton & Hall',
    sourceType: 'textbook',
    chapter: 'Enteric Nervous System',
    section: 'Structure and Function',
  },
  {
    content: `Surgical trauma, peritonitis, and chronic inflammation can damage the enteric nervous system, leading to dysmotility. ENS dysfunction can cause delayed gastric emptying, intestinal pseudo-obstruction, and altered secretion. Recovery of ENS function after damage is possible due to neuroplasticity, but may take months to years.`,
    source: 'Neurogastroenterology - Wood & Alpers',
    sourceType: 'textbook',
    chapter: 'ENS Pathophysiology',
    section: 'Post-surgical Dysfunction',
  },
  {
    content: `Small intestinal bacterial overgrowth (SIBO) occurs when excessive bacteria colonize the small intestine. Risk factors include impaired motility, anatomical abnormalities, and achlorhydria. Symptoms include bloating, flatulence, abdominal pain, diarrhea, and malabsorption. Diagnosis is via breath testing or jejunal aspirate culture.`,
    source: 'Harrison\'s Principles of Internal Medicine',
    sourceType: 'textbook',
    chapter: 'Malabsorption Syndromes',
    section: 'Bacterial Overgrowth',
  },

  // ========== Malabsorption ==========
  {
    content: `Iron absorption occurs primarily in the duodenum and proximal jejunum via the divalent metal transporter 1 (DMT1). Factors affecting absorption include gastric acid (converts Fe3+ to Fe2+), vitamin C (enhances absorption), and hepcidin (inhibits absorption). Low ferritin (<30 ng/mL) indicates depleted iron stores before frank anemia develops.`,
    source: 'Harrison\'s Principles of Internal Medicine',
    sourceType: 'textbook',
    chapter: 'Iron Metabolism',
    section: 'Absorption and Deficiency',
  },
  {
    content: `Malabsorption can result from mucosal disease (celiac, Crohn's), reduced absorptive surface (surgical resection, adhesions), pancreatic insufficiency, bile salt deficiency, or bacterial overgrowth. Signs include steatorrhea, weight loss, fatigue, and specific nutrient deficiencies (iron, B12, folate, vitamin D, calcium).`,
    source: 'Harrison\'s Principles of Internal Medicine',
    sourceType: 'textbook',
    chapter: 'Malabsorption Syndromes',
    section: 'Overview',
  },

  // ========== ADHD and Neurotransmitters ==========
  {
    content: `Attention-deficit/hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. The pathophysiology involves dysregulation of catecholamine systems, primarily dopamine and norepinephrine, in the prefrontal cortex and striatum. Executive functions including working memory, attention, and impulse control are affected.`,
    source: 'Stahl\'s Essential Psychopharmacology',
    sourceType: 'textbook',
    chapter: 'ADHD',
    section: 'Pathophysiology',
  },
  {
    content: `Atomoxetine is a selective norepinephrine reuptake inhibitor (NRI) used for ADHD. Unlike stimulants, it increases norepinephrine (and indirectly dopamine) in the prefrontal cortex without affecting the reward pathway. It has a delayed onset of action (2-6 weeks for full effect) and no abuse potential. Common side effects include GI upset, decreased appetite, and dry mouth.`,
    source: 'Stahl\'s Essential Psychopharmacology',
    sourceType: 'textbook',
    chapter: 'ADHD Medications',
    section: 'Non-stimulants',
  },
  {
    content: `Acetylcholine is a neurotransmitter critical for attention, memory, and learning. It is synthesized from choline and acetyl-CoA by choline acetyltransferase. Cholinergic deficiency can cause cognitive impairment, fatigue, and attention deficits. Sources of choline include eggs, liver, and lecithin (phosphatidylcholine).`,
    source: 'Basic Neurochemistry - Siegel et al.',
    sourceType: 'textbook',
    chapter: 'Acetylcholine',
    section: 'Synthesis and Function',
  },
  {
    content: `Pharmacogenomics studies how genetic variations affect drug response. CYP2D6 polymorphisms affect metabolism of many psychiatric medications including atomoxetine. Poor metabolizers have higher drug levels and increased side effects; ultra-rapid metabolizers may have subtherapeutic levels. CYP2C19 affects escitalopram metabolism—rapid metabolizers may need higher doses.`,
    source: 'Clinical Pharmacogenomics - Shuldiner & Relling',
    sourceType: 'textbook',
    chapter: 'Psychiatric Pharmacogenomics',
    section: 'CYP450 Variants',
  },

  // ========== Ketogenic Metabolism ==========
  {
    content: `Ketone bodies (β-hydroxybutyrate, acetoacetate, acetone) are produced by the liver during fasting, carbohydrate restriction, or prolonged exercise. They serve as alternative fuel for the brain and other tissues when glucose is limited. The brain can derive up to 70% of its energy from ketones during prolonged fasting.`,
    source: 'Medical Physiology - Guyton & Hall',
    sourceType: 'textbook',
    chapter: 'Lipid Metabolism',
    section: 'Ketogenesis',
  },
  {
    content: `Nutritional ketosis (β-hydroxybutyrate 0.5-3.0 mmol/L) differs from diabetic ketoacidosis (>10 mmol/L with acidosis). In nutritional ketosis, insulin prevents excessive ketone production. Benefits being studied include neuroprotection, reduced inflammation, and improved mitochondrial function. Therapeutic ketosis for epilepsy typically targets 2-5 mmol/L.`,
    source: 'Ketogenic Diet Therapy - Kossoff et al.',
    sourceType: 'textbook',
    chapter: 'Metabolic Targets',
    section: 'Ketone Levels',
  },
  {
    content: `Medium-chain triglycerides (MCTs) are fats with 6-12 carbon chains that are rapidly absorbed and metabolized to ketones. C8 (caprylic acid) is most ketogenic, followed by C10 (capric acid). MCTs bypass lymphatic absorption, going directly to the liver via portal circulation, producing ketones within minutes to hours.`,
    source: 'Ketogenic Diet Therapy - Kossoff et al.',
    sourceType: 'textbook',
    chapter: 'MCT Supplementation',
    section: 'Pharmacokinetics',
  },

  // ========== Autonomic Nervous System ==========
  {
    content: `Heart rate variability (HRV) measures variation in time between heartbeats, reflecting autonomic balance. High HRV indicates parasympathetic dominance and adaptive capacity; low HRV suggests sympathetic dominance or stress. Normal HRV varies by age but decreases with stress, illness, and deconditioning.`,
    source: 'Autonomic Neuroscience - Benarroch',
    sourceType: 'textbook',
    chapter: 'Autonomic Assessment',
    section: 'Heart Rate Variability',
  },
  {
    content: `The vagus nerve (cranial nerve X) is the primary parasympathetic nerve, innervating the heart, lungs, and GI tract. Vagal tone affects heart rate, digestion, and inflammation. The gut-brain axis relies heavily on vagal afferents carrying information from the gut to the brain, influencing mood, cognition, and behavior.`,
    source: 'Autonomic Neuroscience - Benarroch',
    sourceType: 'textbook',
    chapter: 'Vagus Nerve',
    section: 'Anatomy and Function',
  },

  // ========== Sleep ==========
  {
    content: `Sleep architecture consists of cycles through stages: N1 (light sleep), N2 (intermediate), N3 (deep/slow-wave sleep), and REM. Deep sleep is critical for physical recovery and memory consolidation. Adults need 15-20% deep sleep. Factors reducing deep sleep include stress, alcohol, age, and sleep disorders.`,
    source: 'Principles and Practice of Sleep Medicine - Kryger',
    sourceType: 'textbook',
    chapter: 'Sleep Architecture',
    section: 'Normal Sleep',
  },

  // ========== Appendicitis & Peritonitis ==========
  {
    content: `Appendicitis is inflammation of the appendix, most commonly due to obstruction. If untreated, it can progress to perforation, causing peritonitis (inflammation of the peritoneal lining). Perforated appendicitis in children carries higher risk of adhesion formation and long-term complications due to more severe inflammatory response.`,
    source: 'Pediatric Surgery - Coran et al.',
    sourceType: 'textbook',
    chapter: 'Appendicitis',
    section: 'Complications',
  },
  {
    content: `Peritonitis triggers a massive inflammatory cascade involving cytokines, neutrophils, and fibrin deposition. While this response fights infection, it also leads to adhesion formation. The severity of adhesions correlates with the degree of peritoneal inflammation, duration of exposure, and foreign body presence (sutures, mesh).`,
    source: 'Surgical Complications - Thompson et al.',
    sourceType: 'textbook',
    chapter: 'Peritonitis',
    section: 'Pathophysiology',
  },
];

// ============================================================================
// Seeding Function
// ============================================================================

export async function seedKnowledgeBase(vectorStore: VectorStore): Promise<number> {
  console.log('Seeding knowledge base with foundational medical knowledge...');

  const count = await vectorStore.addChunks(FOUNDATIONAL_KNOWLEDGE);

  console.log(`Added ${count} knowledge chunks`);
  return count;
}

/**
 * Check if knowledge base needs seeding
 */
export function needsSeeding(vectorStore: VectorStore): boolean {
  return vectorStore.getCount() === 0;
}
