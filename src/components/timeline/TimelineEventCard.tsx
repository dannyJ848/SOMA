/**
 * TimelineEventCard Component
 * 
 * Displays an individual timeline event with expandable details,
 * color-coding by severity, and category icons.
 */

import React, { useState } from 'react';
import type { TimelineEvent, EventCategory, EventSeverity } from '../../../core/timeline';

// ============================================================================
// Types
// ============================================================================

interface TimelineEventCardProps {
  event: TimelineEvent;
  isSelected?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  categoryIcons: Record<EventCategory, string>;
  severityColors: Record<EventSeverity, { bg: string; border: string; text: string }>;
}

// ============================================================================
// Event Type Icons
// ============================================================================

const EventTypeIcons: Record<string, string> = {
  'lab-result': '🧪',
  diagnosis: '🏥',
  'medication-start': '💊',
  'medication-stop': '🚫',
  'medication-change': '💊',
  procedure: '🔧',
  surgery: '✂️',
  symptom: '😷',
  vaccination: '💉',
  imaging: '📷',
  consultation: '👨‍⚕️',
  hospitalization: '🏨',
  'emergency-visit': '🚑',
  'allergy-identified': '⚠️',
  'exercise-streak': '🏃',
  'diet-change': '🥗',
  'sleep-pattern': '😴',
  'weight-change': '⚖️',
  'stress-level': '😰',
  'habit-start': '✨',
  'habit-stop': '🛑',
  'wellness-activity': '🧘',
  'device-sync': '⌚',
  move: '📦',
  pregnancy: '🤰',
  'birth-given': '👶',
  marriage: '💍',
  divorce: '💔',
  'job-change': '💼',
  retirement: '🏖️',
  travel: '✈️',
  trauma: '🤕',
  achievement: '🏆',
  'goal-reached': '🎯',
  anniversary: '🎉',
};

