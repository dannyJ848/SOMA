/**
 * Hepatitis (Viral and Autoimmune) — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const hepatitisContent: EducationalContent = {
  id: 'gi-hepatology-hepatitis',
  type: 'condition',
  name: 'Hepatitis',
  nameEs: 'Hepatitis',
  alternateNames: ['Viral Hepatitis', 'Autoimmune Hepatitis', 'Liver Inflammation'],
  levels: {
    1: {
      level: 1,
      summary: 'Hepatitis means inflammation of the liver, most often caused by viruses (hepatitis A, B, or C), but also by the immune system attacking the liver or by alcohol and drugs.',
      explanation: `Your liver can become inflamed — swollen and irritated — from several causes. The most common are viruses: **Hepatitis A** spreads through contaminated food or water and usually goes away on its own. **Hepatitis B** and **Hepatitis C** spread through blood and body fluids and can become long-lasting (chronic), slowly damaging the liver over years. Symptoms include tiredness, nausea, belly pain, dark urine, and yellow skin (jaundice). Hepatitis B has a vaccine that prevents infection. Hepatitis C can now be cured with antiviral pills taken for 8-12 weeks. Autoimmune hepatitis happens when your immune system attacks your own liver and needs lifelong treatment.`,
      keyTerms: [t('hepatitis', 'Inflammation of the liver'), t('virus', 'A tiny germ that can infect your body and cause illness'), t('chronic', 'A condition that lasts a long time, often for life')],
      analogies: ['Viruses attacking your liver are like termites in wood — they can cause hidden damage over a long time.'],
      patientCounselingPoints: ['Get vaccinated against hepatitis A and B', 'Hepatitis C is curable — talk to your doctor about testing', 'Never share needles, razors, or toothbrushes'],
    },
    2: {
      level: 2,
      summary: 'Hepatitis encompasses viral (A-E), autoimmune, alcoholic, and drug-induced liver inflammation. Chronic hepatitis B and C are leading causes of cirrhosis and hepatocellular carcinoma worldwide.',
      explanation: `**Hepatitis A (HAV):** Fecal-oral transmission, self-limited, no chronicity. IgM anti-HAV = acute infection. **Hepatitis B (HBV):** Blood/sexual transmission. Serologic markers: HBsAg (active infection), anti-HBs (immunity), HBeAg (high replication), anti-HBc IgM (acute). Chronic in 5% of adult infections, 90% of neonatal. Treatment: tenofovir or entecavir for active chronic disease. **Hepatitis C (HCV):** Blood-borne. Chronic in ~75%. Diagnosed by anti-HCV antibody, confirmed by HCV RNA. Direct-acting antivirals (DAAs) cure >95% in 8-12 weeks (sofosbuvir/velpatasvir). **Hepatitis D:** Requires HBV co-infection. **Hepatitis E:** Fecal-oral, dangerous in pregnancy. **Autoimmune hepatitis (AIH):** Elevated IgG, ANA/ASMA/anti-LKM1 antibodies. Treatment: prednisone + azathioprine.`,
      keyTerms: [t('HBsAg', 'Hepatitis B surface antigen — indicates active HBV infection'), t('DAA', 'Direct-acting antiviral — oral drugs that cure hepatitis C in most patients'), t('autoimmune hepatitis', 'Immune-mediated liver inflammation requiring immunosuppressive therapy')],
      examples: ['A healthcare worker with needlestick injury showing HBsAg+, IgM anti-HBc+, elevated ALT has acute hepatitis B.'],
    },
    3: {
      level: 3,
      summary: 'Viral hepatitis pathogenesis involves immune-mediated hepatocyte injury (HBV) or direct cytopathic effects (HCV). Serologic patterns, fibrosis staging, and treatment algorithms are central to management.',
      explanation: `**HBV virology:** Partially double-stranded DNA virus with reverse transcriptase. cccDNA persists in hepatocyte nuclei (explains persistence despite seroconversion). Liver damage is immune-mediated (CD8+ T cells targeting infected hepatocytes), not directly cytopathic. Phases: immune-tolerant, immune-active, inactive carrier, reactivation. Treatment thresholds: ALT >2x ULN + HBV DNA >2000 IU/mL (HBeAg-negative) or >20,000 (HBeAg-positive). Functional cure (HBsAg loss) rare with current NUCs. **HCV virology:** Positive-sense ssRNA flavivirus. 6 major genotypes. NS5B polymerase inhibitors (sofosbuvir), NS5A inhibitors (velpatasvir, ledipasvir), and NS3/4A protease inhibitors (glecaprevir) form pangenotypic regimens. SVR (sustained virologic response) = cure. Post-SVR HCC screening continues if F3/F4 fibrosis. **AIH:** Type 1 (ANA/ASMA, adult) vs. Type 2 (anti-LKM1, pediatric). Simplified IAIHG scoring for diagnosis. Histology shows interface hepatitis and plasma cell infiltrates.`,
      keyTerms: [t('cccDNA', 'Covalently closed circular DNA — HBV minichromosome in hepatocyte nucleus responsible for viral persistence'), t('SVR', 'Sustained virologic response — undetectable HCV RNA 12 weeks post-treatment, considered cure'), t('interface hepatitis', 'Inflammatory infiltrate extending from portal tracts into hepatic parenchyma — hallmark of autoimmune and chronic viral hepatitis')],
      clinicalNotes: 'Screen for HBV reactivation before rituximab, chemotherapy, or high-dose steroids (check HBsAg and anti-HBc). Prophylactic tenofovir/entecavir if positive.',
    },
    4: {
      level: 4,
      summary: 'Advanced hepatitis management includes HBV functional cure strategies, HCV micro-elimination, occult HBV reactivation prevention, and overlap syndromes in autoimmune liver disease.',
      explanation: `**HBV functional cure:** Defined as sustained HBsAg loss +/- anti-HBs seroconversion after finite therapy. Current NUCs rarely achieve this (<5%). Investigational approaches: core protein allosteric modulators (CpAMs), RNA interference (siRNA: bepirovirsen), therapeutic vaccines, checkpoint inhibitors to restore T cell exhaustion. **HCV elimination:** WHO target: 90% diagnosed, 80% treated by 2030. Micro-elimination strategies: point-of-care HCV RNA testing, simplified treatment algorithms (pan-genotypic DAAs without pre-treatment genotyping), test-and-treat models. Retreatment for DAA failures: sofosbuvir/velpatasvir/voxilaprevir x 12 weeks. **Occult HBV:** HBsAg-negative, anti-HBc-positive with detectable intrahepatic cccDNA. Reactivation risk with potent immunosuppression. Risk tiers guide prophylaxis vs. monitoring. **AIH overlap:** AIH-PBC overlap (AMA+, interface hepatitis) and AIH-PSC overlap (cholangiographic changes + AIH histology). Paris criteria for AIH-PBC overlap. Treatment: UDCA + immunosuppression for overlap syndromes.`,
      keyTerms: [t('functional cure', 'Sustained HBsAg loss — the aspirational endpoint of HBV therapy'), t('bepirovirsen', 'Antisense oligonucleotide targeting HBV RNA — investigational agent for functional cure'), t('occult HBV', 'HBsAg-negative infection with cccDNA persistence — risk of reactivation with immunosuppression')],
      clinicalNotes: 'AASLD 2023: all adults 18+ should be screened for HBV (triple panel: HBsAg, anti-HBs, anti-HBc) at least once. Universal HBV screening is now recommended.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include HBV cure through cccDNA silencing, CRISPR-based viral genome disruption, HCV vaccine development, and AI-driven fibrosis regression monitoring.',
      explanation: `**HBV cure strategies:** cccDNA targeting via gene editing (CRISPR-Cas9, base editors) to disrupt or silence intrahepatic viral genome — preclinical proof of concept achieved. Epigenetic silencing of cccDNA transcription (APOBEC3-mediated deamination, SMC5/6 complex restoration). siRNA combinations (JNJ-3989 + JNJ-6379) achieve >1 log HBsAg decline. Checkpoint immunotherapy (anti-PD-1) restores HBV-specific T cells in early trials but hepatotoxicity is a concern. **HCV vaccine:** No vaccine despite SVR. Broadly neutralizing antibodies targeting E1/E2 glycoproteins and T cell-based vaccines in phase 1/2 trials. Challenge: extreme HVR1 variability and glycan shielding. **HDV:** Bulevirtide (entry inhibitor targeting NTCP receptor) approved in EU — first HDV-specific therapy. Lonafarnib (prenylation inhibitor) in combination trials. **Liquid biopsy:** cfDNA methylation and extracellular vesicle miRNA profiling for non-invasive fibrosis regression monitoring post-HCV cure. AI analysis of routine labs (FIB-4 trajectory) predicts liver-related events post-SVR.`,
      keyTerms: [t('bulevirtide', 'NTCP entry inhibitor — first approved therapy specifically for chronic hepatitis D'), t('cccDNA silencing', 'Strategies to transcriptionally inactivate or destroy HBV cccDNA minichromosome in hepatocyte nuclei'), t('NTCP', 'Sodium taurocholate co-transporting polypeptide — hepatocyte receptor used by HBV/HDV for entry')],
      clinicalNotes: 'Bulevirtide (Hepcludex) 2 mg SC daily approved in EU for HDV. Phase 3 data shows combined HBV RNA + ALT normalization in ~45%. Not yet FDA-approved.',
    },
  },
  media: [],
  citations: [{ id: 'aasld-hbv-2023', type: 'article', title: 'AASLD Guidance on Hepatitis B', source: 'Hepatology 2023', authors: ['Terrault NA et al.'] }],
  crossReferences: [
    { targetId: 'gi-hepatology-cirrhosis', targetType: 'condition', relationship: 'child', label: 'Cirrhosis' },
    { targetId: 'gi-hepatology-fatty-liver', targetType: 'condition', relationship: 'related', label: 'Fatty Liver Disease' },
  ],
  tags: { systems: ['gastrointestinal', 'hepatobiliary', 'immune'], topics: ['gastroenterology', 'hepatology', 'infectious-disease'], keywords: ['hepatitis', 'HBV', 'HCV', 'HAV', 'autoimmune', 'DAA', 'antiviral'], clinicalRelevance: 'high', examRelevance: { usmle: true, shelf: ['medicine'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
