import React, { useState } from 'react';
import {
  Phone,
  Scale,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  FileText,
  Star,
  Briefcase,
  ChevronDown
} from 'lucide-react';

interface HomePageProps {
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => prev === index ? null : index);
  };
  return (
    <div className="w-full bg-[#FFFFFF] text-[#1F2937]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Exact User-Uploaded Image + Full Window Width) */}
      {/* - Image: public/hero_banner.jpg (Marble background +      */}
      {/*   Deep Navy wave + Sleek Black Lady Justice)             */}
      {/* - Left Side: Original Tagline, Heading, Cursive & CTAs   */}
      {/* - Full Window Width (w-full edge-to-edge)                */}
      {/* ======================================================== */}
      <section
        id="hero"
        className="relative w-full overflow-hidden bg-[#F8F9FA] scroll-mt-24 border-b border-zinc-200"
      >
        {/* Full Window Width Container (edge-to-edge) */}
        <div className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[660px] lg:min-h-[720px] xl:min-h-[780px] flex items-center overflow-hidden">

          {/* Exact User-Uploaded Image as Full-Width Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero_banner.jpg"
              alt="Mallery & Stern - Work Injury Attorneys Hero"
              className="w-full h-full object-cover object-[78%_center] sm:object-[70%_center] md:object-center select-none pointer-events-none"
            />
            {/* Subtle soft gradient on left for ultra-clean text legibility on small screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:from-white/90 sm:via-white/60 sm:to-transparent lg:to-transparent pointer-events-none"></div>
          </div>

          {/* Full-Width Content Layer (Tagline, Heading, Cursive & CTAs) */}
          <div className="w-full relative z-10 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-12 sm:py-20 lg:py-28 flex items-center">
            <div className="w-full max-w-xl md:max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-5">

              {/* Exact Tagline Heading from Reference Image */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0E336B] tracking-tight uppercase leading-[1.08] sm:leading-[1.04] font-display drop-shadow-sm">
                We're The <br />
                Workers' <br />
                Compensation <br />
                Specialists That
              </h1>

              {/* Cursive script "can help you" with Subtle Navy Underline */}
              <div className="pt-1">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1E3A8A] font-serif italic tracking-wide lowercase inline-block relative pr-6">
                  can help you
                  <span className="block w-full h-1 bg-[#2D8CFF] mt-1.5 rounded-full shadow-sm"></span>
                </span>
              </div>

              {/* Description Text */}
              <p className="text-sm sm:text-base text-zinc-800 pt-2 max-w-xl leading-relaxed font-medium">
                Have you been injured on the job in Los Angeles, Riverside, or San Bernardino County? Get aggressive, compassionate legal representation with no upfront fees.
              </p>





            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MISSION / INTRO STATEMENT (Exact Match to Image 3) */}
      {/* ======================================================== */}
      <section id="mission" className="py-20 bg-[#FFFFFF] scroll-mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 text-center space-y-8">
          {/* Paragraph 1 matching Image 3 */}
          <p className="text-lg sm:text-2xl text-[#1F2937] font-normal leading-relaxed max-w-6xl mx-auto">
            To injured workers across the <strong className="font-bold text-[#0E336B]">Los Angeles, San Bernardino, and Riverside Counties</strong>, Mallery &amp; Stern is the one law firm specializing in Workers' Compensation who brings top quality assistance to all their clients, representing those who are injured at work or from work-related activities, such as physical and emotional injuries suffered from negligence and defective products, so that injured workers get a fair and reasonable benefit from their employment insurance!
          </p>

          {/* Established Since 1976 Tag matching Image 3 */}
          <div className="pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0E336B] tracking-tight">
              Mallery &amp; Stern has been representing California's Injured Workers since 1976.
            </h2>
          </div>

          {/* Required California Legal Warning Disclaimer (Image 3) */}
          <div className="pt-4 border-t border-zinc-200">
            <p className="text-xs sm:text-sm text-zinc-500 italic max-w-4xl mx-auto leading-relaxed">
              ***Making a false or fraudulent workers' compensation claim is a felony subject to up to 5 years in prison or a fine of up to $50,000 or double the value of the fraud, whichever is greater or by both imprisonment and fine.***
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. "WE ARE HERE FOR YOU" (Exact Match to Image 4) */}
      {/* ======================================================== */}
      <section id="about" className="py-20 bg-[#F9FAFB] border-y border-zinc-200 scroll-mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Text matching Image 4 */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF] block">
                  About Our Firm
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
                  We Are Here For You
                </h2>
                <div className="w-16 h-1 bg-[#0E336B]"></div>
              </div>

              <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
                <p>
                  At Mallery &amp; Stern, we focus on <strong>Work Injuries, Wrongful Termination, Wage &amp; Hour Disputes, and Serious Bodily Injury Claims!</strong> We're here to listen to you and help you navigate the legal system.
                </p>

                <p className="font-medium text-[#111827]">
                  To Our Essential Heroes - We protect you because you protect us! Thank You for all you do during these hard times!
                </p>

                <p>
                  We offer a free consultation and we'll gladly discuss your case with you at your convenience.
                </p>
              </div>

              {/* Consultation Features List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#1F2937]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF]" />
                  <span>No Recovery, No Attorney Fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF]" />
                  <span>Free Confidential Case Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF]" />
                  <span>Se Habla Español</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D8CFF]" />
                  <span>No Office Visit Needed</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-md shadow-lg transition-all"
                >
                  Schedule Your Free Consultation
                </button>
              </div>
            </div>

            {/* Right Column: Visual Card matching Image 4 */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-300 bg-zinc-900 group">
                <img
                  src="/about_mallery_stern.jpg"
                  alt="Mallery & Stern - Lady Justice, Law Library and World Globe"
                  className="w-full h-auto aspect-square object-contain block group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E336B]/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. PRACTICE AREAS / LEGAL SPECIALIZATIONS */}
      {/* ======================================================== */}
      <section id="services" className="py-20 bg-white scroll-mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Areas of Specialization
            </h2>
            <p className="text-zinc-600 text-sm">
              We focus on protecting employees who have suffered work-related injuries or employment disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: 'Work Injuries',
                desc: 'Repetitive stress injuries, heavy lifting back injuries, construction site accidents, machine injuries, and catastrophic occupational hazards.'
              },
              {
                icon: Scale,
                title: 'Wrongful Termination',
                desc: 'Illegal retaliation for reporting unsafe working conditions or filing a rightful workers’ compensation claim in California.'
              },
              {
                icon: FileText,
                title: 'Wage & Hour Disputes',
                desc: 'Unpaid overtime, misclassification of independent contractors, denied rest breaks, and off-the-clock labor violations.'
              },
              {
                icon: ShieldCheck,
                title: 'Bodily Injury Claims',
                desc: 'Permanent disability, severe head or spinal trauma, orthopedic fractures, and long-term medical care benefits.'
              }
            ].map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F9FAFB] border border-zinc-200 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#2D8CFF] hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-center">
                    <Icon className="w-14 h-14 sm:w-16 sm:h-16 text-[#2D8CFF] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-[#0E336B] tracking-tight">
                    {area.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. RETAIN REPRESENTATION & OFFICE LOCATIONS (Image 5) */}
      {/* ======================================================== */}
      <section id="contact" className="py-20 bg-[#F3F4F6] border-t border-zinc-200 scroll-mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: RETAIN EXPERIENCED REPRESENTATION matching Image 5 */}
            <div id="representation" className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
                Retain Experienced Representation
              </h2>

              <ul className="space-y-3 text-base text-zinc-800 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-[#0E336B] font-bold">-</span>
                  <span>Free Phone Consultations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0E336B] font-bold">-</span>
                  <span>No Office Visit Needed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0E336B] font-bold">-</span>
                  <span>Hablamos Español</span>
                </li>
              </ul>

              {/* Super Lawyers Badge matching Image 5 */}
              {/* <div className="pt-4">
                <div className="inline-block border-2 border-zinc-300 rounded-xl bg-white p-4 shadow-md max-w-xs">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block tracking-wider">
                    Rated By
                  </span>
                  <div className="text-xl font-black text-[#111827] tracking-tight font-serif mt-0.5">
                    Super Lawyers
                  </div> */}
              {/* Orange Ribbon with Lawrence I. Stern & 10 YEARS */}
              {/* <div className="mt-2 bg-[#FF5500] text-white px-3 py-1.5 rounded text-xs font-black uppercase tracking-wide text-center">
                    Lawrence I. Stern
                  </div>
                  <div className="text-center text-[10px] font-extrabold uppercase tracking-widest text-[#FF5500] mt-1.5">
                    10 Years
                  </div>
                </div>
              </div> */}

              {/* Consultation Quick Trigger */}
              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#2D8CFF] hover:bg-[#1C7CEE] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Request Free Phone Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Column: OFFICE LOCATIONS matching Image 5 */}
            <div id="locations" className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
                Office Locations
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Los Angeles Office */}
                <div className="bg-white border border-zinc-300 rounded-xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#0E336B] font-extrabold text-base uppercase">
                    <MapPin className="w-5 h-5 text-[#2D8CFF] flex-shrink-0" />
                    <span>Los Angeles Office</span>
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed">
                    5120 West Goldleaf Circle, #380 <br />
                    Los Angeles, CA 90056
                  </p>

                  <div className="pt-2 border-t border-zinc-100 space-y-1 text-xs">
                    <p>
                      <strong className="text-zinc-900 font-bold">Phone: </strong>
                      <a href="tel:3104730777" className="text-[#0E336B] font-extrabold hover:underline">
                        310-473-0777
                      </a>
                    </p>
                    <p className="text-zinc-500">
                      <strong>Fax: </strong> 310-477-1312
                    </p>
                  </div>
                </div>

                {/* Rancho Office */}
                <div className="bg-white border border-zinc-300 rounded-xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-[#0E336B] font-extrabold text-base uppercase">
                    <MapPin className="w-5 h-5 text-[#2D8CFF] flex-shrink-0" />
                    <span>Rancho Office</span>
                  </div>

                  <p className="text-xs text-zinc-700 leading-relaxed">
                    8350 Archibald Avenue, CA, #206 <br />
                    Rancho Cucamonga, CA 91730
                  </p>

                  <div className="pt-2 border-t border-zinc-100 space-y-1 text-xs">
                    <p>
                      <strong className="text-zinc-900 font-bold">Phone: </strong>
                      <a href="tel:9099489999" className="text-[#0E336B] font-extrabold hover:underline">
                        909-948-9999
                      </a>
                    </p>
                    <p className="text-zinc-500">
                      Serving Inland Empire &amp; San Bernardino
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. COMMON WORKERS' COMP Q&A (FAQ) */}
      {/* ======================================================== */}
      <section id="qa" className="py-20 bg-white scroll-mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Workers' Comp Questions
            </span>
            <h2 className="text-3xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Frequently Asked Questions (Q&amp;A)
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: 'What should I do immediately after getting injured at work?',
                a: 'Report your injury to your employer in writing immediately, request a DWC-1 claim form, seek medical treatment, and consult with a workers’ compensation attorney before speaking to the insurance company adjuster.'
              },
              {
                q: 'Can my employer fire me for filing a workers’ compensation claim?',
                a: 'No. California Labor Code Section 132a makes it strictly illegal for an employer to fire, demote, or discriminate against an employee for filing a workers’ compensation claim.'
              },
              {
                q: 'How much does it cost to hire Mallery & Stern?',
                a: 'We work on a contingency fee basis. There are zero upfront costs or out-of-pocket legal fees. We only get paid if we recover compensation for your case.'
              },
              {
                q: 'What benefits am I entitled to receive under California law?',
                a: 'Benefits include 100% covered medical care, temporary disability wage replacement, permanent disability compensation, and supplemental job displacement vouchers if you cannot return to your prior role.'
              }
            ].map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="bg-[#F9FAFB] border border-zinc-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#2D8CFF]"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-bold text-base text-[#0E336B] leading-snug">
                      {faq.q}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 text-[#0E336B] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#0E336B] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600 leading-relaxed transition-all duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. RESOURCES SECTION (For Navbar "RESOURCES") */}
      {/* ======================================================== */}
      <section id="resources" className="py-20 bg-[#F9FAFB] border-t border-zinc-200 scroll-mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Legal Knowledge &amp; Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Injured Worker Resources
            </h2>
            <p className="text-zinc-600 text-sm">
              Essential rights, official California forms, and critical timelines every injured employee should know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0E336B] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#2D8CFF]" />
              </div>
              <h3 className="font-bold text-lg text-[#0E336B]">
                California DWC-1 Claim Form
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                By California law, your employer must provide the official Workers’ Compensation Claim Form (DWC-1) within one working day of learning of your injury.
              </p>
              <button
                onClick={onOpenQuote}
                className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
              >
                Get Guidance on Filing <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0E336B] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#2D8CFF]" />
              </div>
              <h3 className="font-bold text-lg text-[#0E336B]">
                Medical Treatment Rights
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                You are entitled to reasonable and necessary medical care paid entirely by the insurance carrier with no co-pays or deductibles.
              </p>
              <button
                onClick={onOpenQuote}
                className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
              >
                Protect Your Treatment <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl p-6 space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0E336B] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#0E336B]" />
              </div>
              <h3 className="font-bold text-lg text-[#0E336B]">
                Disability Benefits Guide
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Understand the difference between Temporary Disability (TD) wage replacements and Permanent Disability (PD) impairment payouts.
              </p>
              <button
                onClick={onOpenQuote}
                className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
              >
                Learn Your Rights <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. BLOG / LEGAL INSIGHTS (For Navbar "BLOG") */}
      {/* ======================================================== */}
      <section id="blog" className="py-20 bg-white border-t border-zinc-200 scroll-mt-24">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Legal Insights &amp; Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Workers' Compensation Blog
            </h2>
            <p className="text-zinc-600 text-sm">
              Recent articles and case developments from our Southern California legal team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "What to Do If Your California Workers' Comp Claim Is Denied",
                date: "Updated Recently",
                tag: "Claim Appeals",
                snippet: "Insurance adjusters often deny valid claims hoping injured workers walk away. Learn how an experienced attorney files an Application for Adjudication."
              },
              {
                title: "Understanding Cumulative Trauma & Repetitive Stress at Work",
                date: "Legal Guide",
                tag: "Work Injuries",
                snippet: "You don't need a single catastrophic accident. Gradual wear and tear, carpal tunnel, and chronic back pain are fully covered under California law."
              },
              {
                title: "Third-Party Lawsuits vs Workers' Comp: Can You File Both?",
                date: "Specialized Analysis",
                tag: "Bodily Injury",
                snippet: "If a negligent contractor, machine manufacturer, or driver caused your on-the-job injury, you may recover both workers' comp and third-party damages."
              }
            ].map((article, idx) => (
              <div
                key={idx}
                className="bg-[#F9FAFB] border border-zinc-200 rounded-xl p-6 space-y-3 flex flex-col justify-between hover:border-[#0E336B] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="bg-blue-100 text-[#0E336B] font-bold px-2.5 py-0.5 rounded">
                      {article.tag}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-bold text-base text-[#0E336B] leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#2D8CFF] hover:text-[#0E336B] inline-flex items-center gap-1"
                  >
                    Discuss This Topic <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. CLIENT TESTIMONIALS (Exact Match to Image 1 Nav item) */}
      {/* ======================================================== */}
      <section id="testimonials" className="py-24 bg-white text-[#1F2937] border-t border-zinc-200 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D8CFF]">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl font-extrabold text-[#0E336B] tracking-tight uppercase font-display">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {[
              {
                quote: "Mallery & Stern fought for me when the insurance company denied my back surgery. Thanks to Lawrence Stern and the team, I got the treatment I needed and a substantial financial settlement.",
                author: "Carlos R.",
                location: "Los Angeles, CA",
                type: "Warehouse Worker Injury"
              },
              {
                quote: "After 22 years on the job, I suffered a repetitive stress injury. Mallery & Stern treated me like family, handled all paperwork without me needing to leave home, and won my case.",
                author: "Maria S.",
                location: "Riverside, CA",
                type: "Repetitive Strain Claim"
              },
              {
                quote: "Professional, responsive, and aggressive against big insurance defense attorneys. If you've been hurt at work in California, this is the only firm you should call.",
                author: "David L.",
                location: "Rancho Cucamonga, CA",
                type: "Construction Fall Settlement"
              }
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-zinc-200 rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-[#2D8CFF] min-h-[300px] cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 mt-6">
                  <h4 className="font-bold text-sm text-[#0E336B]">{t.author}</h4>
                  <p className="text-[11px] text-zinc-500">{t.location} • {t.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <button
              onClick={onOpenQuote}
              className="bg-[#0E336B] hover:bg-[#123E80] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-lg transition-all"
            >
              Get Your Free Confidential Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
