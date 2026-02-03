import React, { useState, useEffect, useMemo, useCallback } from 'react';

// ============================================================================
// Types
// ============================================================================

export interface NavigationSuggestion {
  id: string;
  type: 'related' | 'hierarchical' | 'contextual' | 'trending' | 'ai-recommended';
  regionId: string;
  regionName: string;
  system: string; // e.g., 'cardiovascular', 'respiratory'
  layer?: string;
  
  // Display info
  title: string;
  description: string;
  icon?: string; // Emoji or icon name
  
  // Reasoning
  reason: string; // Why this is suggested
  confidence: number; // 0-1
  relevanceScore: number;
  
  // Context
  basedOn?: string[]; // What this suggestion is based on
  conversationContext?: string[];
  
  // Action
  action: 'navigate' | 'compare' | 'highlight' | 'layer';
}

export interface SmartSuggestionsProps {
  // Current context
  currentRegionId?: string;
  currentLayer?: string;
  conversationHistory?: string[];
  recentCommands?: string[];
  
  // User context
  userConditions?: string[]; // User's health conditions
  userMedications?: string[]; // User's medications
  
  // Callbacks
  onSuggestionClick: (suggestion: NavigationSuggestion) => void;
  onDismiss?: (suggestionId: string) => void;
  onViewAll?: () => void;
  
  // Display options
  maxSuggestions?: number;
  showReasons?: boolean;
  showConfidence?: boolean;
  layout?: 'horizontal' | 'vertical' | 'grid';
  size?: 'compact' | 'normal' | 'detailed';
  
  // Filtering
  filterBySystem?: string[]; // Only show these systems
  excludeRegionIds?: string[]; // Don't suggest these
  
  className?: string;
}

// ============================================================================
// Related Regions Database
// ============================================================================

