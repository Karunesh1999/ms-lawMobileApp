import { X, Upload } from 'lucide-react';
import { ModalWrapper } from '../common/ModalWrapper';

interface UploadDocumentModalProps {
  onClose: () => void;
}

export function UploadDocumentModal({ onClose }: UploadDocumentModalProps) {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="modal-header">
        <div>
          <p className="eyebrow">YOUR CASE</p>
          <h2>Upload a document</h2>
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Close upload modal">
          <X size={18} />
        </button>
      </div>

      <div className="dropzone">
        <Upload size={24} />
        <strong>Choose a file to upload</strong>
        <span>PDF, JPG or PNG · Max 10 MB</span>
        <button className="secondary-button" onClick={onClose}>
          Browse files
        </button>
      </div>

      <p className="modal-note">
        Your documents are encrypted and only shared with your authorized legal team.
      </p>
    </ModalWrapper>
  );
}
