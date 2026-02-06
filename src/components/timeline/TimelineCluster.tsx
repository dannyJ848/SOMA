/**
 * TimelineCluster Component
 * 
 * Displays a cluster of related events that can be expanded
 * to show individual events.
 */

import React from 'react';
import type { EventCluster, EventCategory, EventSeverity } from '../../../core/timeline';

// ============================================================================
// Types
// ============================================================================

interface TimelineClusterProps {
  cluster: EventCluster;
  isExpanded: boolean;
  onToggle: () => void;
  severityColors: Record<EventSeverity, { bg: string; border: string; text: string }>;
}

// ============================================================================
// Component
// ============================================================================

export const TimelineCluster: React.FC<TimelineClusterProps> = ({
  cluster,
  isExpanded,
  onToggle,
  severityColors,
}) => {
  const colors = severityColors[cluster.severity];
  
  // Category colors
  const categoryColors: Record<EventCategory, string> = {
    medical: 'bg-red-100 text-red-700 border-red-300',
    lifestyle: 'bg-green-100 text-green-700 border-green-300',
    'life-event': 'bg-orange-100 text-orange-700 border-orange-300',
    milestone: 'bg-purple-100 text-purple-700 border-purple-300',
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  // Count events by category
  const categoryCounts = cluster.events.reduce((acc, event) => {
    acc[event.category] = (acc[event.category] || 0) + 1;
    return acc;
  }, {} as Record<EventCategory, number>);

  // Category icons
  const categoryIcons: Record<EventCategory, string> = {
    medical: '🏥',
    lifestyle: '🌱',
    'life-event': '📅',
    milestone: '🏆',
  };

  return (
    <div className="timeline-cluster">
      <div
        className={`
          rounded-lg border-2 cursor-pointer transition-all duration-200
          ${colors.border}
          ${isExpanded ? 'shadow-md' : 'hover:shadow-md'}
        `}
        onClick={onToggle}
      >
        <div className={`${colors.bg} rounded-lg p-4`}>
          <div className="flex items-center gap-4">
            {/* Cluster Icon */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl"
                >
                  📦
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {cluster.events.length}
                </span>
              </div>
            </div>

            {/* Cluster Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900">
                  {cluster.theme 
                    ? `${cluster.theme.charAt(0).toUpperCase() + cluster.theme.slice(1)} Events` 
                    : 'Related Events'}
                </h4>
                <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[cluster.primaryCategory]}`}>
                  {categoryIcons[cluster.primaryCategory]} {cluster.primaryCategory}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                {cluster.summary}
              </p>

              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                <span>
                  📅 {formatDate(cluster.startDate)} - {formatDate(cluster.endDate)}
                </span>
                
                {/* Category breakdown */}
                <div className="flex items-center gap-2">
                  {Object.entries(categoryCounts).map(([cat, count]) => (
                    <span key={cat} className="flex items-center gap-1">
                      <span>{categoryIcons[cat as EventCategory]}</span>
                      <span>{count}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Expand/Collapse Indicator */}
            <div className="flex-shrink-0">
              <span className="text-gray-400 text-lg">
                {isExpanded ? '▼' : '▶'}
              </span>
            </div>
          </div>

          {/* Preview of events when collapsed */}
          {!isExpanded && (
            <div className="mt-3 pt-3 border-t border-gray-200/50">
              <div className="flex flex-wrap gap-2">
                {cluster.events.slice(0, 5).map((event) => (
                  <span
                    key={event.id}
                    className="text-xs px-2 py-1 bg-white/70 rounded text-gray-700 truncate max-w-[150px]"
                  >
                    {event.title}
                  </span>
                ))}
                {cluster.events.length > 5 && (
                  <span className="text-xs px-2 py-1 text-gray-500">
                    +{cluster.events.length - 5} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expanded Events */}
      {isExpanded && (
        <div className="mt-4 ml-6 pl-6 border-l-2 border-gray-200 space-y-3">
          <p className="text-sm text-gray-500 mb-3">
            Click an event to view details
          </p>
          {cluster.events.map((event) => (
            <div
              key={event.id}
              className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                // Event click handler would be passed here
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{categoryIcons[event.category]}</span>
                <span className="font-medium text-gray-900">{event.title}</span>
                <span className="text-xs text-gray-500">
                  {formatDate(event.date)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelineCluster;
