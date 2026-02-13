import { useState } from 'react';

interface BodyRegion {
  id: string;
  name: string;
  path: string;
}

interface BodyDiagramProps {
  view: 'anterior' | 'posterior';
  selectedRegion?: string;
  onRegionSelect: (regionId: string) => void;
  symptomLocations?: string[];
}

// Anterior (front) body regions with SVG paths
const anteriorRegions: BodyRegion[] = [
  // Head
  { id: 'body.head.forehead', name: 'Forehead', path: 'M85,25 Q100,15 115,25 L112,40 L88,40 Z' },
  { id: 'body.head.face', name: 'Face', path: 'M88,40 L112,40 L115,65 Q100,75 85,65 Z' },

  // Neck
  { id: 'body.neck', name: 'Neck', path: 'M90,65 L110,65 L108,85 L92,85 Z' },

  // Torso - Chest
  { id: 'body.torso.chest.left', name: 'Left Chest', path: 'M65,85 L100,85 L100,130 L65,125 Z' },
  { id: 'body.torso.chest.right', name: 'Right Chest', path: 'M100,85 L135,85 L135,125 L100,130 Z' },

  // Torso - Abdomen
  { id: 'body.torso.abdomen.epigastric', name: 'Epigastric', path: 'M80,130 L120,130 L118,150 L82,150 Z' },
  { id: 'body.torso.abdomen.umbilical', name: 'Umbilical', path: 'M82,150 L118,150 L116,175 L84,175 Z' },
  { id: 'body.torso.abdomen.left-upper-quadrant', name: 'Left Upper Quadrant', path: 'M65,125 L80,130 L82,150 L65,150 Z' },
  { id: 'body.torso.abdomen.right-upper-quadrant', name: 'Right Upper Quadrant', path: 'M120,130 L135,125 L135,150 L118,150 Z' },
  { id: 'body.torso.abdomen.left-lower-quadrant', name: 'Left Lower Quadrant', path: 'M65,150 L82,150 L84,175 L70,190 L65,175 Z' },
  { id: 'body.torso.abdomen.right-lower-quadrant', name: 'Right Lower Quadrant', path: 'M118,150 L135,150 L135,175 L130,190 L116,175 Z' },
  { id: 'body.torso.abdomen.suprapubic', name: 'Suprapubic', path: 'M84,175 L116,175 L115,195 L85,195 Z' },

  // Arms
  { id: 'body.arm.left.upper', name: 'Left Upper Arm', path: 'M50,85 L65,85 L65,125 L45,135 Z' },
  { id: 'body.arm.left.lower', name: 'Left Forearm', path: 'M45,135 L65,125 L65,150 L40,175 Z' },
  { id: 'body.arm.left.hand', name: 'Left Hand', path: 'M35,175 L45,175 L45,205 L35,210 Z' },
  { id: 'body.arm.right.upper', name: 'Right Upper Arm', path: 'M135,85 L150,85 L155,135 L135,125 Z' },
  { id: 'body.arm.right.lower', name: 'Right Forearm', path: 'M135,125 L155,135 L160,175 L135,150 Z' },
  { id: 'body.arm.right.hand', name: 'Right Hand', path: 'M155,175 L165,175 L165,210 L155,205 Z' },

  // Legs
  { id: 'body.leg.left.thigh', name: 'Left Thigh', path: 'M70,195 L100,195 L95,280 L65,280 Z' },
  { id: 'body.leg.left.knee', name: 'Left Knee', path: 'M65,280 L95,280 L92,305 L68,305 Z' },
  { id: 'body.leg.left.lower', name: 'Left Lower Leg', path: 'M68,305 L92,305 L90,380 L70,380 Z' },
  { id: 'body.leg.left.foot', name: 'Left Foot', path: 'M65,380 L95,380 L95,405 L60,405 Z' },
  { id: 'body.leg.right.thigh', name: 'Right Thigh', path: 'M100,195 L130,195 L135,280 L105,280 Z' },
  { id: 'body.leg.right.knee', name: 'Right Knee', path: 'M105,280 L135,280 L132,305 L108,305 Z' },
  { id: 'body.leg.right.lower', name: 'Right Lower Leg', path: 'M108,305 L132,305 L130,380 L110,380 Z' },
  { id: 'body.leg.right.foot', name: 'Right Foot', path: 'M105,380 L135,380 L140,405 L105,405 Z' },
];

