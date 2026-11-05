import { AlertTriangle, LogOut, X } from 'lucide-react';
import { ModalWrapper } from '../common/ModalWrapper';

interface LogoutConfirmModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutConfirmModal({ onClose, onConfirm }: LogoutConfirmModalProps) {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="modal-header">
        <div>
          <p className="eyebrow">CONFIRMATION</p>
          <h2>Log out</h2>
        </div>
        <button
          type="button"
          className="icon-button"
          onClick={onClose}
          aria-label="Close confirmation modal"
        >
          <X size={18} />
        </button>
      </div>

      <div className="logout-warning-box">
        <div className="logout-warning-icon">
          <AlertTriangle size={20} />
        </div>
        <div>
          <strong>Are you sure you want to log out?</strong>
          <p>You will need to sign in again</p>
        </div>
      </div>

      <div className="logout-actions">
        <button type="button" className="secondary-button" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="danger-button" onClick={onConfirm}>
          <LogOut size={16} />
          Log out
        </button>
      </div>
    </ModalWrapper>
  );
}

export default LogoutConfirmModal;

