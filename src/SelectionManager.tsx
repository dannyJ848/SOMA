import { useState, useCallback, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Structure metadata interface
export interface StructureMetadata {
  id: string;
  name: string;
  latinName?: string;
  layer: string;
  sublayer?: string;
  fmaId?: string; // Foundational Model of Anatomy ID
  description?: string;
}

// Selection state
export interface SelectionState {
  selected: string[];
  hovered: string | null;
}

// Custom hook for selection management
export function useSelectionManager() {
  const [selection, setSelection] = useState<SelectionState>({
    selected: [],
    hovered: null,
  });

  // Select a structure (replace selection)
  const select = useCallback((structureId: string) => {
    setSelection(prev => ({
      ...prev,
      selected: [structureId],
    }));
  }, []);

  // Add to selection (multi-select)
  const addToSelection = useCallback((structureId: string) => {
    setSelection(prev => ({
      ...prev,
      selected: prev.selected.includes(structureId)
        ? prev.selected
        : [...prev.selected, structureId],
    }));
  }, []);

  // Remove from selection
  const removeFromSelection = useCallback((structureId: string) => {
    setSelection(prev => ({
      ...prev,
      selected: prev.selected.filter(id => id !== structureId),
    }));
  }, []);

  // Toggle selection
  const toggleSelection = useCallback((structureId: string, multiSelect: boolean = false) => {
    setSelection(prev => {
      const isSelected = prev.selected.includes(structureId);

      if (multiSelect) {
        // Multi-select mode: toggle this item
        return {
          ...prev,
          selected: isSelected
            ? prev.selected.filter(id => id !== structureId)
            : [...prev.selected, structureId],
        };
      } else {
        // Single-select mode: replace selection or deselect if already selected
        return {
          ...prev,
          selected: isSelected ? [] : [structureId],
        };
      }
    });
  }, []);

  // Clear all selection
  const clearSelection = useCallback(() => {
    setSelection(prev => ({
      ...prev,
      selected: [],
    }));
  }, []);

  // Set hover
  const setHover = useCallback((structureId: string | null) => {
    setSelection(prev => ({
      ...prev,
      hovered: structureId,
    }));
  }, []);

  // Check if structure is selected
  const isSelected = useCallback((structureId: string) => {
    return selection.selected.includes(structureId);
  }, [selection.selected]);

  // Check if structure is hovered
  const isHovered = useCallback((structureId: string) => {
    return selection.hovered === structureId;
  }, [selection.hovered]);

  return {
    selection,
    select,
    addToSelection,
    removeFromSelection,
    toggleSelection,
    clearSelection,
    setHover,
    isSelected,
    isHovered,
  };
}

// Highlight colors - exported for use in components
export const HIGHLIGHT_COLORS = {
  hover: new THREE.Color(0x4080ff),
  selected: new THREE.Color(0x00ff80),
  hoverSelected: new THREE.Color(0x80ffb0),
};

// Outline effect component for selected/hovered objects
interface OutlineEffectProps {
  object: THREE.Object3D | null;
  color: THREE.Color;
  thickness?: number;
  visible?: boolean;
}

export function OutlineEffect({ object, color, thickness = 0.02, visible = true }: OutlineEffectProps) {
  const outlineRef = useRef<THREE.LineSegments>(null);

  useEffect(() => {
    if (!object || !outlineRef.current) return;

    // Create edge geometry from the object
    const geometry = (object as THREE.Mesh).geometry;
    if (!geometry) return;

    const edgesGeometry = new THREE.EdgesGeometry(geometry, 30);
    outlineRef.current.geometry = edgesGeometry;

    // Copy transform from the object
    outlineRef.current.position.copy(object.position);
    outlineRef.current.rotation.copy(object.rotation);
    outlineRef.current.scale.copy(object.scale);

    return () => {
      edgesGeometry.dispose();
    };
  }, [object]);

  if (!object || !visible) return null;

  return (
    <lineSegments ref={outlineRef}>
      <lineBasicMaterial color={color} linewidth={thickness} />
    </lineSegments>
  );
}

// Raycaster component for mouse interaction
interface RaycasterManagerProps {
  onHover: (structureId: string | null, metadata?: StructureMetadata) => void;
  onClick: (structureId: string, metadata: StructureMetadata, multiSelect: boolean) => void;
  meshRegistry: Map<string, { mesh: THREE.Mesh; metadata: StructureMetadata }>;
}

export function RaycasterManager({ onHover, onClick, meshRegistry }: RaycasterManagerProps) {
  const { camera, gl } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());
  const lastHovered = useRef<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleClick = (event: MouseEvent) => {
      raycaster.current.setFromCamera(mouse.current, camera);

      // Get all meshes from registry
      const meshes = Array.from(meshRegistry.values()).map(entry => entry.mesh);
      const intersects = raycaster.current.intersectObjects(meshes, false);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;

        // Find the structure ID for this mesh
        for (const [id, entry] of meshRegistry) {
          if (entry.mesh === hitMesh) {
            onClick(id, entry.metadata, event.shiftKey);
            break;
          }
        }
      }
    };

    gl.domElement.addEventListener('mousemove', handleMouseMove);
    gl.domElement.addEventListener('click', handleClick);

    return () => {
      gl.domElement.removeEventListener('mousemove', handleMouseMove);
      gl.domElement.removeEventListener('click', handleClick);
    };
  }, [camera, gl, meshRegistry, onClick]);

  // Check for hover on each frame
  useFrame(() => {
    raycaster.current.setFromCamera(mouse.current, camera);

    const meshes = Array.from(meshRegistry.values()).map(entry => entry.mesh);
    const intersects = raycaster.current.intersectObjects(meshes, false);

    if (intersects.length > 0) {
      const hitMesh = intersects[0].object as THREE.Mesh;

      // Find the structure ID for this mesh
      for (const [id, entry] of meshRegistry) {
        if (entry.mesh === hitMesh) {
          if (lastHovered.current !== id) {
            lastHovered.current = id;
            onHover(id, entry.metadata);
          }
          return;
        }
      }
    }

    // No intersection
    if (lastHovered.current !== null) {
      lastHovered.current = null;
      onHover(null);
    }
  });

  return null;
}

