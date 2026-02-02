/**
 * Inflammatory Bowel Disease (Crohn's & Ulcerative Colitis) — Compact Educational Content
 */
import { EducationalContent } from '../../../types';

const t = (term: string, definition: string) => ({ term, definition });

export const ibdContent: EducationalContent = {
  id: 'gi-lower-ibd',
  type: 'condition',
  name: 'Inflammatory Bowel Disease',
  nameEs: 'Enfermedad Inflamatoria Intestinal',
  alternateNames: ['IBD', "Crohn's Disease", 'Ulcerative Colitis', 'UC', 'CD'],
  levels: {
    1: {
      level: 1,
      summary: 'IBD is a group of conditions where the digestive system becomes inflamed. The two main types are Crohn\'s disease and ulcerative colitis.',
      explanation: `Your immune system normally fights germs, but in IBD it mistakenly attacks the lining of your digestive tract, causing swelling, pain, and sores. In **ulcerative colitis (UC)**, only the large intestine (colon) is affected, and the inflammation stays on the inner surface. In **Crohn's disease**, any part of the digestive tract can be affected — from mouth to bottom — and the inflammation goes deeper into the wall. Symptoms include belly pain, diarrhea (sometimes bloody), tiredness, and weight loss. IBD is a lifelong condition, but medicines can control the inflammation and let people live normal lives.`,
      keyTerms: [t('IBD', 'Inflammatory bowel disease — chronic inflammation of the digestive tract'), t("Crohn's disease", 'IBD that can affect any part of the digestive tract, deeply'), t('ulcerative colitis', 'IBD that affects only the colon surface lining')],
      analogies: ['Think of your immune system as a security guard that starts attacking your own house instead of intruders.'],
      patientCounselingPoints: ['IBD is not caused by stress or diet, though both can worsen symptoms', 'Take medications even when feeling well to prevent flares', 'Regular colonoscopy is important for cancer screening'],
    },
    2: {
      level: 2,
      summary: 'IBD comprises Crohn\'s disease (transmural, skip lesions, any GI segment) and ulcerative colitis (continuous mucosal inflammation limited to colon), both driven by dysregulated immune responses.',
      explanation: `**Ulcerative Colitis:** Continuous mucosal inflammation starting at the rectum and extending proximally. Classified as proctitis, left-sided colitis, or pancolitis. Key features: bloody diarrhea, tenesmus, crypt abscesses on biopsy. **Crohn's Disease:** Transmural inflammation with skip lesions anywhere from mouth to anus. Terminal ileum most common. Key features: abdominal pain, non-bloody diarrhea, fistulas, strictures, granulomas on biopsy. Both involve genetic susceptibility (NOD2 for Crohn's) plus environmental triggers. Diagnosis: colonoscopy with biopsies, stool calprotectin (inflammation marker), imaging (MR enterography for Crohn's). Treatment: 5-ASA for mild UC, corticosteroids for flares, immunomodulators (azathioprine, methotrexate), and biologics (anti-TNF, vedolizumab, ustekinumab) for moderate-severe disease.`,
      keyTerms: [t('skip lesions', 'Patches of inflamed bowel separated by normal areas — characteristic of Crohn\'s'), t('calprotectin', 'Stool marker of intestinal inflammation — helps distinguish IBD from IBS'), t('5-ASA', 'Mesalamine — first-line anti-inflammatory for mild ulcerative colitis')],
      examples: ['A 25-year-old with bloody diarrhea, continuous colonic inflammation on colonoscopy, and crypt abscesses is classic for ulcerative colitis.'],
    },
    3: {
      level: 3,
      summary: 'IBD involves disrupted mucosal immune tolerance to commensal microbiota in genetically susceptible hosts, with distinct phenotypic classifications and targeted biologic therapies.',
      explanation: `**Pathogenesis:** Defective epithelial barrier permits translocation of commensal antigens, activating Th1/Th17 (Crohn's) or Th2/NKT cell (UC) pathways. NOD2/CARD15 mutations (Crohn's) impair intracellular bacterial sensing. IL-23/IL-17 axis is central. **Classification:** Montreal classification — Crohn's: age at diagnosis (A), location (L1-L4), behavior (B1-B3 + perianal modifier). UC: extent (E1-E3) and severity (S0-S3). **Diagnosis:** CRP, ESR, fecal calprotectin >250 mcg/g suggests active disease. Ileocolonoscopy with stepwise biopsies. MR enterography for small bowel Crohn's. Capsule endoscopy if MRE negative but high suspicion. **Treatment escalation:** Treat-to-target strategy — mucosal healing as endpoint. Biologics: infliximab/adalimumab (anti-TNF), vedolizumab (anti-integrin, gut-selective), ustekinumab (anti-IL-12/23), risankizumab (anti-IL-23). JAK inhibitors (tofacitinib, upadacitinib) for UC. Surgery: colectomy curative for UC; Crohn's surgery for complications (strictureplasty, resection).`,
      keyTerms: [t('Montreal classification', 'Standard phenotypic classification system for IBD'), t('treat-to-target', 'Strategy aiming for mucosal healing, not just symptom control'), t('vedolizumab', 'Gut-selective anti-integrin biologic — lower systemic immunosuppression risk')],
      clinicalNotes: 'Therapeutic drug monitoring (TDM) of anti-TNF trough levels and anti-drug antibodies guides secondary loss of response management. Target infliximab trough >5 mcg/mL.',
    },
    4: {
      level: 4,
      summary: 'Advanced IBD management encompasses precision medicine with biomarker-guided therapy selection, combination strategies, and surgical optimization for complex phenotypes.',
      explanation: `**Precision medicine:** Oncostatin M (OSM) expression predicts anti-TNF non-response. HLA-DQA1*05 associates with immunogenicity to anti-TNF — informs concomitant immunomodulator use. **Advanced therapeutics:** Combination biologic therapy (anti-TNF + vedolizumab) in refractory cases. S1P receptor modulators (ozanimod, etrasimod) for UC — oral, lymphocyte trafficking inhibitors. Risankizumab and guselkumab (selective anti-IL-23p19) show superior efficacy/safety vs. anti-TNF in head-to-head trials. **Perianal Crohn's:** MRI pelvis for classification (Parks classification of fistulas). Combined surgical (seton, advancement flap) and medical (anti-TNF) approach. Mesenchymal stem cell injection (darvadstrocel) for complex perianal fistulas. **Dysplasia surveillance:** Chromoendoscopy with targeted biopsies preferred over random biopsies. SCENIC guidelines. Risk increases with pancolitis >8 years, PSC comorbidity. **Postoperative Crohn's:** Rutgeerts score on ileocolonoscopy at 6-12 months guides prophylaxis. Nitroimidazole x 3 months reduces endoscopic recurrence.`,
      keyTerms: [t('OSM', 'Oncostatin M — biomarker predicting anti-TNF non-response in IBD'), t('Rutgeerts score', 'Endoscopic score for post-surgical Crohn\'s recurrence at the neo-terminal ileum'), t('darvadstrocel', 'Allogeneic adipose-derived stem cell therapy for complex perianal fistulas')],
      clinicalNotes: 'VARSITY trial: vedolizumab superior to adalimumab for UC clinical remission and mucosal healing at week 52. Tofacitinib carries VTE/MACE risk — reserve for anti-TNF failures.',
    },
    5: {
      level: 5,
      summary: 'Frontiers include multi-omic disease subtyping, intestinal organoid modeling, microbiome-targeted therapies, and AI-driven treat-to-target monitoring.',
      explanation: `**Multi-omics:** Single-cell RNA sequencing of intestinal biopsies identifies inflammatory cell populations (GIMATS — activated T cells/mononuclear phagocytes) and fibroblast subtypes predicting stricture formation. Methylation profiling distinguishes IBD subtypes and predicts therapy response. **Microbiome:** Fecal microbiota transplant (FMT) shows efficacy in UC (NNT ~5 in RCTs) with donor-dependent response. Defined microbial consortia (e.g., SER-287) under investigation. Adherent-invasive E. coli (AIEC) implicated in ileal Crohn's — phage therapy in preclinical trials. **Novel targets:** Anti-TL1A antibodies (tulisokibart) target fibrosis pathway — breakthrough therapy for UC/CD. Obefazimod (ABX464) enhances miR-124 to dampen inflammation. **Digital endpoints:** AI analysis of endoscopic images automates Mayo/SES-CD scoring with gastroenterologist-level accuracy. Home fecal calprotectin monitoring and wearable disease activity tracking enable real-time treat-to-target.`,
      keyTerms: [t('GIMATS', 'Gut inflammatory monocyte and T cell signature — single-cell transcriptomic IBD signature'), t('anti-TL1A', 'TNF-like ligand 1A antibodies — novel target addressing both inflammation and fibrosis'), t('SER-287', 'Defined microbial consortium for UC — next-generation microbiome therapy')],
      clinicalNotes: 'Tulisokibart (anti-TL1A) met primary endpoints in phase 2 UC trial with 26% vs. 1% endoscopic improvement. May become first anti-fibrotic IBD therapy.',
    },
  },
  media: [],
  citations: [
    { id: 'ecco-2023', type: 'article', title: 'ECCO Guidelines on Therapeutics in CD/UC', source: 'J Crohns Colitis 2023', authors: ['Torres J et al.'] },
  ],
  crossReferences: [
    { targetId: 'gi-lower-ibs', targetType: 'condition', relationship: 'related', label: 'Irritable Bowel Syndrome' },
    { targetId: 'gi-hepatology-cirrhosis', targetType: 'condition', relationship: 'see-also', label: 'PSC and Liver Disease' },
  ],
  tags: { systems: ['gastrointestinal', 'immune'], topics: ['gastroenterology', 'lower-gi', 'autoimmune'], keywords: ['IBD', 'Crohn', 'ulcerative colitis', 'biologics', 'calprotectin'], clinicalRelevance: 'high', examRelevance: { usmle: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2026-01-30', updatedAt: '2026-01-30', version: 1, status: 'published',
};
