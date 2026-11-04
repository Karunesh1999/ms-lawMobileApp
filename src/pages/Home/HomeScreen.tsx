import {
  ShieldCheck,
  ChevronRight,
  Ellipsis,
  Plus,
  Upload,
  CalendarDays,
  MessageCircle,
  Video,
} from 'lucide-react';
import { SectionHeading } from '../../components/common/SectionHeading';
import { ActionCard } from '../../components/common/ActionCard';
import { ACTIVITIES } from '../../data/portalData';
import type { TabType } from '../../types/portal';

interface HomeScreenProps {
  onConsult: () => void;
  onUpload: () => void;
  onTab: (tab: TabType) => void;
}

export function HomeScreen({ onConsult, onUpload, onTab }: HomeScreenProps) {
  return (
    <>
      <section className="welcome-block">
        <p className="eyebrow">TUESDAY, NOVEMBER 10, 2026</p>
        <h1>Good morning, Alex</h1>
        <p className="muted">Your legal support and important updates, all in one place.</p>
      </section>

      <section className="hero-card">
        <div className="hero-icon">
          <ShieldCheck size={21} />
        </div>
        <div className="hero-copy">
          <h2>How can we help today?</h2>
          <p>Our team is here when you need us.</p>
        </div>
        <button
          className="round-arrow"
          onClick={onConsult}
          aria-label="Request a consultation"
        >
          <ChevronRight size={18} />
        </button>
      </section>

      <SectionHeading
        title="Your active case"
        action="View all"
        onClick={() => onTab('My Cases')}
      />

      <button className="case-card" onClick={() => onTab('My Cases')}>
        <div className="case-card-top">
          <span className="status-pill">
            <span className="status-dot" />
            In progress
          </span>
          <Ellipsis size={20} />
        </div>
        <h3>Workers' Compensation</h3>
        <p className="case-id">Case ID · MS-2026-001</p>
        <div className="case-footer">
          <div className="attorney">
            <div className="mini-avatar">JW</div>
            <span>
              Jordan Williams
              <br />
              <small>Assigned attorney</small>
            </span>
          </div>
          <ChevronRight size={18} className="chevron" />
        </div>
      </button>

      <SectionHeading title="Quick actions" />
      <div className="quick-grid">
        <ActionCard icon={Plus} label="Request consultation" onClick={onConsult} />
        <ActionCard icon={Upload} label="Upload documents" onClick={onUpload} />
        <ActionCard
          icon={CalendarDays}
          label="Book appointment"
          onClick={() => onTab('Appointments')}
        />
        <ActionCard
          icon={MessageCircle}
          label="Contact attorney"
          onClick={() => onTab('Messages')}
        />
      </div>

      <SectionHeading title="Recent activity" action="See all" />
      <div className="activity-list">
        {ACTIVITIES.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="activity-row">
              <div className={`activity-icon ${item.tone}`}>
                <Icon size={17} />
              </div>
              <div>
                <p>{item.title}</p>
                <small>{item.time}</small>
              </div>
              <ChevronRight size={16} className="activity-chevron" />
            </div>
          );
        })}
      </div>

      <SectionHeading
        title="Upcoming appointment"
        action="View details"
        onClick={() => onTab('Appointments')}
      />
      <div className="appointment-card" onClick={() => onTab('Appointments')}>
        <div className="date-tile">
          <strong>12</strong>
          <span>NOV</span>
        </div>
        <div className="appointment-info">
          <span className="confirmed">Confirmed</span>
          <h3>Consultation with Jordan Williams</h3>
          <p>
            <Video size={14} /> Video meeting · 10:30 AM
          </p>
        </div>
        <ChevronRight size={18} className="chevron" />
      </div>

      <div className="bottom-space" />
    </>
  );
}

export default HomeScreen;