// Selection info panel component
interface SelectionInfoProps {
  selectedIds: string[];
  hoveredId: string | null;
  metadataRegistry: Map<string, StructureMetadata>;
  onClose?: () => void;
}

export function SelectionInfo({ selectedIds, hoveredId, metadataRegistry, onClose }: SelectionInfoProps) {
  // Get metadata for hovered or first selected item
  const displayId = hoveredId || (selectedIds.length > 0 ? selectedIds[0] : null);
  const metadata = displayId ? metadataRegistry.get(displayId) : null;

  if (!metadata && selectedIds.length === 0) {
    return null;
  }

  return (
    <div className="selection-info-panel">
      {selectedIds.length > 0 && (
        <div className="selection-header">
          <span className="selection-count">
            {selectedIds.length} structure{selectedIds.length > 1 ? 's' : ''} selected
          </span>
          {onClose && (
            <button className="clear-selection-btn" onClick={onClose}>
              Clear
            </button>
          )}
        </div>
      )}

      {metadata && (
        <div className="structure-details">
          <h4 className="structure-name">{metadata.name}</h4>
          {metadata.latinName && (
            <p className="structure-latin">{metadata.latinName}</p>
          )}
          <div className="structure-meta">
            <span className="meta-item">
              <span className="meta-label">Layer:</span>
              <span className="meta-value">{metadata.layer}</span>
            </span>
            {metadata.sublayer && (
              <span className="meta-item">
                <span className="meta-label">Sublayer:</span>
                <span className="meta-value">{metadata.sublayer}</span>
              </span>
            )}
            {metadata.fmaId && (
              <span className="meta-item">
                <span className="meta-label">FMA:</span>
                <span className="meta-value">{metadata.fmaId}</span>
              </span>
            )}
          </div>
          {metadata.description && (
            <p className="structure-description">{metadata.description}</p>
          )}
        </div>
      )}

      {selectedIds.length > 1 && (
        <div className="multi-selection-list">
          <span className="multi-list-label">Selected:</span>
          <ul>
            {selectedIds.map(id => {
              const meta = metadataRegistry.get(id);
              return (
                <li key={id} className={id === hoveredId ? 'hovered' : ''}>
                  {meta?.name || id}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="selection-help">
        <span>Click to select</span>
        <span>Shift+Click to multi-select</span>
      </div>
    </div>
  );
}

// Highlight material manager
export function useHighlightMaterials() {
  const originalMaterials = useRef(new Map<string, THREE.Material | THREE.Material[]>());

  const highlightMesh = useCallback((mesh: THREE.Mesh, color: THREE.Color) => {
    // Store original material if not already stored
    if (!originalMaterials.current.has(mesh.uuid)) {
      originalMaterials.current.set(mesh.uuid, mesh.material);
    }

    // Create highlight material
    const highlightMaterial = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.9,
    });

    mesh.material = highlightMaterial;
  }, []);

  const restoreMesh = useCallback((mesh: THREE.Mesh) => {
    const original = originalMaterials.current.get(mesh.uuid);
    if (original) {
      mesh.material = original;
      originalMaterials.current.delete(mesh.uuid);
    }
  }, []);

  const cleanup = useCallback(() => {
    originalMaterials.current.clear();
  }, []);

  return { highlightMesh, restoreMesh, cleanup };
}
