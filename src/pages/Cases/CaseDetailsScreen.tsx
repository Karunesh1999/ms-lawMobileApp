import { ChevronRight, FileText, CircleCheck, Upload, MessageCircle } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';

interface CaseDetailsScreenProps {
  onBack: () => void;
  onMessage: () => void;
  onUpload?: () => void;
}

export function CaseDetailsScreen({ onBack, onMessage, onUpload }: CaseDetailsScreenProps) {
  return (
    <>
      <button className="back-link" onClick={onBack}>
        <ChevronRight size={16} className="back-icon" /> Back to my cases
      </button>

      <SectionHeader
        title="Case details"
        subtitle="Everything your legal team is tracking for this matter."
      />

      <div className="case-detail-hero">
        <span className="status-pill">
          <span className="status-dot" />
          In progress
        </span>
        <h2>Workers' Compensation</h2>
        <p>Case ID · MS-2026-001</p>
      </div>

      <div className="detail-grid case-stats">
        <div>
          <small>Filed</small>
          <strong>Oct 18, 2026</strong>
        </div>
        <div>
          <small>Assigned attorney</small>
          <strong>Jordan Williams</strong>
        </div>
        <div>
          <small>Next review</small>
          <strong>Nov 14, 2026</strong>
        </div>
        <div>
          <small>Documents</small>
          <strong>8 files</strong>
        </div>
      </div>

      <div className="section-heading">
        <h2>Case summary</h2>
      </div>

      <div className="info-panel">
        <p>
          Your claim is currently under legal review. Our team is evaluating your medical records
          and employment documentation before preparing the next filing.
        </p>
        <div className="info-row">
          <FileText size={16} />
          <span>Workers' compensation claim</span>
          <CircleCheck size={16} />
        </div>
        <div className="info-row">
          <Upload size={16} />
          <span>8 supporting documents shared</span>
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="section-heading">
        <h2>Share an update</h2>
      </div>

      <div className="share-panel">
        <p>Have new information or a question for your lawyer?</p>
        <button className="primary-button wide" onClick={onMessage}>
          <MessageCircle size={16} /> Message Jordan Williams
        </button>
        <button className="secondary-button wide" onClick={onUpload}>
          <Upload size={16} /> Share a document
        </button>
      </div>

      <div className="bottom-space" />
    </>
  );
}

export default CaseDetailsScreen;

