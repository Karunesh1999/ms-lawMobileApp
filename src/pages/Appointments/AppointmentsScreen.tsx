import { useState } from 'react';
import { Plus, Video, Phone, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';

interface AppointmentsScreenProps {
  onConsult: () => void;
  booked?: boolean;
}

export function AppointmentsScreen({ onConsult }: AppointmentsScreenProps) {
  const [activeSegment, setActiveSegment] = useState<'Upcoming' | 'Past' | 'Cancelled'>('Upcoming');

  return (
    <>
      <SectionHeader title="Appointments" subtitle="Stay connected with your legal team." />

      <div className="segmented">
        <button
          className={activeSegment === 'Upcoming' ? 'selected' : ''}
          onClick={() => setActiveSegment('Upcoming')}
        >
          Upcoming <span>1</span>
        </button>
        <button
          className={activeSegment === 'Past' ? 'selected' : ''}
          onClick={() => setActiveSegment('Past')}
        >
          Past <span>0</span>
        </button>
        <button
          className={activeSegment === 'Cancelled' ? 'selected' : ''}
          onClick={() => setActiveSegment('Cancelled')}
        >
          Cancelled <span>0</span>
        </button>
      </div>

      <div className="appointment-card large">
        <div className="date-tile">
          <strong>12</strong>
          <span>NOV</span>
        </div>
        <div className="appointment-info">
          <span className="confirmed">Confirmed</span>
          <h3>Consultation with Jordan Williams</h3>
          <p>
            <Video size={14} /> Wednesday · 10:30 AM
          </p>
          <p>
            <Phone size={14} /> Video meeting
          </p>
        </div>
      </div>

      <button className="primary-button wide" onClick={onConsult}>
        <Plus size={17} /> Book an appointment
      </button>

      <h2 className="subheading">Need to speak sooner?</h2>
      <div className="support-card">
        <div className="support-icon">
          <Phone size={18} />
        </div>
        <div>
          <h3>Contact our team</h3>
          <p>We're available Mon–Fri, 8am–5pm.</p>
        </div>
        <ChevronRight size={18} className="chevron" />
      </div>

      <div className="bottom-space" />
    </>
  );
}

export default AppointmentsScreen;

