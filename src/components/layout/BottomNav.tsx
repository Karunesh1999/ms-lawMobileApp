import { NAV_ITEMS } from '../../data/portalData';
import type { TabType } from '../../types/portal';

interface BottomNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export function BottomNav({ activeTab, onSelectTab }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {NAV_ITEMS.map(({ label, icon: Icon }) => {
        const isCenter = label === 'Appointments';
        const isActive = activeTab === label;

        if (isCenter) {
          return (
            <button
              key={label}
              type="button"
              className={`nav-item nav-item-center ${isActive ? 'active' : ''}`}
              onClick={() => onSelectTab(label)}
            >
              <div className={`center-tab-bubble ${isActive ? 'active' : ''}`}>
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <span>{label}</span>
            </button>
          );
        }

        return (
          <button
            key={label}
            type="button"
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onSelectTab(label)}
          >
            <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
            <span>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;
