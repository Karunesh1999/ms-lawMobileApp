import { X } from 'lucide-react';
import { ModalWrapper } from '../common/ModalWrapper';
import { ACTIVITIES } from '../../data/portalData';

interface NotificationsModalProps {
  onClose: () => void;
}

export function NotificationsModal({ onClose }: NotificationsModalProps) {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="modal-header">
        <div>
          <p className="eyebrow">UPDATES</p>
          <h2>Notifications</h2>
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Close notifications">
          <X size={18} />
        </button>
      </div>

      {ACTIVITIES.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="notification-row">
            <div className="activity-icon blue">
              <Icon size={17} />
            </div>
            <div>
              <strong>{item.title}</strong>
              <small>{item.time}</small>
            </div>
          </div>
        );
      })}

      <button className="secondary-button wide" onClick={onClose}>
        Mark all as read
      </button>
    </ModalWrapper>
  );
}