// Posterior (back) body regions with SVG paths
const posteriorRegions: BodyRegion[] = [
  // Head
  { id: 'body.head.back-of-head', name: 'Back of Head', path: 'M85,20 Q100,10 115,20 L112,50 L88,50 Z' },

  // Neck
  { id: 'body.neck.posterior', name: 'Back of Neck', path: 'M90,50 L110,50 L108,80 L92,80 Z' },

  // Thoracic Spine (Mid Back)
  { id: 'body.thoracic-spine', name: 'Thoracic Spine', path: 'M85,80 L115,80 L115,140 L100,145 L85,140 Z' },

  // Lumbar Spine (Lower Back)
  { id: 'body.lumbar-spine', name: 'Lumbar Spine', path: 'M85,140 L115,140 L110,195 L90,195 Z' },

  // Back (legacy regions - kept for compatibility)
  { id: 'body.back.upper-left', name: 'Upper Left Back', path: 'M65,80 L85,80 L85,110 L65,105 Z' },
  { id: 'body.back.upper-right', name: 'Upper Right Back', path: 'M115,80 L135,80 L135,105 L115,110 Z' },
  { id: 'body.back.mid-left', name: 'Mid Left Back', path: 'M65,105 L85,110 L85,140 L65,140 Z' },
  { id: 'body.back.mid-right', name: 'Mid Right Back', path: 'M115,110 L135,105 L135,140 L115,140 Z' },
  { id: 'body.back.lower-left', name: 'Lower Left Back', path: 'M65,140 L90,140 L90,195 L70,195 Z' },
  { id: 'body.back.lower-right', name: 'Lower Right Back', path: 'M90,140 L115,140 L110,195 L90,195 Z' },

  // Buttocks
  { id: 'body.buttock.left', name: 'Left Buttock', path: 'M70,195 L100,200 L100,230 L65,225 Z' },
  { id: 'body.buttock.right', name: 'Right Buttock', path: 'M100,200 L130,195 L135,225 L100,230 Z' },

  // Arms (posterior)
  { id: 'body.arm.left.upper.posterior', name: 'Left Upper Arm (Back)', path: 'M50,80 L65,80 L65,125 L45,135 Z' },
  { id: 'body.arm.left.lower.posterior', name: 'Left Forearm (Back)', path: 'M45,135 L65,125 L65,150 L40,175 Z' },
  { id: 'body.arm.left.hand.posterior', name: 'Left Hand (Back)', path: 'M35,175 L45,175 L45,205 L35,210 Z' },
  { id: 'body.arm.right.upper.posterior', name: 'Right Upper Arm (Back)', path: 'M135,80 L150,80 L155,135 L135,125 Z' },
  { id: 'body.arm.right.lower.posterior', name: 'Right Forearm (Back)', path: 'M135,125 L155,135 L160,175 L135,150 Z' },
  { id: 'body.arm.right.hand.posterior', name: 'Right Hand (Back)', path: 'M155,175 L165,175 L165,210 L155,205 Z' },

  // Legs (posterior)
  { id: 'body.leg.left.thigh.posterior', name: 'Left Thigh (Back)', path: 'M65,225 L100,230 L95,290 L60,290 Z' },
  { id: 'body.leg.left.knee.posterior', name: 'Left Knee (Back)', path: 'M60,290 L95,290 L92,315 L63,315 Z' },
  { id: 'body.leg.left.calf', name: 'Left Calf', path: 'M63,315 L92,315 L88,385 L67,385 Z' },
  { id: 'body.leg.left.heel', name: 'Left Heel', path: 'M65,385 L90,385 L90,405 L60,405 Z' },
  { id: 'body.leg.right.thigh.posterior', name: 'Right Thigh (Back)', path: 'M100,230 L135,225 L140,290 L105,290 Z' },
  { id: 'body.leg.right.knee.posterior', name: 'Right Knee (Back)', path: 'M105,290 L140,290 L137,315 L108,315 Z' },
  { id: 'body.leg.right.calf', name: 'Right Calf', path: 'M108,315 L137,315 L133,385 L112,385 Z' },
  { id: 'body.leg.right.heel', name: 'Right Heel', path: 'M110,385 L135,385 L140,405 L110,405 Z' },
];

