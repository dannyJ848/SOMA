import React, { forwardRef, useState, createContext, useContext, HTMLAttributes } from 'react';
import './Accordion.css';

interface AccordionContextValue {
  expandedItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion provider');
  }
  return context;
};

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  allowMultiple?: boolean;
  defaultExpanded?: string[];
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, allowMultiple = false, defaultExpanded = [], className = '', ...props }, ref) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(
      new Set(defaultExpanded)
    );

    const toggleItem = (id: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          if (!allowMultiple) {
            newSet.clear();
          }
          newSet.add(id);
        }
        return newSet;
      });
    };

    return (
      <AccordionContext.Provider value={{ expandedItems, toggleItem, allowMultiple }}>
        <div ref={ref} className={`ui-accordion ${className}`} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  itemId: string;
  disabled?: boolean;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, itemId, disabled = false, className = '', ...props }, ref) => {
    const { expandedItems } = useAccordionContext();
    const isExpanded = expandedItems.has(itemId);

    return (
      <div
        ref={ref}
        className={`ui-accordion__item ${isExpanded ? 'ui-accordion__item--expanded' : ''} ${
          disabled ? 'ui-accordion__item--disabled' : ''
        } ${className}`}
        data-item-id={itemId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  itemId: string;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, itemId, className = '', ...props }, ref) => {
    const { expandedItems, toggleItem } = useAccordionContext();
    const isExpanded = expandedItems.has(itemId);

    return (
      <button
        ref={ref}
        type="button"
        className={`ui-accordion__trigger ${className}`}
        onClick={() => toggleItem(itemId)}
        aria-expanded={isExpanded}
        aria-controls={`accordion-panel-${itemId}`}
        id={`accordion-trigger-${itemId}`}
        {...props}
      >
        <span className="ui-accordion__trigger-content">{children}</span>
        <svg
          className={`ui-accordion__icon ${isExpanded ? 'ui-accordion__icon--expanded' : ''}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  itemId: string;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, itemId, className = '', ...props }, ref) => {
    const { expandedItems } = useAccordionContext();
    const isExpanded = expandedItems.has(itemId);

    return (
      <div
        ref={ref}
        id={`accordion-panel-${itemId}`}
        role="region"
        aria-labelledby={`accordion-trigger-${itemId}`}
        className={`ui-accordion__content ${
          isExpanded ? 'ui-accordion__content--expanded' : ''
        } ${className}`}
        hidden={!isExpanded}
        {...props}
      >
        <div className="ui-accordion__content-inner">{children}</div>
      </div>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export default Accordion;