export const RELATED_REGIONS: Record<string, {
  related: string[]; // Related region IDs
  parent?: string; // Parent region
  children: string[]; // Child regions
  system: string;
  name: string;
  description: string;
  icon: string;
}> = {
  // Cardiovascular System
  'heart': {
    related: ['lungs', 'aorta', 'vena-cava', 'coronary-arteries'],
    parent: 'chest',
    children: ['left-ventricle', 'right-ventricle', 'left-atrium', 'right-atrium'],
    system: 'cardiovascular',
    name: 'Heart',
    description: 'Muscular organ that pumps blood throughout the body',
    icon: 'heart'
  },
  'left-ventricle': {
    related: ['aorta', 'left-atrium', 'mitral-valve'],
    parent: 'heart',
    children: [],
    system: 'cardiovascular',
    name: 'Left Ventricle',
    description: 'Pumps oxygenated blood to the body',
    icon: 'heart'
  },
  'right-ventricle': {
    related: ['pulmonary-artery', 'right-atrium', 'tricuspid-valve'],
    parent: 'heart',
    children: [],
    system: 'cardiovascular',
    name: 'Right Ventricle',
    description: 'Pumps deoxygenated blood to the lungs',
    icon: 'heart'
  },
  'aorta': {
    related: ['heart', 'left-ventricle', 'arteries'],
    parent: 'arteries',
    children: ['aortic-arch', 'descending-aorta'],
    system: 'cardiovascular',
    name: 'Aorta',
    description: 'Largest artery in the body',
    icon: 'blood'
  },
  'coronary-arteries': {
    related: ['heart', 'aorta'],
    parent: 'arteries',
    children: ['left-coronary', 'right-coronary'],
    system: 'cardiovascular',
    name: 'Coronary Arteries',
    description: 'Supply blood to the heart muscle',
    icon: 'blood'
  },
  
  // Respiratory System
  'lungs': {
    related: ['heart', 'trachea', 'bronchi', 'diaphragm'],
    parent: 'chest',
    children: ['left-lung', 'right-lung'],
    system: 'respiratory',
    name: 'Lungs',
    description: 'Primary organs of respiration',
    icon: 'lungs'
  },
  'left-lung': {
    related: ['heart', 'bronchi', 'left-bronchus'],
    parent: 'lungs',
    children: ['left-upper-lobe', 'left-lower-lobe'],
    system: 'respiratory',
    name: 'Left Lung',
    description: 'Two-lobed lung with cardiac notch',
    icon: 'lungs'
  },
  'right-lung': {
    related: ['heart', 'bronchi', 'right-bronchus'],
    parent: 'lungs',
    children: ['right-upper-lobe', 'right-middle-lobe', 'right-lower-lobe'],
    system: 'respiratory',
    name: 'Right Lung',
    description: 'Three-lobed lung',
    icon: 'lungs'
  },
  'trachea': {
    related: ['larynx', 'bronchi', 'esophagus'],
    parent: 'respiratory',
    children: ['left-bronchus', 'right-bronchus'],
    system: 'respiratory',
    name: 'Trachea',
    description: 'Windpipe connecting larynx to bronchi',
    icon: 'lungs'
  },
  
  // Nervous System
  'brain': {
    related: ['spinal-cord', 'cerebrospinal-fluid', 'skull'],
    parent: 'head',
    children: ['cerebrum', 'cerebellum', 'brainstem'],
    system: 'nervous',
    name: 'Brain',
    description: 'Control center of the nervous system',
    icon: 'brain'
  },
  'cerebrum': {
    related: ['cerebellum', 'brainstem', 'cerebral-cortex'],
    parent: 'brain',
    children: ['frontal-lobe', 'parietal-lobe', 'temporal-lobe', 'occipital-lobe'],
    system: 'nervous',
    name: 'Cerebrum',
    description: 'Largest part of the brain, responsible for higher functions',
    icon: 'brain'
  },
  'cerebellum': {
    related: ['brain', 'cerebrum', 'brainstem'],
    parent: 'brain',
    children: [],
    system: 'nervous',
    name: 'Cerebellum',
    description: 'Coordinates movement and balance',
    icon: 'brain'
  },
  'spinal-cord': {
    related: ['brain', 'vertebrae', 'peripheral-nerves'],
    parent: 'nervous',
    children: ['cervical-spine', 'thoracic-spine', 'lumbar-spine'],
    system: 'nervous',
    name: 'Spinal Cord',
    description: 'Transmits signals between brain and body',
    icon: 'brain'
  },
  
  // Digestive System
  'stomach': {
    related: ['esophagus', 'small-intestine', 'liver', 'pancreas'],
    parent: 'abdomen',
    children: ['cardia', 'fundus', 'body', 'pylorus'],
    system: 'digestive',
    name: 'Stomach',
    description: 'Organ that digests food',
    icon: 'stomach'
  },
  'liver': {
    related: ['stomach', 'gallbladder', 'pancreas', 'small-intestine'],
    parent: 'abdomen',
    children: ['left-lobe', 'right-lobe', 'caudate-lobe', 'quadrate-lobe'],
    system: 'digestive',
    name: 'Liver',
    description: 'Largest internal organ, produces bile',
    icon: 'liver'
  },
  'small-intestine': {
    related: ['stomach', 'large-intestine', 'liver', 'pancreas'],
    parent: 'abdomen',
    children: ['duodenum', 'jejunum', 'ileum'],
    system: 'digestive',
    name: 'Small Intestine',
    description: 'Primary site of nutrient absorption',
    icon: 'intestine'
  },
  'large-intestine': {
    related: ['small-intestine', 'rectum', 'appendix'],
    parent: 'abdomen',
    children: ['cecum', 'colon', 'rectum'],
    system: 'digestive',
    name: 'Large Intestine',
    description: 'Absorbs water and forms feces',
    icon: 'intestine'
  },
  
  // Urinary System
  'kidneys': {
    related: ['bladder', 'ureters', 'adrenal-glands', 'aorta'],
    parent: 'abdomen',
    children: ['left-kidney', 'right-kidney'],
    system: 'urinary',
    name: 'Kidneys',
    description: 'Filter blood and produce urine',
    icon: 'kidney'
  },
  'bladder': {
    related: ['kidneys', 'ureters', 'urethra'],
    parent: 'pelvis',
    children: [],
    system: 'urinary',
    name: 'Bladder',
    description: 'Stores urine before excretion',
    icon: 'bladder'
  },
  
  // Skeletal System
  'skull': {
    related: ['brain', 'jaw', 'spinal-cord'],
    parent: 'skeletal',
    children: ['cranium', 'facial-bones'],
    system: 'skeletal',
    name: 'Skull',
    description: 'Protects the brain and supports facial structures',
    icon: 'bone'
  },
  'vertebrae': {
    related: ['spinal-cord', 'ribs', 'pelvis'],
    parent: 'skeletal',
    children: ['cervical-vertebrae', 'thoracic-vertebrae', 'lumbar-vertebrae'],
    system: 'skeletal',
    name: 'Vertebrae',
    description: 'Bones forming the spinal column',
    icon: 'bone'
  },
  
  // Muscular System
  'heart-muscle': {
    related: ['heart', 'skeletal-muscle', 'smooth-muscle'],
    parent: 'muscular',
    children: ['myocardium'],
    system: 'muscular',
    name: 'Cardiac Muscle',
    description: 'Involuntary muscle of the heart',
    icon: 'muscle'
  }
};

// System icons mapping
const SYSTEM_ICONS: Record<string, string> = {
  cardiovascular: 'heart',
  respiratory: 'lungs',
  nervous: 'brain',
  digestive: 'stomach',
  urinary: 'kidney',
  skeletal: 'bone',
  muscular: 'muscle',
  endocrine: 'gland',
  immune: 'shield',
  reproductive: 'reproductive'
};

// System display names
const SYSTEM_NAMES: Record<string, string> = {
  cardiovascular: 'Cardiovascular',
  respiratory: 'Respiratory',
  nervous: 'Nervous',
  digestive: 'Digestive',
  urinary: 'Urinary',
  skeletal: 'Skeletal',
  muscular: 'Muscular',
  endocrine: 'Endocrine',
  immune: 'Immune',
  reproductive: 'Reproductive'
};

