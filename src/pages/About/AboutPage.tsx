import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Scale,
  Award,
  GraduationCap
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  // Consultation form local state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    incidentType: 'Workers Compensation',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-[#1F2937]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Light & Bright, Exact Alignment with HomePage) */}
      {/* ======================================================== */}
      <section
        id="about-hero"
        className="relative w-full overflow-hidden bg-[#F8F9FA] scroll-mt-24 border-b border-zinc-200"
      >
        {/* Full Window Width Container (edge-to-edge matching HomePage) */}
        <div className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[660px] lg:min-h-[720px] xl:min-h-[780px] flex items-center overflow-hidden">

          {/* Scales of Justice Image as Light Background matching HomePage aesthetic */}
          <div className="absolute inset-0 z-0">
            <img
              src="/about_hero_banner.jpg"
              alt="Mallery & Stern - Scales of Justice and Law Library"
              className="w-full h-full object-cover object-[75%_center] sm:object-[70%_center] md:object-center select-none pointer-events-none"
            />
            {/* Soft, crisp white gradient overlay on left for clean readable text matching HomePage */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-white/90 sm:via-white/50 sm:to-transparent lg:to-transparent pointer-events-none"></div>
          </div>

          {/* Full-Width Content Layer (Exact Alignment to HomePage px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32) */}
          <div className="w-full relative z-10 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 sm:py-20 lg:py-28 flex items-center">
            <div className="w-full max-w-xl md:max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-5">


              {/* Original About Page Tagline with Reference Image Style (Uppercase + Cursive Underline) */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0E336B] tracking-tight uppercase leading-[1.08] sm:leading-[1.04] font-display drop-shadow-sm">
                We Represent <br />
                People Injured
              </h1>

              {/* Cursive script with Blue Underline matching Reference Image Style */}
              <div className="pt-1">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1E3A8A] font-serif italic tracking-wide lowercase inline-block relative pr-6">
                  on the job
                  <span className="block w-full h-1 bg-[#2D8CFF] mt-1.5 rounded-full shadow-sm"></span>
                </span>
              </div>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-zinc-800 pt-2 leading-relaxed font-medium">
                We represent people injured physically and psychologically from work as well as caused by accidents related to work. Mallery &amp; Stern provides a vigorous and ethical representation of our clients in a manner designed to get you the results you are entitled to.
              </p>

              {/* Prominent Highlight Callout Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/90 border border-zinc-200/90 shadow-sm space-y-2">
                <p className="text-sm sm:text-base font-bold italic text-[#0E336B] flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#2D8CFF] flex-shrink-0" />
                  <span>Injured? Weigh your choice of a lawyer carefully.</span>
                </p>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  We represent injured individuals in Workers' Compensation matters, personal injury, and discrimination based upon race, sex, gender, wage, and hour issues. If you were injured at work from overwork, bending, lifting, carrying, or harassment, we may be able to help you get the medical care you need and the benefits you are entitled to.
                </p>
              </div>

              {/* CTA Action Buttons matching HomePage exactly */}
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
      {/* 1.1 MISSION / HERITAGE BAR (Exact alignment to HomePage) */}
      {/* ======================================================== */}
      <section className="py-16 bg-[#FFFFFF] border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center space-y-6">
          <p className="text-lg sm:text-2xl text-[#1F2937] font-normal leading-relaxed max-w-5xl mx-auto">
            To injured workers across <strong className="font-bold text-[#0E336B]">Los Angeles, San Bernardino, and Riverside Counties</strong>, Mallery &amp; Stern brings top quality assistance to all their clients, representing those who are injured at work or from work-related activities.
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0E336B] tracking-tight">
            Mallery &amp; Stern has been representing California's Injured Workers since 1976.
          </h2>
          <div className="pt-2 border-t border-zinc-200">
            <p className="text-xs sm:text-sm text-zinc-500 italic max-w-4xl mx-auto leading-relaxed">
              ***Making a false or fraudulent workers' compensation claim is a felony subject to up to 5 years in prison or a fine of up to $50,000 or double the value of the fraud, whichever is greater or by both imprisonment and fine.***
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. ATTORNEYS SECTION (Founding Partner & Managing Attorney) */}
      {/* ======================================================== */}
      <section id="attorneys" className="py-20 lg:py-24 bg-[#F9FAFB] border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Experienced Legal Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Meet Our Attorneys
            </h2>
            <p className="text-sm text-zinc-600">
              Dedicated trial advocates fighting tirelessly for the rights of injured California workers.
            </p>
          </div>

          {/* Attorney 1: Lawrence I. Stern (Founding Partner) */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
            {/* Left: Enhanced Attorney Card Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-zinc-200 group">
                <img
                  src="/lawrence_stern.jpg"
                  alt="Lawrence I. Stern - Founding Partner"
                  className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Concise & Attractive Description */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#0E336B] border border-blue-200 text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                  Founding Partner • Certified Specialist
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                  Lawrence Irving Stern
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#2D8CFF] pt-1">
                  California State Bar Certified Workers' Compensation Specialist
                </p>
              </div>

              <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                <p>
                  With <strong>over three decades of proven experience</strong>, Lawrence Irving Stern is a California State Bar Certified Workers' Compensation Specialist with a distinguished track record of obtaining substantial awards and settlements in challenging and catastrophic claims.
                </p>
                <p>
                  His comprehensive practice encompasses every facet of Workers' Compensation law, representing both union and non-union labor, public sector civil servants, and private industry personnel. He additionally specializes in serious personal injury, products liability, and malpractice claims.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <GraduationCap className="w-5 h-5 text-[#2D8CFF] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-zinc-900 block">Education &amp; Science</span>
                    <span className="text-zinc-600">B.A. UC Berkeley • M.S. Pharmacology USC • J.D. Loyola</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Award className="w-5 h-5 text-[#2D8CFF] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-zinc-900 block">Leadership &amp; Judicial</span>
                    <span className="text-zinc-600">Past President CAAA &amp; SCAAA • Judge Pro Tem (WCAB &amp; L.A. Court)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow transition-all"
                >
                  Consult with Lawrence I. Stern
                </button>
              </div>
            </div>
          </div>

          {/* Attorney 2: Jeffrey M. Stern (Managing Attorney) */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
            {/* Left: Enhanced Attorney Card Image */}
            <div className="lg:col-span-5 flex justify-center lg:order-2">
              <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-zinc-200 group">
                <img
                  src="/jeffrey_stern.jpg"
                  alt="Jeffrey M. Stern - Managing Attorney"
                  className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Concise & Attractive Description */}
            <div className="lg:col-span-7 space-y-5 lg:order-1">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#0E336B] border border-blue-200 text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                  Managing Attorney • Workers' Compensation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                  Jeffrey M. Stern
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#2D8CFF] pt-1">
                  Managing Attorney • Past President SCAAA
                </p>
              </div>

              <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                <p>
                  Jeffrey Stern brings comprehensive depth and strategic trial capability to his position as Managing Attorney. He is well-versed in all phases of litigation—from initial client strategy and depositions to aggressive cross-examinations and courtroom trials before the Workers' Compensation Appeals Board.
                </p>
                <p>
                  Mr. Stern has successfully advocated for diverse professionals, including peace officers, firefighters, healthcare workers, municipal personnel, entertainment industry professionals, teachers, and utility workers.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <GraduationCap className="w-5 h-5 text-[#2D8CFF] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-zinc-900 block">Academic Background</span>
                    <span className="text-zinc-600">B.A. Economics Brandeis University • J.D. New York Law School</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <Award className="w-5 h-5 text-[#2D8CFF] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-zinc-900 block">Professional Standing</span>
                    <span className="text-zinc-600">Past President SCAAA • CAAA Faculty Lecturer &amp; Speaker</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow transition-all"
                >
                  Consult with Jeffrey M. Stern
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. MEET OUR TEAM SECTION (Dedicated Staff Profiles) */}
      {/* ======================================================== */}
      <section id="team" className="py-20 bg-white border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Dedicated Client Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Meet Our Team
            </h2>
            <p className="text-sm text-zinc-600">
              Experienced, compassionate legal assistants who ensure your case receives meticulous daily attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1: Theresa Barajas */}
            <div className="bg-[#F9FAFB] border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#2D8CFF] transition-all shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 border-2 border-purple-200 flex items-center justify-center text-2xl flex-shrink-0">
                  👩‍💼
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E336B]">Theresa Barajas</h3>
                  <p className="text-xs font-semibold text-[#2D8CFF]">Legal Assistant • With Firm Since 1998</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Theresa has been an essential pillar of Mallery &amp; Stern since 1998. Starting as the receptionist, her deep commitment to injured workers saw her advance to Legal Assistant, managing applicant files A through J. She is inspired by our firm's strong work ethic, dedication to detail, and desire to help others get fair compensation.
              </p>
              <div className="pt-2 text-xs font-medium text-zinc-500 border-t border-zinc-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D8CFF]" />
                <span>Over 25+ Years of Dedicated Service</span>
              </div>
            </div>

            {/* Team Member 2: Imelda Rojas */}
            <div className="bg-[#F9FAFB] border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#2D8CFF] transition-all shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center text-2xl flex-shrink-0">
                  👩‍💼
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E336B]">Imelda Rojas</h3>
                  <p className="text-xs font-semibold text-[#2D8CFF]">Legal Assistant • With Firm Since 2004</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Imelda joined Mallery &amp; Stern in 2004 right after high school and worked as a file clerk throughout college before taking on her role as full-time Legal Assistant. She is passionate about helping injured workers obtain medical treatment, safely return to work, and achieve maximum compensation settlements.
              </p>
              <div className="pt-2 text-xs font-medium text-zinc-500 border-t border-zinc-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D8CFF]" />
                <span>Over 20+ Years of Workers' Comp Advocacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. OFFICE LOCATIONS SECTION (Los Angeles & Rancho) */}
      {/* ======================================================== */}
      <section id="locations" className="py-20 bg-[#F3F4F6] border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Southern California Offices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Our Office Locations
            </h2>
            <p className="text-sm text-zinc-600">
              Convenient locations serving Los Angeles, Riverside, San Bernardino, and Orange Counties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Los Angeles Office */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-8 space-y-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E336B] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2D8CFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E336B]">Los Angeles Office</h3>
                  <span className="text-xs text-zinc-500 font-medium">Main Southern California Practice</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-zinc-700">
                <p className="font-semibold text-zinc-900">
                  5120 West Goldleaf Circle, #380<br />
                  Los Angeles, CA 90056
                </p>
                <div className="pt-2 border-t border-zinc-100 space-y-1.5 text-xs">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#2D8CFF]" />
                    <a href="tel:3104730777" className="font-bold text-[#0E336B] hover:text-[#2D8CFF]">
                      Direct: 310-473-0777
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-zinc-500">
                    <span>Fax: 310-477-1312</span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.ms-law.com/los-angeles-office"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] transition-colors"
              >
                <span>View Full Los Angeles Office Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Rancho Cucamonga Office */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-8 space-y-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E336B] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2D8CFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0E336B]">Rancho Cucamonga Office</h3>
                  <span className="text-xs text-zinc-500 font-medium">Serving the Inland Empire</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-zinc-700">
                <p className="font-semibold text-zinc-900">
                  8350 Archibald Avenue, CA, #206<br />
                  Rancho Cucamonga, CA 91370
                </p>
                <div className="pt-2 border-t border-zinc-100 space-y-1.5 text-xs">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#2D8CFF]" />
                    <a href="tel:9099489999" className="font-bold text-[#0E336B] hover:text-[#2D8CFF]">
                      Direct: 909-948-9999
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-zinc-500">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    <span>Serving Riverside &amp; San Bernardino Counties</span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.ms-law.com/rancho-office"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] transition-colors"
              >
                <span>View Full Rancho Office Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. CONSULTATION FORM SECTION (No obligation or cost) */}
      {/* ======================================================== */}
      <section id="consultation" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto bg-[#F9FAFB] border border-zinc-200 rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-center space-y-3 mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D8CFF]">
                Free Case Evaluation
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0E336B] tracking-tight uppercase font-display">
                Do You Need A Consultation?
              </h2>
              <p className="text-sm sm:text-base font-semibold text-zinc-600">
                No obligation or cost to you. We work purely on a contingency fee basis.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-blue-200 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-[#2D8CFF] flex items-center justify-center mx-auto border border-blue-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E336B]">Consultation Request Received</h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our attorneys will review your case facts and contact you shortly at <strong>{formData.phone || formData.email}</strong>.
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
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Martinez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:ring-1 focus:ring-[#0E336B] outline-none"
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
                      className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:ring-1 focus:ring-[#0E336B] outline-none"
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
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:ring-1 focus:ring-[#0E336B] outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Type of Claim / Injury
                    </label>
                    <select
                      value={formData.incidentType}
                      onChange={(e) => setFormData({ ...formData, incidentType: e.target.value })}
                      className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:ring-1 focus:ring-[#0E336B] outline-none"
                    >
                      <option value="Workers Compensation">Workers' Compensation</option>
                      <option value="Workplace Injury">Job Injury / Overwork / Repetitive Stress</option>
                      <option value="Wrongful Termination">Wrongful Termination / Retaliation</option>
                      <option value="Personal Injury">Serious Bodily Injury / Accident</option>
                      <option value="Discrimination / Wage">Discrimination / Wage &amp; Hour Issue</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Brief Summary of Your Work Injury or Case
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what happened, when the injury occurred, and any treatment you've received..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg p-3 text-sm focus:border-[#0E336B] focus:ring-1 focus:ring-[#0E336B] outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-600 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#2D8CFF]" />
                    <span>100% Confidential • No Fee Unless We Win</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#0E336B] hover:bg-[#123E80] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Request Free Case Evaluation</span>
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
