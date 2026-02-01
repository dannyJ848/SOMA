/**
 * Biological Self — Oncology EducationalContent compact builder
 *
 * Creates EducationalContent entries with abbreviated multi-level content
 * so each topic fits ~8-10 lines while satisfying the full interface.
 */

import { EducationalContent, ContentType, LevelContent, CrossReference, ContentTags } from '../../types';

interface OncEduInput {
  id: string;
  name: string;
  nameEs: string;
  altNames?: string[];
  type?: ContentType;
  l1: string; l2: string; l3: string; l4: string; l5: string;
  tags: ContentTags;
  crossRefs?: CrossReference[];
}

const lvl = (n: 1|2|3|4|5, text: string): LevelContent => ({
  level: n,
  summary: text.split('. ').slice(0, 2).join('. ') + (text.split('. ').length > 2 ? '.' : ''),
  explanation: text,
  keyTerms: [],
});

export const oncEdu = (i: OncEduInput): EducationalContent => ({
  id: i.id,
  type: i.type ?? 'condition',
  name: i.name,
  nameEs: i.nameEs,
  alternateNames: i.altNames,
  levels: { 1: lvl(1, i.l1), 2: lvl(2, i.l2), 3: lvl(3, i.l3), 4: lvl(4, i.l4), 5: lvl(5, i.l5) },
  media: [],
  citations: [],
  crossReferences: i.crossRefs ?? [],
  tags: i.tags,
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
});