// ============================================================================
// Suggestion Engine
// ============================================================================

export class SuggestionEngine {
  // Generate related regions based on current region
  static getRelatedRegions(regionId: string): NavigationSuggestion[] {
    const region = RELATED_REGIONS[regionId];
    if (!region) return [];
    
    return region.related
      .filter(id => RELATED_REGIONS[id])
      .map((id, index) => {
        const related = RELATED_REGIONS[id];
        return {
          id: `related-${regionId}-${id}-${index}`,
          type: 'related',
          regionId: id,
          regionName: related.name,
          system: related.system,
          title: `Related: ${related.name}`,
          description: related.description,
          icon: related.icon,
          reason: `Anatomically connected to ${region.name}`,
          confidence: 0.85,
          relevanceScore: 0.8,
          basedOn: [regionId],
          action: 'navigate'
        };
      });
  }
  
  // Generate hierarchical suggestions (parent/child)
  static getHierarchicalRegions(regionId: string): NavigationSuggestion[] {
    const region = RELATED_REGIONS[regionId];
    if (!region) return [];
    
    const suggestions: NavigationSuggestion[] = [];
    
    // Add parent if exists
    if (region.parent && RELATED_REGIONS[region.parent]) {
      const parent = RELATED_REGIONS[region.parent];
      suggestions.push({
        id: `hierarchy-parent-${regionId}`,
        type: 'hierarchical',
        regionId: region.parent,
        regionName: parent.name,
        system: parent.system,
        title: `Parent: ${parent.name}`,
        description: parent.description,
        icon: parent.icon,
        reason: `Contains ${region.name}`,
        confidence: 0.95,
        relevanceScore: 0.9,
        basedOn: [regionId],
        action: 'navigate'
      });
    }
    
    // Add children
    region.children.forEach((childId, index) => {
      if (RELATED_REGIONS[childId]) {
        const child = RELATED_REGIONS[childId];
        suggestions.push({
          id: `hierarchy-child-${regionId}-${childId}-${index}`,
          type: 'hierarchical',
          regionId: childId,
          regionName: child.name,
          system: child.system,
          title: `Part of: ${child.name}`,
          description: child.description,
          icon: child.icon,
          reason: `Component of ${region.name}`,
          confidence: 0.9,
          relevanceScore: 0.85,
          basedOn: [regionId],
          action: 'navigate'
        });
      }
    });
    
    return suggestions;
  }
  
  // Generate contextual suggestions from conversation
  static getContextualSuggestions(
    conversationHistory: string[],
    currentRegionId?: string
  ): NavigationSuggestion[] {
    if (!conversationHistory || conversationHistory.length === 0) {
      return [];
    }
    
    // Combine recent conversation
    const recentText = conversationHistory.slice(-3).join(' ').toLowerCase();
    const suggestions: NavigationSuggestion[] = [];
    
    // Keyword to region mapping
    const keywordMap: Record<string, string[]> = {
      'heart': ['heart', 'cardiac', 'pulse', 'chest pain', 'blood pressure', 'aorta'],
      'lungs': ['lung', 'breathe', 'breath', 'respiratory', 'oxygen', 'cough'],
      'brain': ['brain', 'headache', 'memory', 'cognitive', 'thinking', 'neurological'],
      'stomach': ['stomach', 'digestion', 'nausea', 'vomit', 'gastric', 'abdomen'],
      'liver': ['liver', 'hepatic', 'bile', 'detox'],
      'kidneys': ['kidney', 'renal', 'urine', 'filtration', 'bladder'],
      'spinal-cord': ['spine', 'back pain', 'nerve', 'sensation'],
      'vertebrae': ['back', 'spine', 'vertebrae', 'posture']
    };
    
    // Find matching regions
    Object.entries(keywordMap).forEach(([regionId, keywords]) => {
      if (regionId === currentRegionId) return;
      
      const matchCount = keywords.filter(kw => recentText.includes(kw)).length;
      if (matchCount > 0 && RELATED_REGIONS[regionId]) {
        const region = RELATED_REGIONS[regionId];
        suggestions.push({
          id: `contextual-${regionId}-${Date.now()}`,
          type: 'contextual',
          regionId,
          regionName: region.name,
          system: region.system,
          title: `Discussed: ${region.name}`,
          description: region.description,
          icon: region.icon,
          reason: 'Mentioned in recent conversation',
          confidence: Math.min(0.5 + (matchCount * 0.15), 0.9),
          relevanceScore: 0.6 + (matchCount * 0.1),
          conversationContext: conversationHistory.slice(-2),
          basedOn: ['conversation'],
          action: 'navigate'
        });
      }
    });
    
    return suggestions;
  }
  
