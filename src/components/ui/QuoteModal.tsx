import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [county, setCounty] = useState('Los Angeles County');
  const [claimType, setClaimType] = useState('Workplace Injury / Accident');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white text-zinc-900 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-zinc-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#0E336B] text-white">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">
              Mallery &amp; Stern • Work Injury Attorneys
            </span>
            <h3 className="text-xl font-extrabold uppercase tracking-tight text-white font-display">
              Free Case Consultation
            </h3>
            <p className="text-xs text-blue-100">
              100% Confidential • No Fee Unless We Recover Compensation For You
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-blue-200 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-blue-50 text-[#2D8CFF] rounded-full flex items-center justify-center mx-auto border border-blue-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-[#0E336B]">Consultation Request Received</h4>
            <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-zinc-900">{name || 'valued client'}</strong>. Our attorneys will review your case details and reach out to you at <strong className="text-zinc-900">{phone || email}</strong> promptly.
            </p>
            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-600 max-w-sm mx-auto text-left space-y-1">
              <p><strong>Direct Legal Assistance:</strong> 310-473-0777</p>
              <p><strong>Rancho Cucamonga Office:</strong> 909-948-9999</p>
              <p><strong>Hablamos Español:</strong> Consultas telefónicas gratuitas</p>
            </div>
            <button
              onClick={handleReset}
              className="bg-[#0E336B] text-white font-bold uppercase text-xs tracking-wider px-8 py-3 rounded hover:bg-[#123E80]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your legal name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded p-2.5 text-sm focus:border-[#0E336B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(310) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded p-2.5 text-sm focus:border-[#0E336B] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded p-2.5 text-sm focus:border-[#0E336B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                  County in Southern California *
                </label>
                <select
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-300 rounded p-2.5 text-sm focus:border-[#0E336B] focus:outline-none"
                >
                  <option value="Los Angeles County">Los Angeles County</option>
                  <option value="San Bernardino County">San Bernardino County</option>
                  <option value="Riverside County">Riverside County</option>
                  <option value="Orange County / Other">Orange County / Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Type of Injury or Claim *
              </label>
              <select
                value={claimType}
                onChange={(e) => setClaimType(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-300 rounded p-2.5 text-sm focus:border-[#0E336B] focus:outline-none"
              >
                <option value="Workplace Injury / Accident">Workplace Injury / Accident</option>
                <option value="Repetitive Stress / Occupational Strain">Repetitive Stress / Occupational Strain</option>
                <option value="Wrongful Termination / Employer Retaliation">Wrongful Termination / Employer Retaliation</option>
                <option value="Wage & Hour / Unpaid Overtime Dispute">Wage &amp; Hour / Unpaid Overtime Dispute</option>
                <option value="Denied Workers' Compensation Claim">Denied Workers' Compensation Claim</option>
                <option value="Serious Bodily Injury / Disability">Serious Bodily Injury / Disability</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Brief Details of Your Work Injury or Claim
              </label>
              <textarea
                rows={3}
                placeholder="Describe your job duties, date of injury, employer, or medical treatment received..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-300 rounded p-3 text-sm focus:border-[#0E336B] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-[#2D8CFF]" />
                <span>No fee unless we win • Hablamos Español</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-all active:scale-95 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Request Free Consultation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
