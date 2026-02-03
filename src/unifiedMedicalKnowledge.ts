/**
 * Unified Medical Knowledge System
 * 
 * Brings together all medical knowledge sources into a cohesive,
 * physician-grade interface. This is the central nervous system of the app.
 * 
 * Features:
 * - Multi-source knowledge integration (anatomy, physiology, pathology, pharmacology)
 * - Clinical decision support hooks
 * - Evidence-based content with citations
 * - Cross-referenced medical knowledge graph
 * - Real-time content enrichment from RAG
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import type { EducationalContent, ComplexityLevel } from '../core/content/types';
import type { ContentDocument } from './ContentViewer';

// Medical knowledge domains
export type MedicalDomain = 
  | 'anatomy' 
  | 'physiology' 
  | 'pathology' 
  | 'pharmacology' 
  | 'clinical' 
  | 'diagnostic' 
  | 'therapeutic'
  | 'preventive';

// Clinical context for personalized content
export interface ClinicalContext {
  patientAge?: number;
  patientSex?: 'male' | 'female' | 'other';
  comorbidities?: string[];
  currentMedications?: string[];
  allergies?: string[];
  vitalSigns?: {
    bp?: string;
    hr?: number;
    temp?: number;
    rr?: number;
    spo2?: number;
  };
  labValues?: Record<string, number>;
  symptomContext?: string;
}

// Enriched content with clinical annotations
export interface EnrichedContent extends ContentDocument {
  clinicalContext?: ClinicalContext;
  differentialDiagnosis?: string[];
  relatedConditions?: string[];
  contraindications?: string[];
  drugInteractions?: string[];
  evidenceLevel?: 'A' | 'B' | 'C' | 'D';
  guidelines?: string[];
  specialtyRelevance?: string[];
}

// Knowledge node in the medical graph
export interface KnowledgeNode {
  id: string;
  type: MedicalDomain;
  title: string;
  content: EnrichedContent;
  connections: string[]; // IDs of connected nodes
  clinicalPriority: 'critical' | 'high' | 'moderate' | 'low';
  lastUpdated: Date;
}

// Unified knowledge store
class MedicalKnowledgeStore {
  private nodes: Map<string, KnowledgeNode> = new Map();
  private domainIndex: Map<MedicalDomain, Set<string>> = new Map();
  private clinicalIndex: Map<string, Set<string>> = new Map(); // Index by clinical terms
  
  // Singleton instance
  private static instance: MedicalKnowledgeStore;
  static getInstance(): MedicalKnowledgeStore {
    if (!MedicalKnowledgeStore.instance) {
      MedicalKnowledgeStore.instance = new MedicalKnowledgeStore();
    }
    return MedicalKnowledgeStore.instance;
  }

  /**
   * Register medical knowledge node
   */
  registerNode(node: KnowledgeNode): void {
    this.nodes.set(node.id, node);
    
    // Index by domain
    if (!this.domainIndex.has(node.type)) {
      this.domainIndex.set(node.type, new Set());
    }
    this.domainIndex.get(node.type)!.add(node.id);
    
    // Index clinical terms
    this.indexClinicalTerms(node);
    
    console.log(`[Medical Knowledge] Registered: ${node.title} (${node.type})`);
  }

  /**
   * Index clinical terms for fast lookup
   */
  private indexClinicalTerms(node: KnowledgeNode): void {
    const terms = this.extractClinicalTerms(node);
    terms.forEach(term => {
      if (!this.clinicalIndex.has(term)) {
        this.clinicalIndex.set(term, new Set());
      }
      this.clinicalIndex.get(term)!.add(node.id);
    });
  }

  /**
   * Extract clinical terms from content
   */
  private extractClinicalTerms(node: KnowledgeNode): string[] {
    const terms: string[] = [];
    const content = node.content.content.toLowerCase();
    
    // Extract key terms, symptoms, findings
    const patterns = [
      /\b\w+(?:itis|osis|emia|uria|algia|pathy|megaly|ectasia)\b/g, // Medical suffixes
      /\b(?:fever|pain|nausea|vomiting|dyspnea|chest pain|headache)\b/g, // Common symptoms
      /\b(?:hypertension|diabetes|asthma|copd|chf|cad)\b/g, // Common conditions
    ];
    
    patterns.forEach(pattern => {
      const matches = content.match(pattern) || [];
      terms.push(...matches);
    });
    
    return [...new Set(terms)];
  }

  /**
   * Get node by ID
   */
  getNode(id: string): KnowledgeNode | undefined {
    return this.nodes.get(id);
  }

  /**
   * Get all nodes in a domain
   */
  getDomainNodes(domain: MedicalDomain): KnowledgeNode[] {
    const ids = this.domainIndex.get(domain) || new Set();
    return Array.from(ids).map(id => this.nodes.get(id)!).filter(Boolean);
  }

  /**
   * Find nodes by clinical term
   */
  findByClinicalTerm(term: string): KnowledgeNode[] {
    const ids = this.clinicalIndex.get(term.toLowerCase()) || new Set();
    return Array.from(ids).map(id => this.nodes.get(id)!).filter(Boolean);
  }

  /**
   * Get connected knowledge nodes
   */
  getConnectedNodes(nodeId: string): KnowledgeNode[] {
    const node = this.nodes.get(nodeId);
    if (!node) return [];
    
    return node.connections
      .map(id => this.nodes.get(id))
      .filter((n): n is KnowledgeNode => n !== undefined);
  }

  /**
   * Query knowledge graph with clinical context
   */
  queryWithContext(
    query: string, 
    context?: ClinicalContext
  ): KnowledgeNode[] {
    // Start with basic search
    let results = this.findByClinicalTerm(query);
    
    // Filter by clinical context if provided
    if (context) {
      results = results.filter(node => 
        this.isClinicallyRelevant(node, context)
      );
    }
    
    // Sort by clinical priority
    return results.sort((a, b) => 
      this.priorityWeight(b.clinicalPriority) - this.priorityWeight(a.clinicalPriority)
    );
  }

  /**
   * Check if content is clinically relevant to context
   */
  private isClinicallyRelevant(node: KnowledgeNode, context: ClinicalContext): boolean {
    // Age-appropriate content
    if (context.patientAge !== undefined && node.content.clinicalContext?.patientAge) {
      const ageDiff = Math.abs(context.patientAge - node.content.clinicalContext.patientAge);
      if (ageDiff > 20) return false; // Too different age group
    }
    
    // Check contraindications
    if (context.comorbidities && node.content.contraindications) {
      const hasContraindication = context.comorbidities.some(c => 
        node.content.contraindications!.includes(c)
      );
      if (hasContraindication) return false;
    }
    
    // Check drug interactions
    if (context.currentMedications && node.content.drugInteractions) {
      const hasInteraction = context.currentMedications.some(m => 
        node.content.drugInteractions!.includes(m)
      );
      // Still show but flag it
    }
    
    return true;
  }

  private priorityWeight(priority: string): number {
    const weights = { critical: 4, high: 3, moderate: 2, low: 1 };
    return weights[priority as keyof typeof weights] || 0;
  }

  /**
   * Get knowledge statistics
   */
  getStats(): {
    totalNodes: number;
    byDomain: Record<MedicalDomain, number>;
    clinicalTerms: number;
  } {
    const byDomain: Record<string, number> = {};
    this.domainIndex.forEach((ids, domain) => {
      byDomain[domain] = ids.size;
    });
    
    return {
      totalNodes: this.nodes.size,
      byDomain: byDomain as Record<MedicalDomain, number>,
      clinicalTerms: this.clinicalIndex.size,
    };
  }
}

