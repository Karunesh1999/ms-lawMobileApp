import { Bell } from 'lucide-react';
import { MSLawLogo } from '../common/MSLawLogo';

interface TopbarProps {
  onOpenNotifications: () => void;
  onOpenProfile: () => void;
}

export function Topbar({ onOpenNotifications, onOpenProfile }: TopbarProps) {
  return (
    <header className="topbar">
      <MSLawLogo compact />
      <div className="top-actions">
        <button
          className="icon-button notification-button"
          aria-label="Open notifications"
          onClick={onOpenNotifications}
        >
          <Bell size={19} strokeWidth={1.8} />
          <span className="notification-dot" />
        </button>
        <button
          className="avatar"
          aria-label="Open profile"
          onClick={onOpenProfile}
        >
          AM
        </button>
      </div>
    </header>
  );
}
