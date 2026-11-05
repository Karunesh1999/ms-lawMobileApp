import { useState } from 'react';
import { X, ChevronRight, CalendarDays, CircleCheck } from 'lucide-react';
import { ModalWrapper } from '../common/ModalWrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { DatePicker } from '../ui/date-picker';

interface BookConsultationModalProps {
  onClose: () => void;
  onBookSuccess?: () => void;
}

export function BookConsultationModal({ onClose, onBookSuccess }: BookConsultationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 10, 14));
  const [time, setTime] = useState<string>('10:30 AM');

  const handleRequestAppointment = () => {
    setSubmitted(true);
    if (onBookSuccess) {
      onBookSuccess();
    }
  };

  const formattedDateSummary = selectedDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <ModalWrapper onClose={onClose}>
      {submitted ? (
        <div className="success-state">
          <CircleCheck size={42} />
          <h2>Appointment requested</h2>
          <p>Thank you, Alex. Your request for a consultation has been sent to our team.</p>
          <button type="button" className="primary-button wide" onClick={onClose}>
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
            <button
              type="button"
              className="icon-button"
              onClick={onClose}
              aria-label="Close booking"
            >
              <X size={18} />
            </button>
          </div>

          {step === 1 ? (
            <>
              <label>
                What can we help with?
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select a legal service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Workers' Compensation">Workers' Compensation</SelectItem>
                    <SelectItem value="Employment Issues">Employment Issues</SelectItem>
                    <SelectItem value="Wage & Hour Disputes">Wage & Hour Disputes</SelectItem>
                    <SelectItem value="Not sure / Need guidance">Not sure / Need guidance</SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <label>
                Tell us a little about your situation
                <textarea placeholder="Share a brief overview..." />
              </label>

              <button
                type="button"
                className="primary-button wide"
                onClick={() => setStep(2)}
              >
                Continue to scheduling <ChevronRight size={16} />
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2.5">
              <label className="text-[11px] font-semibold text-[#132d4d] block !m-0">
                Choose a date
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  className="mt-1"
                />
              </label>

              <label className="text-[11px] font-semibold text-[#132d4d] block !m-0">
                Available times
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="w-full mt-1 h-9 text-[11.5px]">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10:30 AM">10:30 AM</SelectItem>
                    <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                    <SelectItem value="3:30 PM">3:30 PM</SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <div className="flex items-start gap-2.5 bg-[#eef7fc] text-[#075cae] rounded-[10px] px-3 py-2 text-[11px] leading-snug">
                <CalendarDays size={15} className="shrink-0 mt-0.5 text-[#075cae]" />
                <span className="flex-1 text-[#132d4d]">
                  Video consultation with Jordan Williams on{' '}
                  <strong className="text-[#075cae] font-bold whitespace-nowrap">
                    {formattedDateSummary} ({time})
                  </strong>
                </span>
              </div>

              <button
                type="button"
                className="primary-button wide py-2.5 text-[12px] !mt-0.5"
                onClick={handleRequestAppointment}
              >
                Request appointment <CircleCheck size={15} />
              </button>

              <button
                type="button"
                className="text-button text-[11px] py-0.5 text-center w-full !mt-0"
                onClick={() => setStep(1)}
              >
                Back to service details
              </button>
            </div>
          )}
        </>
      )}
    </ModalWrapper>
  );
}

export default BookConsultationModal;
