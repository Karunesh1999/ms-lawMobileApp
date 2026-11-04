import React, { useState } from 'react';
import {
  ExternalLink,
  Download,
  CheckCircle2,
  Building2,
  BookOpen,
  ArrowRight,
  Car
} from 'lucide-react';
import { MedicalMileageModal } from '../../components/modals/MedicalMileageModal';
import { EXTERNAL_RESOURCES, MILEAGE_FORM_DOCX_URL } from '../../data/resourcesData';

interface ResourcesPageProps {
  onOpenQuote: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenQuote }) => {
  const [isMileageModalOpen, setIsMileageModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Medical Mileage Reimbursement',
    details: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        topic: 'Medical Mileage Reimbursement',
        details: ''
      });
    }, 4000);
  };

  return (
    <div className="bg-[#F8FAFC] text-[#1F2937] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0E336B] text-white py-16 lg:py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" /> Official Legal &amp; Client Resources
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 font-display">
            Injured Worker Resources &amp; Directories
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Access authorized California workers' compensation agencies, federal labor bureaus, legal databases, and download or submit your medical mileage travel reimbursement documents.
          </p>
        </div>
      </section>

      {/* SECTION 1: Medical Mileage Reimbursement Form Callout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E336B] bg-blue-50 px-3 py-1 rounded-full mb-3">
                <Car className="w-4 h-4 text-[#0E336B]" /> Travel Expense Reimbursement
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0E336B] tracking-tight mb-3 font-display">
                Medical Mileage Reimbursement Form
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4">
                If you have to travel to get treatment for your work injury, you are legally entitled to re-payment of your travel costs under California Workers' Compensation law ($0.56 per mile). Mileage for reasonable travel to the pharmacy, parking, bridge tolls, and public transportation are also included.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsMileageModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#0E336B] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md transition-colors"
                >
                  <Download className="w-4 h-4" /> Open Mileage Form &amp; Uploader
                </button>
                <a
                  href={MILEAGE_FORM_DOCX_URL}
                  download
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
                >
                  Download Blank DOCX Form
                </a>
              </div>
            </div>

            <div className="w-full lg:w-80 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0E336B] text-white flex items-center justify-center shadow">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Need help filing your mileage?</h3>
              <p className="text-xs text-slate-600 mb-4">
                Our legal team assists clients in submitting receipts and tracking 60-day insurer payment deadlines.
              </p>
              <button
                onClick={onOpenQuote}
                className="w-full bg-[#0E336B] hover:bg-[#1D4ED8] text-white text-xs font-bold py-2.5 rounded-lg shadow-sm transition-colors"
              >
                Ask A Legal Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Official California & Federal Legal Directories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#0E336B] bg-blue-50 px-3 py-1 rounded-full">
            State &amp; National Directory
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-4 font-display">
            Official Workers' Compensation &amp; Legal Portals
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Direct access to official governmental agencies, state appeals boards, statutory research libraries, and disability benefit programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXTERNAL_RESOURCES.map((resource, idx) => (
            <div
              key={resource.title}
              className="bg-white rounded-xl border border-zinc-200 hover:border-[#0E336B] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded">
                    {resource.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0E336B] mb-2 leading-snug">
                  {resource.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {resource.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-slate-500">
                  {resource.displayUrl}
                </span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E336B] hover:text-[#1D4ED8] transition-colors"
                >
                  Visit Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Questions & Assistance Consultation Form */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="w-10 h-10 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-black mb-3 font-display">
            Have Questions Regarding Your Rights or Benefits?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Insurance companies frequently delay or undercalculate travel reimbursements and medical payments. Speak directly with an experienced attorney today.
          </p>

          {formSubmitted ? (
            <div className="bg-green-900/60 border border-green-500 text-green-200 p-6 rounded-xl max-w-lg mx-auto flex items-center gap-3 text-left">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white text-sm">Inquiry Received</h4>
                <p className="text-xs text-green-300">
                  A representative will review your message and contact you within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(310) 000-0000"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">How can we assist you?</label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Briefly describe your case or questions about reimbursement..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Medical Mileage Dialog Modal */}
      <MedicalMileageModal
        isOpen={isMileageModalOpen}
        onClose={() => setIsMileageModalOpen(false)}
      />
    </div>
  );
};
export default ResourcesPage;