  // Generate suggestions based on user health data
  static getHealthBasedSuggestions(
    conditions: string[] = [],
    medications: string[] = []
  ): NavigationSuggestion[] {
    const suggestions: NavigationSuggestion[] = [];
    
    // Condition to region mapping
    const conditionMap: Record<string, string[]> = {
      'hypertension': ['heart', 'aorta', 'kidneys'],
      'diabetes': ['pancreas', 'kidneys', 'eyes'],
      'asthma': ['lungs', 'bronchi', 'trachea'],
      'copd': ['lungs', 'bronchi'],
      'arrhythmia': ['heart'],
      'heart failure': ['heart', 'lungs'],
      'kidney disease': ['kidneys'],
      'liver disease': ['liver'],
      'neuropathy': ['brain', 'spinal-cord'],
      'anxiety': ['brain'],
      'depression': ['brain'],
      'gastritis': ['stomach'],
      'ibs': ['large-intestine', 'small-intestine']
    };
    
    // Medication to region mapping
    const medicationMap: Record<string, string[]> = {
      'lisinopril': ['heart', 'kidneys'],
      'metformin': ['liver', 'pancreas'],
      'insulin': ['pancreas'],
      'albuterol': ['lungs'],
      'atorvastatin': ['heart', 'liver'],
      'amlodipine': ['heart'],
      'metoprolol': ['heart'],
      'omeprazole': ['stomach'],
      'levothyroxine': ['thyroid'],
      'furosemide': ['kidneys']
    };
    
    // Generate suggestions from conditions
    conditions.forEach(condition => {
      const normalizedCondition = condition.toLowerCase();
      Object.entries(conditionMap).forEach(([condName, regionIds]) => {
        if (normalizedCondition.includes(condName.toLowerCase())) {
          regionIds.forEach(regionId => {
            if (RELATED_REGIONS[regionId]) {
              const region = RELATED_REGIONS[regionId];
              suggestions.push({
                id: `health-cond-${regionId}-${condition}`,
                type: 'contextual',
                regionId,
                regionName: region.name,
                system: region.system,
                title: `Your ${region.name}`,
                description: `Relevant to your condition: ${condition}`,
                icon: region.icon,
                reason: `Related to your ${condition}`,
                confidence: 0.75,
                relevanceScore: 0.7,
                basedOn: ['condition', condition],
                action: 'navigate'
              });
            }
          });
        }
      });
    });
    
    // Generate suggestions from medications
    medications.forEach(med => {
      const normalizedMed = med.toLowerCase();
      Object.entries(medicationMap).forEach(([medName, regionIds]) => {
        if (normalizedMed.includes(medName.toLowerCase())) {
          regionIds.forEach(regionId => {
            if (RELATED_REGIONS[regionId]) {
              const region = RELATED_REGIONS[regionId];
              suggestions.push({
                id: `health-med-${regionId}-${med}`,
                type: 'contextual',
                regionId,
                regionName: region.name,
                system: region.system,
                title: `Your ${region.name}`,
                description: `Affected by ${med}`,
                icon: region.icon,
                reason: `Related to your medication: ${med}`,
                confidence: 0.7,
                relevanceScore: 0.65,
                basedOn: ['medication', med],
                action: 'navigate'
              });
            }
          });
        }
      });
    });
    
    return suggestions;
  }
  
  // AI-powered suggestions (simulated - would connect to actual AI service)
  static async getAIRecommendations(
    context: {
      currentRegion?: string;
      conversationHistory: string[];
      userHealth?: { conditions: string[]; medications: string[] };
    }
  ): Promise<NavigationSuggestion[]> {
    // In a real implementation, this would call an AI service
    // For now, we simulate intelligent suggestions
    const suggestions: NavigationSuggestion[] = [];
    
    // Analyze conversation for deep connections
    const fullConversation = context.conversationHistory.join(' ').toLowerCase();
    
    // Simulate AI reasoning
    if (fullConversation.includes('blood') && fullConversation.includes('pressure')) {
      if (!context.currentRegion?.includes('heart')) {
        suggestions.push({
          id: `ai-heart-bp-${Date.now()}`,
          type: 'ai-recommended',
          regionId: 'heart',
          regionName: 'Heart',
          system: 'cardiovascular',
          title: 'Heart (Blood Pressure)',
          description: 'Central organ regulating blood pressure',
          icon: 'heart',
          reason: 'You discussed blood pressure - the heart is central to this topic',
          confidence: 0.92,
          relevanceScore: 0.88,
          basedOn: ['conversation analysis', 'blood pressure'],
          action: 'navigate'
        });
      }
    }
    
    if (fullConversation.includes('oxygen') || fullConversation.includes('breathing')) {
      suggestions.push({
        id: `ai-lungs-oxygen-${Date.now()}`,
        type: 'ai-recommended',
        regionId: 'lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        title: 'Lungs (Gas Exchange)',
        description: 'Primary site of oxygen exchange',
        icon: 'lungs',
        reason: 'You asked about oxygen and breathing',
        confidence: 0.9,
        relevanceScore: 0.85,
        basedOn: ['conversation analysis', 'oxygen'],
        action: 'navigate'
      });
    }
    
    // Add trending/popular suggestions
    const trending = ['brain', 'heart', 'lungs'];
    trending.forEach((regionId, index) => {
      if (regionId !== context.currentRegion && RELATED_REGIONS[regionId]) {
        const region = RELATED_REGIONS[regionId];
        suggestions.push({
          id: `trending-${regionId}-${index}`,
          type: 'trending',
          regionId,
          regionName: region.name,
          system: region.system,
          title: `Popular: ${region.name}`,
          description: region.description,
          icon: region.icon,
          reason: 'Frequently viewed by users',
          confidence: 0.6,
          relevanceScore: 0.5,
          basedOn: ['trending'],
          action: 'navigate'
        });
      }
    });
    
    return suggestions;
  }
  
