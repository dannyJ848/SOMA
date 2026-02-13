/**
 * TimelineInsights Component
 * 
 * Displays generated insights from the timeline data with
 * confidence levels and recommendations.
 */

import React, { useState } from 'react';
import type { TimelineInsight, InsightType, InsightConfidence } from '../../../core/timeline';

// ============================================================================
// Types
// ============================================================================

interface TimelineInsightsProps {
  insights: TimelineInsight[];
  onClose?: () => void;
  onInsightClick?: (insight: TimelineInsight) => void;
}

// ============================================================================
// Icons & Styles
// ============================================================================

const InsightTypeIcons: Record<InsightType, string> = {
  'medication-effectiveness': '💊',
  'lab-trend': '📈',
  'symptom-pattern': '😷',
  'lifestyle-correlation': '🌱',
  'environmental-factor': '🌍',
  'temporal-pattern': '⏰',
  'severity-progression': '📊',
  'treatment-response': '💉',
};

const ConfidenceStyles: Record<InsightConfidence, { bg: string; border: string; badge: string }> = {
  high: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
  },
  medium: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  low: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    badge: 'bg-gray-100 text-gray-600',
  },
};

// ============================================================================
// Component
// ============================================================================

export const TimelineInsights: React.FC<TimelineInsightsProps> = ({
  insights,
  onClose,
  onInsightClick,
}) => {
  const [selectedType, setSelectedType] = useState<InsightType | 'all'>('all');
  const [selectedConfidence, setSelectedConfidence] = useState<InsightConfidence | 'all'>('all');
  const [showActionableOnly, setShowActionableOnly] = useState(false);
  const [expandedInsightId, setExpandedInsightId] = useState<string | null>(null);

  // Filter insights
  const filteredInsights = insights.filter((insight) => {
    if (selectedType !== 'all' && insight.type !== selectedType) return false;
    if (selectedConfidence !== 'all' && insight.confidence !== selectedConfidence) return false;
    if (showActionableOnly && !insight.actionable) return false;
    return true;
  });

  // Group by type
  const insightsByType = insights.reduce((acc, insight) => {
    acc[insight.type] = (acc[insight.type] || 0) + 1;
    return acc;
  }, {} as Record<InsightType, number>);

  // Count by confidence
  const confidenceCounts = insights.reduce((acc, insight) => {
    acc[insight.confidence] = (acc[insight.confidence] || 0) + 1;
    return acc;
  }, {} as Record<InsightConfidence, number>);

  const actionableCount = insights.filter((i) => i.actionable).length;

  const formatDateRange = (start: Date, end: Date) => {
    const startStr = new Date(start).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
    const endStr = new Date(end).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
    return startStr === endStr ? startStr : `${startStr} - ${endStr}`;
  };

  if (insights.length === 0) {
    return (
      <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-blue-800 flex items-center gap-2">
            💡 Timeline Insights
          </h3>
          {onClose && (
            <button onClick={onClose} className="text-blue-600 hover:text-blue-700">
              ✕
            </button>
          )}
        </div>
        <p className="text-blue-700">
          No insights available yet. Add more health events to discover patterns.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4 mb-4 border border-indigo-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-semibold text-indigo-900">Timeline Insights</h3>
            <p className="text-sm text-indigo-600">
              {filteredInsights.length} of {insights.length} insights
            </p>
          </div>
        </div>
        
        {onClose && (
          <button 
            onClick={onClose} 
            className="text-indigo-400 hover:text-indigo-600 p-1"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="mb-4 space-y-3">
        {/* Type Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedType === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            All ({insights.length})
          </button>
          
          {Object.entries(insightsByType).map(([type, count]) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as InsightType)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                selectedType === type
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <span>{InsightTypeIcons[type as InsightType]}</span>
              <span className="capitalize">{type.replace(/-/g, ' ')}</span>
              <span>({count})</span>
            </button>
          ))}
        </div>

        {/* Confidence Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedConfidence('all')}
            className={`px-2 py-1 rounded text-xs transition-all ${
              selectedConfidence === 'all'
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Confidence
          </button>
          
          {(['high', 'medium', 'low'] as InsightConfidence[]).map((conf) => (
            <button
              key={conf}
              onClick={() => setSelectedConfidence(conf)}
              className={`px-2 py-1 rounded text-xs capitalize transition-all ${
                selectedConfidence === conf
                  ? ConfidenceStyles[conf].badge
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {conf} ({confidenceCounts[conf] || 0})
            </button>
          ))}
        </div>

        {/* Actionable Toggle */}
        <label className="flex items-center gap-2 text-sm text-indigo-700 cursor-pointer">
          <input
            type="checkbox"
            checked={showActionableOnly}
            onChange={(e) => setShowActionableOnly(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          Show actionable only ({actionableCount})
        </label>
      </div>

      {/* Insights List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredInsights.length === 0 ? (
          <div className="text-center py-6 text-indigo-400">
            No insights match your filters
          </div>
        ) : (
          filteredInsights.map((insight) => {
            const styles = ConfidenceStyles[insight.confidence];
            const isExpanded = expandedInsightId === insight.id;
            
            return (
              <div
                key={insight.id}
                className={`
                  rounded-lg border-2 p-4 cursor-pointer transition-all
                  ${styles.bg} ${styles.border}
                  ${isExpanded ? 'shadow-md' : 'hover:shadow-sm'}
                `}
                onClick={() => {
                  setExpandedInsightId(isExpanded ? null : insight.id);
                  onInsightClick?.(insight);
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow-sm">
                    {InsightTypeIcons[insight.type]}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${styles.badge}`}>
                        {insight.confidence} confidence
                      </span>
                      {insight.actionable && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                          💡 Actionable
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mt-1">{insight.description}</p>
                    
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>📅 {formatDateRange(insight.dateRange.start, insight.dateRange.end)}</span>
                      <span>🔗 {insight.relatedEventIds.length} related events</span>
                    </div>
                    
                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200/50">
                        {insight.recommendation && (
                          <div className="bg-white rounded-lg p-3 mb-3">
                            <span className="text-sm font-medium text-indigo-700">💡 Recommendation:</span>
                            <p className="text-gray-700 mt-1">{insight.recommendation}</p>
                          </div>
                        )}
                        
                        <div className="text-xs text-gray-500">
                          Generated: {new Date(insight.generatedAt).toLocaleDateString()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TimelineInsights;
