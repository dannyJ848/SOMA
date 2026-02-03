import React, { forwardRef, useState, createContext, useContext, HTMLAttributes } from 'react';
import './Tabs.css';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultTab?: string;
  value?: string;
  onChange?: (tabId: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      defaultTab,
      value,
      onChange,
      orientation = 'horizontal',
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalTab, setInternalTab] = useState(defaultTab || '');
    const activeTab = value !== undefined ? value : internalTab;

    const setActiveTab = (tabId: string) => {
      if (value === undefined) {
        setInternalTab(tabId);
      }
      onChange?.(tabId);
    };

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        <div
          ref={ref}
          className={`ui-tabs ui-tabs--${orientation} ${className}`}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`ui-tabs__list ${className}`}
        role="tablist"
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabList.displayName = 'TabList';

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  tabId: string;
  disabled?: boolean;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ children, tabId, disabled = false, className = '', ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === tabId;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={`tab-${tabId}`}
        aria-selected={isActive}
        aria-controls={`tabpanel-${tabId}`}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        className={`ui-tabs__tab ${isActive ? 'ui-tabs__tab--active' : ''} ${className}`}
        onClick={() => setActiveTab(tabId)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  tabId: string;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ children, tabId, className = '', ...props }, ref) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === tabId;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${tabId}`}
        aria-labelledby={`tab-${tabId}`}
        tabIndex={0}
        className={`ui-tabs__panel ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = 'TabPanel';

export default Tabs;