  // Score and rank suggestions
  static rankSuggestions(
    suggestions: NavigationSuggestion[],
    currentContext: {
      currentRegionId?: string;
      conversationHistory?: string[];
    }
  ): NavigationSuggestion[] {
    return suggestions
      .map(suggestion => {
        let score = suggestion.relevanceScore;
        
        // Boost related type
        if (suggestion.type === 'related') score *= 1.2;
        
        // Boost hierarchical for navigation
        if (suggestion.type === 'hierarchical') score *= 1.1;
        
        // Boost contextual from conversation
        if (suggestion.type === 'contextual' && suggestion.basedOn?.includes('conversation')) {
          score *= 1.15;
        }
        
        // Boost AI recommendations
        if (suggestion.type === 'ai-recommended') score *= 1.05;
        
        // Reduce score for already viewed regions
        if (suggestion.regionId === currentContext.currentRegionId) {
          score *= 0.3;
        }
        
        return {
          ...suggestion,
          relevanceScore: score
        };
      })
      .sort((a, b) => b.relevanceScore - a.relevanceScore);
  }
  
  // Deduplicate suggestions by regionId
  static deduplicate(suggestions: NavigationSuggestion[]): NavigationSuggestion[] {
    const seen = new Set<string>();
    return suggestions.filter(suggestion => {
      if (seen.has(suggestion.regionId)) {
        return false;
      }
      seen.add(suggestion.regionId);
      return true;
    });
  }
}

// ============================================================================
// Hooks
// ============================================================================

// Hook for generating suggestions
export function useSmartSuggestions(options: {
  currentRegionId?: string;
  conversationHistory?: string[];
  userConditions?: string[];
  userMedications?: string[];
  maxSuggestions?: number;
  enableAI?: boolean;
}): {
  suggestions: NavigationSuggestion[];
  isLoading: boolean;
  refresh: () => void;
} {
  const {
    currentRegionId,
    conversationHistory = [],
    userConditions = [],
    userMedications = [],
    maxSuggestions = 5,
    enableAI = true
  } = options;
  
  const [suggestions, setSuggestions] = useState<NavigationSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  
  const refresh = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);
  
  useEffect(() => {
    let mounted = true;
    
    const generateSuggestions = async () => {
      setIsLoading(true);
      
      const allSuggestions: NavigationSuggestion[] = [];
      
      // Get related regions
      if (currentRegionId) {
        allSuggestions.push(...SuggestionEngine.getRelatedRegions(currentRegionId));
        allSuggestions.push(...SuggestionEngine.getHierarchicalRegions(currentRegionId));
      }
      
      // Get contextual suggestions
      allSuggestions.push(...SuggestionEngine.getContextualSuggestions(
        conversationHistory,
        currentRegionId
      ));
      
      // Get health-based suggestions
      allSuggestions.push(...SuggestionEngine.getHealthBasedSuggestions(
        userConditions,
        userMedications
      ));
      
      // Get AI recommendations if enabled
      if (enableAI) {
        try {
          const aiSuggestions = await SuggestionEngine.getAIRecommendations({
            currentRegion: currentRegionId,
            conversationHistory,
            userHealth: { conditions: userConditions, medications: userMedications }
          });
          allSuggestions.push(...aiSuggestions);
        } catch (error) {
          console.warn('AI suggestions failed:', error);
        }
      }
      
      // Process suggestions
      let processed = SuggestionEngine.deduplicate(allSuggestions);
      processed = SuggestionEngine.rankSuggestions(processed, { currentRegionId, conversationHistory });
      
      if (mounted) {
        setSuggestions(processed.slice(0, maxSuggestions));
        setIsLoading(false);
      }
    };
    
    generateSuggestions();
    
    return () => {
      mounted = false;
    };
  }, [
    currentRegionId,
    conversationHistory,
    userConditions,
    userMedications,
    maxSuggestions,
    enableAI,
    refreshKey
  ]);
  
  return { suggestions, isLoading, refresh };
}

