import { useState } from 'react';
import { X, ChevronRight, CalendarDays, CircleCheck } from 'lucide-react';
import { ModalWrapper } from '../common/ModalWrapper';

interface BookConsultationModalProps {
  onClose: () => void;
  onBookSuccess?: () => void;
}

export function BookConsultationModal({ onClose, onBookSuccess }: BookConsultationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  const handleRequestAppointment = () => {
    setSubmitted(true);
    if (onBookSuccess) {
      onBookSuccess();
    }
  };

  return (
    <ModalWrapper onClose={onClose}>
      {submitted ? (
        <div className="success-state">
          <CircleCheck size={42} />
          <h2>Appointment requested</h2>
          <p>Thank you, Alex. Your request for a consultation has been sent to our team.</p>
          <button className="primary-button wide" onClick={onClose}>
            Done
          </button>
        </div>
      ) : (
        <>
          <div className="modal-header">
            <div>
              <p className="eyebrow">STEP {step} OF 2</p>
              <h2>{step === 1 ? 'Choose a service' : 'Choose a date and time'}</h2>
            </div>
            <button className="icon-button" onClick={onClose} aria-label="Close booking">
              <X size={18} />
            </button>
          </div>

          {step === 1 ? (
            <>
              <label>
                What can we help with?
                <select defaultValue="">
                  <option value="" disabled>
                    Select a legal service
                  </option>
                  <option>Workers' Compensation</option>
                  <option>Employment Issues</option>
                  <option>Wage & Hour Disputes</option>
                  <option>Not sure / Need guidance</option>
                </select>
              </label>

              <label>
                Tell us a little about your situation
                <textarea placeholder="Share a brief overview..." />
              </label>

              <button className="primary-button wide" onClick={() => setStep(2)}>
                Continue to scheduling <ChevronRight size={16} />
              </button>
            </>
          ) : (
            <>
              <label>
                Choose a date
                <input className="date-input" type="date" defaultValue="2026-11-14" />
              </label>

              <label>
                Available times
                <select defaultValue="10:30">
                  <option value="10:30">10:30 AM</option>
                  <option value="1:00">1:00 PM</option>
                  <option value="3:30">3:30 PM</option>
                </select>
              </label>

              <div className="booking-summary">
                <CalendarDays size={16} />
                <span>Video consultation with Jordan Williams</span>
              </div>

              <button className="primary-button wide" onClick={handleRequestAppointment}>
                Request appointment <CircleCheck size={16} />
              </button>

              <button className="text-button" onClick={() => setStep(1)}>
                Back to service details
              </button>
            </>
          )}
        </>
      )}
    </ModalWrapper>
  );
}