export function BodyDiagram({ view, selectedRegion, onRegionSelect, symptomLocations = [] }: BodyDiagramProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const regions = view === 'anterior' ? anteriorRegions : posteriorRegions;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 30,
    });
  };

  const getRegionClassName = (regionId: string): string => {
    const classes = ['body-region'];
    if (regionId === selectedRegion) classes.push('selected');
    if (regionId === hoveredRegion) classes.push('hovered');
    if (symptomLocations.some(loc => loc.startsWith(regionId) || regionId.startsWith(loc))) {
      classes.push('has-symptom');
    }
    return classes.join(' ');
  };

  const getHoveredRegionName = (): string => {
    if (!hoveredRegion) return '';
    const region = regions.find(r => r.id === hoveredRegion);
    return region?.name || '';
  };

  return (
    <div className="body-diagram-container">
      <svg
        viewBox="0 0 200 420"
        className="body-diagram-svg"
        onMouseMove={handleMouseMove}
      >
        {/* Body outline */}
        <g className="body-regions">
          {regions.map((region) => (
            <path
              key={region.id}
              d={region.path}
              className={getRegionClassName(region.id)}
              data-location={region.id}
              onClick={() => onRegionSelect(region.id)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
            />
          ))}
        </g>

        {/* Symptom markers */}
        <g className="symptom-markers">
          {symptomLocations.map((location, index) => {
            const region = regions.find(r => r.id === location || location.startsWith(r.id));
            if (!region) return null;

            // Get center of region path (simplified approximation)
            const pathMatch = region.path.match(/M(\d+),(\d+)/);
            if (!pathMatch) return null;

            const x = parseInt(pathMatch[1], 10) + 15;
            const y = parseInt(pathMatch[2], 10) + 15;

            return (
              <circle
                key={`${location}-${index}`}
                cx={x}
                cy={y}
                r="6"
                className="symptom-marker"
              />
            );
          })}
        </g>
      </svg>

      {/* Tooltip */}
      {hoveredRegion && (
        <div
          className="body-region-tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
          }}
        >
          {getHoveredRegionName()}
        </div>
      )}
    </div>
  );
}

// Export region mapping for use in other components
export const bodyRegionMap = {
  anterior: anteriorRegions,
  posterior: posteriorRegions,
};

export function getRegionName(regionId: string): string {
  const allRegions = [...anteriorRegions, ...posteriorRegions];
  const region = allRegions.find(r => r.id === regionId);
  return region?.name || regionId.split('.').pop()?.replace(/-/g, ' ') || regionId;
}

export function getAllRegions(): BodyRegion[] {
  // Combine and deduplicate regions (some have same ID in both views)
  const seen = new Set<string>();
  const allRegions: BodyRegion[] = [];

  for (const region of [...anteriorRegions, ...posteriorRegions]) {
    if (!seen.has(region.id)) {
      seen.add(region.id);
      allRegions.push(region);
    }
  }

  return allRegions.sort((a, b) => a.name.localeCompare(b.name));
}