// Hook for tracking suggestion interactions
export function useSuggestionAnalytics(): {
  trackClick: (suggestion: NavigationSuggestion) => void;
  trackDismiss: (suggestion: NavigationSuggestion) => void;
  getPopularSuggestions: () => NavigationSuggestion[];
} {
  const [analytics, setAnalytics] = useState<{
    clicks: Record<string, number>;
    dismisses: Record<string, number>;
  }>({
    clicks: {},
    dismisses: {}
  });
  
  const trackClick = useCallback((suggestion: NavigationSuggestion) => {
    setAnalytics(prev => ({
      ...prev,
      clicks: {
        ...prev.clicks,
        [suggestion.regionId]: (prev.clicks[suggestion.regionId] || 0) + 1
      }
    }));
  }, []);
  
  const trackDismiss = useCallback((suggestion: NavigationSuggestion) => {
    setAnalytics(prev => ({
      ...prev,
      dismisses: {
        ...prev.dismisses,
        [suggestion.id]: (prev.dismisses[suggestion.id] || 0) + 1
      }
    }));
  }, []);
  
  const getPopularSuggestions = useCallback(() => {
    return Object.entries(analytics.clicks)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([regionId]) => {
        // Return a basic suggestion structure for popular items
        const region = RELATED_REGIONS[regionId];
        return {
          id: `popular-${regionId}`,
          type: 'trending' as const,
          regionId,
          regionName: region?.name || regionId,
          system: region?.system || 'unknown',
          title: `Popular: ${region?.name || regionId}`,
          description: region?.description || '',
          icon: region?.icon,
          reason: 'Frequently accessed',
          confidence: 0.5,
          relevanceScore: 0.4,
          action: 'navigate' as const
        };
      });
  }, [analytics.clicks]);
  
  return { trackClick, trackDismiss, getPopularSuggestions };
}

// ============================================================================
// Suggestion Card Component
// ============================================================================

interface SuggestionCardProps {
  suggestion: NavigationSuggestion;
  onClick: () => void;
  onDismiss?: () => void;
  showReason: boolean;
  showConfidence: boolean;
  size: 'compact' | 'normal' | 'detailed';
}

