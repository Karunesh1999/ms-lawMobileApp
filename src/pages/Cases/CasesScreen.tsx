import { useState } from 'react';
import { ChevronRight, CircleCheck, MessageCircle, FileText } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import type { TabType } from '../../types/portal';

interface CasesScreenProps {
  onTab: (tab: TabType) => void;
  onOpenCase: () => void;
}

export function CasesScreen({ onTab, onOpenCase }: CasesScreenProps) {
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'Active' | 'Pending' | 'Completed'>('Active');

  const timelineSteps = [
    'Inquiry received',
    'Initial consultation',
    'Documents submitted',
    'Legal review',
  ];

  return (
    <>
      <SectionHeader title="My cases" subtitle="Keep track of your legal matters." />

      <div className="segmented">
        <button
          className={activeSegment === 'Active' ? 'selected' : ''}
          onClick={() => setActiveSegment('Active')}
        >
          Active <span>1</span>
        </button>
        <button
          className={activeSegment === 'Pending' ? 'selected' : ''}
          onClick={() => setActiveSegment('Pending')}
        >
          Pending <span>0</span>
        </button>
        <button
          className={activeSegment === 'Completed' ? 'selected' : ''}
          onClick={() => setActiveSegment('Completed')}
        >
          Completed <span>0</span>
        </button>
      </div>

      <button className="case-card full" onClick={onOpenCase}>
        <div className="case-card-top">
          <span className="status-pill">
            <span className="status-dot" />
            In progress
          </span>
          <span className="case-type">Workers' Compensation</span>
        </div>
        <h3>Workers' Compensation</h3>
        <p className="case-id">Case ID · MS-2026-001</p>

        <div className="progress-line">
          <span style={{ width: '62%' }} />
        </div>
        <div className="progress-labels">
          <span>Legal review</span>
          <span>62% complete</span>
        </div>

        <div className="case-footer">
          <div className="attorney">
            <div className="mini-avatar">JW</div>
            <span>
              Jordan Williams
              <br />
              <small>Last updated Nov 9</small>
            </span>
          </div>
          <span className="text-link">
            View details <ChevronRight size={15} />
          </span>
        </div>
      </button>

      {isOverviewExpanded && (
        <div className="case-detail-card">
          <div className="detail-header">
            <div>
              <p className="eyebrow">CASE OVERVIEW</p>
              <h2>Workers' Compensation</h2>
            </div>
          </div>
          <p className="detail-copy">
            Your claim is currently with our legal team for review. We'll notify you when there is
            an update or when we need additional documents.
          </p>
          <div className="detail-actions">
            <button className="secondary-button" onClick={() => onTab('Messages')}>
              <MessageCircle size={16} /> Message Jordan
            </button>
            <button className="secondary-button" onClick={() => setIsOverviewExpanded(false)}>
              <FileText size={16} /> View documents
            </button>
          </div>
        </div>
      )}

      <div className="section-heading">
        <h2>Case timeline</h2>
      </div>

      <div className="timeline">
        {timelineSteps.map((step, idx) => (
          <div
            key={step}
            className={`timeline-item ${idx === 3 ? 'current' : 'done'}`}
          >
            <span className="timeline-dot">
              {idx < 3 && <CircleCheck size={14} />}
            </span>
            <div>
              <strong>{step}</strong>
              <small>{idx < 3 ? 'Completed' : 'In progress · Updated today'}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-space" />
    </>
  );
}

export default CasesScreen;