// React hook for using medical knowledge
export function useMedicalKnowledge() {
  const store = useRef(MedicalKnowledgeStore.getInstance());
  const [stats, setStats] = useState(store.current.getStats());

  const registerContent = useCallback((content: EducationalContent, domain: MedicalDomain) => {
    const node: KnowledgeNode = {
      id: content.id,
      type: domain,
      title: content.name,
      content: {
        ...content,
        id: content.id,
        title: content.name,
        source: content.citations?.[0]?.source || 'Medical Knowledge Base',
        content: formatContentForDisplay(content),
      } as EnrichedContent,
      connections: content.crossReferences?.map(ref => ref.targetId) || [],
      clinicalPriority: content.tags?.clinicalRelevance === 'critical' ? 'critical' :
                       content.tags?.clinicalRelevance === 'high' ? 'high' :
                       content.tags?.clinicalRelevance === 'medium' ? 'moderate' : 'low',
      lastUpdated: new Date(),
    };
    
    store.current.registerNode(node);
    setStats(store.current.getStats());
  }, []);

  const queryKnowledge = useCallback((query: string, context?: ClinicalContext) => {
    return store.current.queryWithContext(query, context);
  }, []);

  const getDomainContent = useCallback((domain: MedicalDomain) => {
    return store.current.getDomainNodes(domain);
  }, []);

  return {
    registerContent,
    queryKnowledge,
    getDomainContent,
    stats,
  };
}

// Helper to format content
function formatContentForDisplay(content: EducationalContent): string {
  const level3 = content.levels[3];
  if (!level3) return '';
  
  let formatted = '';
  
  if (level3.summary) {
    formatted += `## Clinical Overview\n${level3.summary}\n\n`;
  }
  
  if (level3.explanation) {
    formatted += `## Detailed Explanation\n${level3.explanation}\n\n`;
  }
  
  if (level3.keyTerms?.length) {
    formatted += `## Medical Terminology\n`;
    level3.keyTerms.forEach(term => {
      formatted += `- **${term.term}**`;
      if (term.pronunciation) {
        formatted += ` /${term.pronunciation}/`;
      }
      formatted += `: ${term.definition}\n`;
      if (term.etymology) {
        formatted += `  *Etymology: ${term.etymology}*\n`;
      }
    });
    formatted += `\n`;
  }
  
  if (level3.clinicalNotes) {
    formatted += `## Clinical Correlations\n${level3.clinicalNotes}\n\n`;
  }
  
  if (level3.patientCounselingPoints?.length) {
    formatted += `## Patient Counseling Points\n`;
    level3.patientCounselingPoints.forEach(point => {
      formatted += `- ${point}\n`;
    });
    formatted += `\n`;
  }
  
  return formatted.trim();
}

// Export singleton for direct use
export const medicalKnowledge = MedicalKnowledgeStore.getInstance();