function SuggestionCard({
  suggestion,
  onClick,
  onDismiss,
  showReason,
  showConfidence,
  size,
}: SuggestionCardProps): React.ReactElement {
  const getIconEmoji = (iconName?: string): string => {
    const emojiMap: Record<string, string> = {
      heart: 'heart',
      lungs: 'lungs',
      brain: 'brain',
      stomach: 'stomach',
      liver: 'liver',
      kidney: 'kidney',
      intestine: 'intestine',
      bone: 'bone',
      muscle: 'muscle',
      blood: 'drop_of_blood',
      gland: 'gland',
      shield: 'shield',
      bladder: 'toilet',
      reproductive: 'baby'
    };
    return emojiMap[iconName || ''] || 'anatomical_heart';
  };
  
  const getTypeLabel = (type: NavigationSuggestion['type']): string => {
    const labels: Record<string, string> = {
      related: 'Related',
      hierarchical: 'Hierarchy',
      contextual: 'Context',
      trending: 'Trending',
      'ai-recommended': 'AI Recommended'
    };
    return labels[type] || type;
  };
  
  const getTypeColor = (type: NavigationSuggestion['type']): string => {
    const colors: Record<string, string> = {
      related: '#3b82f6',
      hierarchical: '#8b5cf6',
      contextual: '#10b981',
      trending: '#f59e0b',
      'ai-recommended': '#ec4899'
    };
    return colors[type] || '#6b7280';
  };
  
  const getConfidenceBadge = (confidence: number): string => {
    if (confidence >= 0.9) return 'High';
    if (confidence >= 0.7) return 'Good';
    if (confidence >= 0.5) return 'Fair';
    return 'Low';
  };
  
  if (size === 'compact') {
    return (
      <div
        style={compactStyles.card}
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        role="button"
        tabIndex={0}
        aria-label={`Navigate to ${suggestion.title}`}
      >
        <div style={compactStyles.icon}>
          {getIconEmoji(suggestion.icon)}
        </div>
        <div style={compactStyles.content}>
          <div style={compactStyles.title}>{suggestion.regionName}</div>
          <div style={compactStyles.system}>{SYSTEM_NAMES[suggestion.system]}</div>
        </div>
        {showConfidence && (
          <div style={{
            ...compactStyles.badge,
            backgroundColor: getTypeColor(suggestion.type)
          }}>
            {getConfidenceBadge(suggestion.confidence)}
          </div>
        )}
        {onDismiss && (
          <button
            style={compactStyles.dismiss}
            onClick={(e) => { e.stopPropagation(); onDismiss(); }}
            aria-label={`Dismiss ${suggestion.title}`}
          >
            x
          </button>
        )}
      </div>
    );
  }
  
  if (size === 'detailed') {
    return (
      <div
        style={detailedStyles.card}
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        role="button"
        tabIndex={0}
        aria-label={`Navigate to ${suggestion.title}`}
      >
        <div style={detailedStyles.header}>
          <div style={detailedStyles.icon}>
            {getIconEmoji(suggestion.icon)}
          </div>
          <div style={detailedStyles.typeBadge}>
            <span
              style={{
                ...detailedStyles.typeLabel,
                backgroundColor: getTypeColor(suggestion.type)
              }}
            >
              {getTypeLabel(suggestion.type)}
            </span>
            {showConfidence && (
              <span style={detailedStyles.confidenceBadge}>
                {Math.round(suggestion.confidence * 100)}%
              </span>
            )}
          </div>
          {onDismiss && (
            <button
              style={detailedStyles.dismiss}
              onClick={(e) => { e.stopPropagation(); onDismiss(); }}
              aria-label={`Dismiss ${suggestion.title}`}
            >
              x
            </button>
          )}
        </div>
        
        <div style={detailedStyles.body}>
          <h4 style={detailedStyles.title}>{suggestion.regionName}</h4>
          <p style={detailedStyles.description}>{suggestion.description}</p>
          
          {showReason && (
            <div style={detailedStyles.reason}>
              <span style={detailedStyles.reasonLabel}>Why:</span>
              <span style={detailedStyles.reasonText}>{suggestion.reason}</span>
            </div>
          )}
          
          {suggestion.basedOn && suggestion.basedOn.length > 0 && (
            <div style={detailedStyles.basedOn}>
              <span style={detailedStyles.basedOnLabel}>Based on:</span>
              {suggestion.basedOn.map((item, i) => (
                <span key={i} style={detailedStyles.basedOnTag}>{item}</span>
              ))}
            </div>
          )}
        </div>
        
        <div style={detailedStyles.footer}>
          <span style={detailedStyles.system}>{SYSTEM_NAMES[suggestion.system]}</span>
        </div>
      </div>
    );
  }
  
  // Normal size
  return (
    <div
      style={normalStyles.card}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`Navigate to ${suggestion.title}`}
    >
      <div style={normalStyles.header}>
        <div style={normalStyles.icon}>
          {getIconEmoji(suggestion.icon)}
        </div>
        <span
          style={{
            ...normalStyles.typeBadge,
            backgroundColor: getTypeColor(suggestion.type)
          }}
        >
          {getTypeLabel(suggestion.type)}
        </span>
        {onDismiss && (
          <button
            style={normalStyles.dismiss}
            onClick={(e) => { e.stopPropagation(); onDismiss(); }}
            aria-label={`Dismiss ${suggestion.title}`}
          >
            x
          </button>
        )}
      </div>
      
      <div style={normalStyles.body}>
        <h4 style={normalStyles.title}>{suggestion.regionName}</h4>
        <p style={normalStyles.description}>{suggestion.description}</p>
        
        {showReason && (
          <div style={normalStyles.reason}>
            {suggestion.reason}
          </div>
        )}
      </div>
      
      {showConfidence && (
        <div style={normalStyles.footer}>
          <div style={normalStyles.confidenceBar}>
            <div
              style={{
                ...normalStyles.confidenceFill,
                width: `${suggestion.confidence * 100}%`,
                backgroundColor: getTypeColor(suggestion.type)
              }}
            />
          </div>
          <span style={normalStyles.confidenceText}>
            {getConfidenceBadge(suggestion.confidence)}
          </span>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function SmartNavigationSuggestions({
  currentRegionId,
  currentLayer,
  conversationHistory,
  recentCommands,
  userConditions,
  userMedications,
  onSuggestionClick,
  onDismiss,
  onViewAll,
  maxSuggestions = 5,
  showReasons = true,
  showConfidence = false,
  layout = 'horizontal',
  size = 'normal',
  filterBySystem,
  excludeRegionIds,
  className = '',
}: SmartSuggestionsProps): React.ReactElement {
  const { suggestions, isLoading } = useSmartSuggestions({
    currentRegionId,
    conversationHistory,
    userConditions,
    userMedications,
    maxSuggestions: maxSuggestions * 2, // Get extra for filtering
    enableAI: true
  });
  
  const { trackClick } = useSuggestionAnalytics();
  
  // Filter suggestions
  const filteredSuggestions = useMemo(() => {
    let filtered = suggestions;
    
    if (filterBySystem && filterBySystem.length > 0) {
      filtered = filtered.filter(s => filterBySystem.includes(s.system));
    }
    
    if (excludeRegionIds && excludeRegionIds.length > 0) {
      filtered = filtered.filter(s => !excludeRegionIds.includes(s.regionId));
    }
    
    return filtered.slice(0, maxSuggestions);
  }, [suggestions, filterBySystem, excludeRegionIds, maxSuggestions]);
  
  // Handle suggestion click
  const handleClick = useCallback((suggestion: NavigationSuggestion) => {
    trackClick(suggestion);
    onSuggestionClick(suggestion);
  }, [trackClick, onSuggestionClick]);
  
  // Get container styles based on layout
  const getContainerStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: 'flex',
      gap: '12px',
      width: '100%'
    };
    
    switch (layout) {
      case 'vertical':
        return { ...base, flexDirection: 'column' };
      case 'grid':
        return {
          ...base,
          flexDirection: 'row',
          flexWrap: 'wrap',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
        };
      case 'horizontal':
      default:
        return {
          ...base,
          flexDirection: 'row',
          overflowX: 'auto',
          paddingBottom: '8px'
        };
    }
  };
  
  if (isLoading) {
    return (
      <div style={containerStyles.loading} className={className}>
        <div style={containerStyles.spinner} />
        <span>Finding relevant anatomy...</span>
      </div>
    );
  }
  
  if (filteredSuggestions.length === 0) {
    return (
      <div style={containerStyles.empty} className={className}>
        <span>No suggestions available</span>
      </div>
    );
  }
  
  return (
    <div style={containerStyles.wrapper} className={className}>
      <div style={containerStyles.header}>
        <h3 style={containerStyles.title}>Suggested Regions</h3>
        {onViewAll && (
          <button style={containerStyles.viewAll} onClick={onViewAll}>
            View all
          </button>
        )}
      </div>
      
      <div style={getContainerStyles()}>
        {filteredSuggestions.map(suggestion => (
          <SuggestionCard
            key={suggestion.id}
            suggestion={suggestion}
            onClick={() => handleClick(suggestion)}
            onDismiss={onDismiss ? () => onDismiss(suggestion.id) : undefined}
            showReason={showReasons}
            showConfidence={showConfidence}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Styles
// ============================================================================

const containerStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    width: '100%',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  title: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 600,
    color: '#1f2937'
  },
  viewAll: {
    background: 'none',
    border: 'none',
    color: '#3b82f6',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '4px 8px'
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '20px',
    color: '#6b7280'
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid #e5e7eb',
    borderTopColor: '#3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  empty: {
    padding: '20px',
    textAlign: 'center',
    color: '#6b7280'
  }
};

const compactStyles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.2s',
    minWidth: '140px',
    position: 'relative'
  },
  icon: {
    fontSize: '16px'
  },
  content: {
    flex: 1,
    minWidth: 0
  },
  title: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#1f2937',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  system: {
    fontSize: '11px',
    color: '#6b7280'
  },
  badge: {
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '10px',
    color: 'white',
    fontWeight: 500
  },
  dismiss: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    fontSize: '12px',
    padding: '0 2px',
    marginLeft: '4px'
  }
};

