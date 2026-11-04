import { NAV_ITEMS } from '../../data/portalData';
import type { TabType } from '../../types/portal';

interface BottomNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export function BottomNav({ activeTab, onSelectTab }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {NAV_ITEMS.map(({ label, icon: Icon }) => (
        <button
          key={label}
          className={`nav-item ${activeTab === label ? 'active' : ''}`}
          onClick={() => onSelectTab(label)}
        >
          <Icon size={20} strokeWidth={activeTab === label ? 2.2 : 1.8} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

