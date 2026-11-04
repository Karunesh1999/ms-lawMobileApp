import React, { useState } from 'react';
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Scale
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceArea: 'Workers Compensation',
    incidentDate: '',
    details: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-[#1F2937]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Light, Bright & Aligned with HomePage/About) */}
      {/* ======================================================== */}
      <section
        id="services-hero"
        className="relative w-full overflow-hidden bg-[#F8F9FA] scroll-mt-24 border-b border-zinc-200"
      >
        <div className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[660px] lg:min-h-[720px] xl:min-h-[760px] flex items-center overflow-hidden">
          
          {/* Panoramic Bright Legal Services Banner */}
          <div className="absolute inset-0 z-0">
            <img
              src="/services_hero_banner.jpg"
              alt="Mallery & Stern - Legal Practice Areas"
              className="w-full h-full object-cover object-[75%_center] sm:object-[70%_center] md:object-center select-none pointer-events-none"
            />
            {/* Soft white gradient overlay for high text contrast matching HomePage */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:from-white/90 sm:via-white/60 sm:to-transparent lg:to-transparent pointer-events-none"></div>
          </div>

          {/* Content Layer (Aligned gutters px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32) */}
          <div className="w-full relative z-10 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 sm:py-20 lg:py-28 flex items-center">
            <div className="w-full max-w-xl md:max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-5">
              
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2D8CFF] block">
                Comprehensive Legal Practice Areas • Since 1976
              </span>

              {/* Original Services Tagline with Reference Image Style (Uppercase + Cursive Underline) */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0E336B] tracking-tight uppercase leading-[1.08] sm:leading-[1.04] font-display drop-shadow-sm">
                Aggressive Legal <br />
                Representation
              </h1>

              {/* Cursive script with Blue Underline matching Reference Image Style */}
              <div className="pt-1">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1E3A8A] font-serif italic tracking-wide lowercase inline-block relative pr-6">
                  for injured workers
                  <span className="block w-full h-1 bg-[#2D8CFF] mt-1.5 rounded-full shadow-sm"></span>
                </span>
              </div>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-zinc-800 pt-2 leading-relaxed font-medium">
                At Mallery &amp; Stern, we provide vigorous, ethical, and experienced trial representation across Southern California. Whether you were hurt on the job, faced workplace retaliation, or suffered severe physical trauma, our trial attorneys protect your legal rights and maximize your recovery.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-white/90 border border-zinc-200/90 shadow-sm space-y-2">
                <p className="text-sm sm:text-base font-bold italic text-[#0E336B] flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#2D8CFF] flex-shrink-0" />
                  <span>No Recovery, No Attorney Fee • Contingency Guarantee</span>
                </p>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  You pay zero upfront fees or out-of-pocket costs. We only get paid when we recover benefits or a financial settlement for your claim.
                </p>
              </div>

              {/* Action Buttons matching HomePage */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-md shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Request Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:3104730777"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/95 hover:bg-white border-2 border-[#0E336B] text-[#0E336B] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-md shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 text-[#2D8CFF]" />
                  <span>Call: 310-473-0777</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SERVICES QUICK NAVIGATION JUMP BAR */}
      {/* ======================================================== */}
      <section className="bg-white border-b border-zinc-200 sticky top-[72px] z-30 shadow-sm">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 py-3 overflow-x-auto text-xs font-bold uppercase tracking-wider text-zinc-600 scrollbar-none">
            {[
              { label: "Workers' Comp", id: 'workers-compensation' },
              { label: 'Employment Issues', id: 'employment-issues' },
              { label: 'Wage & Hour', id: 'wage-hour' },
              { label: 'Professional Liability', id: 'professional-liability' },
              { label: 'Serious Bodily Injury', id: 'bodily-injury' }
            ].map((tab, idx) => (
              <a
                key={idx}
                href={`#${tab.id}`}
                className="px-3.5 py-2 rounded-md hover:bg-blue-50 hover:text-[#0E336B] transition-colors whitespace-nowrap"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SERVICE 1: WORKERS' COMPENSATION */}
      {/* ======================================================== */}
      <section id="workers-compensation" className="py-20 lg:py-24 bg-white border-b border-zinc-200 scroll-mt-36">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D8CFF] block">
                  Core Specialization
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                  Workers' Compensation
                </h2>
                <div className="w-16 h-1 bg-[#2D8CFF] rounded-full"></div>
              </div>

              <p className="text-lg font-bold text-[#0E336B] italic">
                "Securing full medical care, wage replacements, and permanent disability settlements for California employees."
              </p>

              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                <p>
                  California Workers’ Compensation law is complex and tilted in favor of insurance adjusters who routinely delay or deny legitimate medical care. Mallery &amp; Stern levels the playing field with over <strong>48 years of dedicated trial advocacy</strong>.
                </p>
                <p>
                  We represent employees across all vocations—from construction workers, healthcare professionals, and utility staff to public safety officers. Whether your injury was a sudden catastrophic accident or cumulative trauma resulting from repetitive lifting, bending, or motion over time, we ensure you receive 100% of your statutory benefits.
                </p>
              </div>

              {/* Key Coverage Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-zinc-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>100% Covered Medical Care &amp; Surgeries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Temporary Disability (TD) Wage Replacement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Permanent Disability (PD) Financial Awards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Job Retraining Vouchers (SJDB)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
                >
                  Consult on a Workers' Comp Claim
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 group">
                <img
                  src="/workers_comp_service.jpg"
                  alt="California Workers' Compensation Representation - Mallery & Stern"
                  className="w-full h-auto aspect-square object-cover block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E336B]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SERVICE 2: EMPLOYMENT ISSUES */}
      {/* ======================================================== */}
      <section id="employment-issues" className="py-20 lg:py-24 bg-[#F9FAFB] border-b border-zinc-200 scroll-mt-36">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Visual Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 group">
                <img
                  src="/employment_issues_service.jpg"
                  alt="California Employment Law & Workplace Protection - Mallery & Stern"
                  className="w-full h-auto aspect-square object-cover block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E336B]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D8CFF] block">
                  Employee Rights &amp; Workplace Justice
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                  Employment Issues
                </h2>
                <div className="w-16 h-1 bg-[#2D8CFF] rounded-full"></div>
              </div>

              <p className="text-lg font-bold text-[#0E336B] italic">
                "Defending workers against unlawful termination, discrimination, and employer retaliation."
              </p>

              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                <p>
                  Workplace disputes can be financially and emotionally devastating. Many injured workers find themselves facing hostile management, retaliatory discipline, or sudden termination as soon as they report medical limitations.
                </p>
                <p>
                  Mallery &amp; Stern actively prosecutes claims involving <strong>Wrongful Termination, Discrimination (based upon race, gender, age, disability, or medical condition), and Workplace Harassment</strong>. We hold negligent employers accountable under California state labor laws and federal civil rights protections.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
                >
                  Discuss an Employment Dispute
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SERVICE 3: WAGE & HOUR DISPUTES */}
      {/* ======================================================== */}
      <section id="wage-hour" className="py-20 lg:py-24 bg-white border-b border-zinc-200 scroll-mt-36">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D8CFF] block">
                  Fair Pay &amp; Labor Standards
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                  Wage &amp; Hour Disputes
                </h2>
                <div className="w-16 h-1 bg-[#2D8CFF] rounded-full"></div>
              </div>

              <p className="text-lg font-bold text-[#0E336B] italic">
                "Recovering every dollar of unpaid overtime, stolen wages, and statutory rest break penalties."
              </p>

              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                <p>
                  California has some of the strictest wage and hour laws in the nation, yet thousands of hard-working employees are shortchanged every paycheck. Employers often cut corners through off-the-clock work, illegal tip pooling, and misclassifying staff as exempt salary managers or 1099 independent contractors.
                </p>
                <p>
                  Our legal team investigates payroll logs, timecard discrepancies, and employer practices to recover maximum back pay, interest, and statutory damages for California laborers and hourly staff.
                </p>
              </div>

              {/* Violation Types Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-zinc-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Unpaid Overtime &amp; Double Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Denied 30-Min Meal &amp; 10-Min Rest Breaks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>1099 Independent Contractor Misclassification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Off-The-Clock Preparation Work</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
                >
                  Evaluate Your Wage Claim
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 group">
                <img
                  src="/wage_hour_service.jpg"
                  alt="California Wage and Hour Dispute Advocacy - Mallery & Stern"
                  className="w-full h-auto aspect-square object-cover block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E336B]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SERVICE 4: PROFESSIONAL LIABILITY & MALPRACTICE */}
      {/* ======================================================== */}
      <section id="professional-liability" className="py-20 lg:py-24 bg-[#F9FAFB] border-b border-zinc-200 scroll-mt-36">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Visual Image */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 group">
                <img
                  src="/professional_malpractice_service.jpg"
                  alt="Professional Liability and Medical Malpractice Litigation - Mallery & Stern"
                  className="w-full h-auto aspect-square object-cover block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E336B]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D8CFF] block">
                  Accountability &amp; High-Stakes Litigation
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                  Professional Liability &amp; Malpractice
                </h2>
                <div className="w-16 h-1 bg-[#2D8CFF] rounded-full"></div>
              </div>

              <p className="text-lg font-bold text-[#0E336B] italic">
                "Holding licensed professionals and corporate entities accountable when negligence causes severe harm."
              </p>

              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                <p>
                  With founding partner Lawrence Irving Stern's specialized background in molecular pharmacology and medical sciences, Mallery &amp; Stern offers unmatched insight into complex medical-legal cases.
                </p>
                <p>
                  We investigate cases where doctors, healthcare providers, or legal professionals violate their fiduciary duties or commit malpractice, resulting in catastrophic industrial or personal damages.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
                >
                  Consult on a Malpractice Claim
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. SERVICE 5: SERIOUS BODILY INJURY CLAIMS */}
      {/* ======================================================== */}
      <section id="bodily-injury" className="py-20 lg:py-24 bg-white border-b border-zinc-200 scroll-mt-36">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D8CFF] block">
                  Catastrophic Trauma &amp; Third-Party Negligence
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                  Serious Bodily Injury Claims
                </h2>
                <div className="w-16 h-1 bg-[#2D8CFF] rounded-full"></div>
              </div>

              <p className="text-lg font-bold text-[#0E336B] italic">
                "Securing life-changing settlements for catastrophic, disabling, and third-party industrial accidents."
              </p>

              <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                <p>
                  When negligence causes irreversible harm, injured victims face staggering medical expenses, loss of earning capacity, and immense pain and suffering. Mallery &amp; Stern prepares every catastrophic injury case for trial, ensuring the full scope of future life-care costs is demanded from liable parties.
                </p>
                <p>
                  If an on-the-job injury was caused by a negligent third party—such as a defective machine manufacturer, outside contractor, or commercial driver—we pursue both your Workers' Compensation benefits AND a third-party civil liability claim for maximum compensation.
                </p>
              </div>

              {/* Coverage List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-zinc-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Traumatic Brain Injuries (TBI)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Spinal Cord Trauma &amp; Paralysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Severe Burns, Amputations &amp; Crushes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Third-Party Defective Machinery Claims</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
                >
                  Free Serious Injury Evaluation
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 group">
                <img
                  src="/bodily_injury_service.jpg"
                  alt="Serious Bodily Injury & Catastrophic Accidents - Mallery & Stern"
                  className="w-full h-auto aspect-square object-cover block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E336B]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. DIRECT CONTACT & CASE EVALUATION FORM */}
      {/* ======================================================== */}
      <section id="services-contact" className="py-20 lg:py-24 bg-[#F3F4F6] border-t border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center space-y-3 mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D8CFF]">
                Free Case Evaluation • No Obligation
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                Tell Us About Your Legal Situation
              </h2>
              <p className="text-sm sm:text-base font-semibold text-zinc-600">
                Speak directly with an experienced California trial attorney. No fees unless we win your case.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-blue-50/50 rounded-2xl border border-blue-200 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-[#2D8CFF] flex items-center justify-center mx-auto border border-blue-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E336B]">Inquiry Received Successfully</h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our attorneys will review your service inquiry and contact you directly at <strong>{formData.phone || formData.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#2D8CFF] hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(310) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="michael@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Service Area of Interest
                    </label>
                    <select
                      value={formData.serviceArea}
                      onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                      className="w-full bg-[#F9FAFB] border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:bg-white focus:outline-none"
                    >
                      <option value="Workers Compensation">Workers' Compensation</option>
                      <option value="Employment Issues">Employment Issues &amp; Retaliation</option>
                      <option value="Wage &amp; Hour Disputes">Wage &amp; Hour Disputes</option>
                      <option value="Professional Liability">Professional Liability &amp; Malpractice</option>
                      <option value="Serious Bodily Injury">Serious Bodily Injury Claims</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Brief Summary of Your Legal Situation
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your job, date of accident or violation, injuries sustained, or dispute details..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#F9FAFB] border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:bg-white focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#2D8CFF]" />
                    <span>100% Confidential • Se Habla Español</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#0E336B] hover:bg-[#123E80] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Submit Free Case Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
