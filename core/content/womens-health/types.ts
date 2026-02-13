// Permissive types to handle multiple content structure variations
export interface WomensHealthLevelContent {
  level: number;
  title?: string;
  summary?: string;
  explanation?: string;
  content?: string;
  keyPoints?: any;
  vocabulary?: any;
  keyTerms?: any;
  terms?: any;
  analogies?: any;
  examples?: any;
  clinicalNotes?: any;
  patientCounselingPoints?: any;
  media?: any;
  citations?: any;
  crossReferences?: any;
  tags?: any;
}

export interface WomensHealthContent {
  id: string;
  title?: string;
  type?: string;
  name?: string;
  alternateNames?: any;
  category?: string;
  complexityLevels?: WomensHealthLevelContent[] | any;
  levels?: WomensHealthLevelContent[] | { [key: number]: WomensHealthLevelContent } | any;
  media?: any;
  citations?: any;
  crossReferences?: any;
  relatedTopics?: any;
  references?: any;
  tags?: any;
  createdAt?: any;
  updatedAt?: any;
  version?: any;
  status?: any;
  lastUpdated?: any;
}

// Alias for legacy content
export type LegacyWomensHealthContent = WomensHealthContent;
export type LegacyWomensHealthLevelContent = WomensHealthLevelContent;
export type TermDefinition = any;