const normalStyles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.2s',
    minWidth: '180px',
    maxWidth: '220px',

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  },
  icon: {
    fontSize: '20px'
  },
  typeBadge: {
    fontSize: '10px',
    padding: '2px 8px',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 500,
    marginLeft: 'auto'
  },
  dismiss: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '0 4px'
  },
  body: {
    flex: 1
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1f2937',
    margin: '0 0 4px 0'
  },
  description: {
    fontSize: '12px',
    color: '#6b7280',
    margin: 0,
    lineHeight: 1.4,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  reason: {
    fontSize: '11px',
    color: '#3b82f6',
    marginTop: '8px',
    padding: '4px 8px',
    backgroundColor: '#eff6ff',
    borderRadius: '4px'
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
    paddingTop: '8px',
    borderTop: '1px solid #f3f4f6'
  },
  confidenceBar: {
    flex: 1,
    height: '4px',
    backgroundColor: '#e5e7eb',
    borderRadius: '2px',
    overflow: 'hidden'
  },
  confidenceFill: {
    height: '100%',
    borderRadius: '2px',
    transition: 'width 0.3s'
  },
  confidenceText: {
    fontSize: '10px',
    color: '#6b7280',
    fontWeight: 500
  }
};

const detailedStyles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    transition: 'all 0.2s',
    minWidth: '280px',
    maxWidth: '320px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px'
  },
  icon: {
    fontSize: '28px',
    padding: '8px',
    backgroundColor: '#f3f4f6',
    borderRadius: '10px'
  },
  typeBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginLeft: 'auto'
  },
  typeLabel: {
    fontSize: '11px',
    padding: '4px 10px',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 500
  },
  confidenceBadge: {
    fontSize: '11px',
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
    padding: '4px 8px',
    borderRadius: '8px'
  },
  dismiss: {
    background: 'none',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '4px'
  },
  body: {
    flex: 1
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1f2937',
    margin: '0 0 8px 0'
  },
  description: {
    fontSize: '13px',
    color: '#6b7280',
    margin: '0 0 12px 0',
    lineHeight: 1.5
  },
  reason: {
    display: 'flex',
    gap: '4px',
    fontSize: '12px',
    marginBottom: '8px',
    padding: '8px 12px',
    backgroundColor: '#f0fdf4',
    borderRadius: '6px'
  },
  reasonLabel: {
    fontWeight: 500,
    color: '#15803d'
  },
  reasonText: {
    color: '#166534'
  },
  basedOn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexWrap: 'wrap',
    marginTop: '8px'
  },
  basedOnLabel: {
    fontSize: '11px',
    color: '#9ca3af'
  },
  basedOnTag: {
    fontSize: '10px',
    padding: '2px 8px',
    backgroundColor: '#e5e7eb',
    color: '#4b5563',
    borderRadius: '10px'
  },
  footer: {
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid #f3f4f6'
  },
  system: {
    fontSize: '12px',
    color: '#6b7280',
    fontWeight: 500
  }
};

// Add CSS animation for spinner
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default SmartNavigationSuggestions;