// ============================================================================
// Status Badges
// ============================================================================

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusStyles: Record<string, string> = {
    active: 'bg-green-100 text-green-700',
    resolved: 'bg-gray-100 text-gray-600',
    ongoing: 'bg-blue-100 text-blue-700',
    scheduled: 'bg-purple-100 text-purple-700',
    cancelled: 'bg-red-100 text-red-600 line-through',
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusStyles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

// ============================================================================
// Component
// ============================================================================

export const TimelineEventCard: React.FC<TimelineEventCardProps> = ({
  event,
  isSelected = false,
  onClick,
  onEdit,
  onDelete,
  categoryIcons,
  severityColors,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const colors = severityColors[event.severity];
  const categoryIcon = categoryIcons[event.category];
  const typeIcon = EventTypeIcons[event.type] || '📌';

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onClick?.();
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Render event-specific details
  const renderEventDetails = () => {
    const data = event.data as Record<string, unknown>;

    switch (event.type) {
      case 'lab-result':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Value:</span>
              <span className="font-medium">
                {data.value} {data.unit}
                {data.status !== 'normal' && (
                  <span className={`ml-2 text-sm ${data.status === 'critical' ? 'text-red-600 font-bold' : 'text-orange-600'}`}>
                    ({data.status})
                  </span>
                )}
              </span>
            </div>
            {data.referenceRange && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Reference Range:</span>
                <span className="font-medium">{data.referenceRange.low} - {data.referenceRange.high} {data.unit}</span>
              </div>
            )}
            {data.trend && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Trend:</span>
                <span className={`font-medium ${
                  data.trend === 'increasing' ? 'text-orange-600' : 
                  data.trend === 'decreasing' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {data.trend === 'increasing' ? '↑ Increasing' : 
                   data.trend === 'decreasing' ? '↓ Decreasing' : '→ Stable'}
                </span>
              </div>
            )}
            {data.changePercent && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Change:</span>
                <span className={`font-medium ${data.changePercent < 0 ? 'text-green-600' : 'text-orange-600'}`}>
                  {data.changePercent > 0 ? '+' : ''}{data.changePercent.toFixed(1)}%
                </span>
              </div>
            )}
          </div>
        );

      case 'medication-start':
      case 'medication-stop':
      case 'medication-change':
        return (
          <div className="space-y-2">
            {data.dose && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Dose:</span>
                <span className="font-medium">{data.dose}</span>
              </div>
            )}
            {data.frequency && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Frequency:</span>
                <span className="font-medium">{data.frequency}</span>
              </div>
            )}
            {data.indication && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">For:</span>
                <span className="font-medium">{data.indication}</span>
              </div>
            )}
            {data.prescribedBy && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Prescribed by:</span>
                <span className="font-medium">{data.prescribedBy}</span>
              </div>
            )}
            {data.sideEffects && data.sideEffects.length > 0 && (
              <div className="mt-3">
                <span className="text-gray-600">Side Effects:</span>
                <ul className="mt-1 space-y-1">
                  {(data.sideEffects as string[]).map((effect, idx) => (
                    <li key={idx} className="text-sm text-orange-700">• {effect}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'symptom':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Severity:</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      (data.severity as number) >= 7 ? 'bg-red-500' :
                      (data.severity as number) >= 4 ? 'bg-orange-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${(data.severity as number) * 10}%` }}
                  />
                </div>
                <span className="font-medium">{data.severity}/10</span>
              </div>
            </div>
            {data.duration && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{data.duration}</span>
              </div>
            )}
            {data.resolved && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-green-600">✓ Resolved</span>
              </div>
            )}
            {data.triggers && (data.triggers as string[]).length > 0 && (
              <div className="mt-3">
                <span className="text-gray-600">Triggers:</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {(data.triggers as string[]).map((trigger, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{trigger}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'diagnosis':
        return (
          <div className="space-y-2">
            {data.icdCode && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">ICD Code:</span>
                <span className="font-mono text-sm bg-gray-100 px-2 py-0.5 rounded">{data.icdCode}</span>
              </div>
            )}
            {data.severity && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Severity:</span>
                <span className={`font-medium capitalize ${
                  data.severity === 'severe' ? 'text-red-600' :
                  data.severity === 'moderate' ? 'text-orange-600' : 'text-yellow-600'
                }`}>
                  {data.severity}
                </span>
              </div>
            )}
            {data.diagnosedBy && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Diagnosed by:</span>
                <span className="font-medium">{data.diagnosedBy}</span>
              </div>
            )}
            {data.relatedSymptoms && (data.relatedSymptoms as string[]).length > 0 && (
              <div className="mt-3">
                <span className="text-gray-600">Related Symptoms:</span>
                <ul className="mt-1 space-y-1">
                  {(data.relatedSymptoms as string[]).map((symptom, idx) => (
                    <li key={idx} className="text-sm">• {symptom}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'procedure':
      case 'surgery':
        return (
          <div className="space-y-2">
            {data.performedBy && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Performed by:</span>
                <span className="font-medium">{data.performedBy}</span>
              </div>
            )}
            {data.facility && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Facility:</span>
                <span className="font-medium">{data.facility}</span>
              </div>
            )}
            {data.outcome && (
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Outcome:</span>
                <span className={`font-medium capitalize ${
                  data.outcome === 'success' ? 'text-green-600' :
                  data.outcome === 'complication' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {data.outcome}
                </span>
              </div>
            )}
            {data.followUpRequired && (
              <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-blue-700">
                Follow-up required{data.followUpDate ? ` by ${formatDate(data.followUpDate as Date)}` : ''}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`
        relative rounded-lg border-l-4 transition-all duration-200 cursor-pointer
        ${colors.border}
        ${isSelected ? 'ring-2 ring-blue-500 shadow-md' : 'hover:shadow-md'}
      `}
      onClick={handleClick}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className={`${colors.bg} rounded-r-lg p-4`}>
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-xl">
            {typeIcon}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg font-semibold text-gray-900 truncate">
                {event.title}
              </span>
              <StatusBadge status={event.status} />
            </div>
            
            <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <span>{categoryIcon}</span>
                <span className="capitalize">{event.category.replace('-', ' ')}</span>
              </span>
              <span>•</span>
              <span>{formatDate(event.date)}</span>
              <span className="text-gray-400">{formatTime(event.date)}</span>
            </div>
          </div>
          
          {/* Actions */}
          {showActions && (onEdit || onDelete) && (
            <div className="flex items-center gap-1">
              {onEdit && (
                <button
                  onClick={(e) => { e.stopPropagation(); onEdit(); }}
                  className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  title="Edit"
                >
                  ✏️
                </button>
              )}
              {onDelete && (
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(); }}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete"
                >
                  🗑️
                </button>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className={`mt-2 text-gray-700 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {event.description}
        </p>

        {/* Tags */}
        {event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {event.tags.slice(0, isExpanded ? undefined : 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-white/70 rounded-full text-gray-600"
              >
                #{tag}
              </span>
            ))}
            {!isExpanded && event.tags.length > 4 && (
              <span className="text-xs px-2 py-0.5 text-gray-500">
                +{event.tags.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {renderEventDetails()}
            
            {event.notes && (
              <div className="mt-4 p-3 bg-white rounded-lg">
                <span className="text-sm font-medium text-gray-600">Notes:</span>
                <p className="mt-1 text-gray-700">{event.notes}</p>
              </div>
            )}
            
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>Source: {event.source.replace('-', ' ')}</span>
              <span>ID: {event.id}</span>
            </div>
          </div>
        )}

        {/* Expand Indicator */}
        <div className="mt-2 text-center">
          <span className="text-gray-400 text-xs">
            {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelineEventCard;
