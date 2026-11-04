import React from 'react';
import {
  Phone,
  Printer,
  MapPin,
  Clock,
  ChevronRight,
  Mail
} from 'lucide-react';
import { MallerySternLogo } from '../ui/MSCCLogo';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#071B38] text-white border-t-4 border-[#0E336B] transition-colors">
      {/* Main Multi-Column Footer Content */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-14">

          {/* Column 1: Brand & Firm Summary (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block bg-white p-3 rounded-lg shadow-md">
              <MallerySternLogo isDark={false} />
            </div>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
              Representing California's injured workers since 1976. Mallery &amp; Stern specializes exclusively in Workers' Compensation, workplace accidents, wrongful termination retaliation, and severe bodily injury claims across Los Angeles, Riverside, and San Bernardino counties.
            </p>

            <div className="space-y-2 pt-1 text-xs text-blue-200 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D8CFF]"></span>
                <span>Over 48 Years of Proven Trial Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D8CFF]"></span>
                <span>Super Lawyers Rated – Lawrence I. Stern</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D8CFF]"></span>
                <span>Hablamos Español • No Office Visit Needed</span>
              </div>
            </div>

            {/* Direct Contact Info Alternate for Contact Us */}
            <div className="pt-3 border-t border-blue-900/60">
              <span className="block text-[11px] font-extrabold uppercase tracking-widest text-blue-300 mb-2.5">
                Contact Us
              </span>
              <div className="space-y-2 text-xs">
                <a
                  href="tel:3104730777"
                  className="flex items-center gap-2.5 text-white hover:text-[#2D8CFF] font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2D8CFF]" />
                  <span>310-473-0777 (Toll-Free Call)</span>
                </a>
                <a
                  href="mailto:contact@ms-law.com"
                  className="flex items-center gap-2.5 text-blue-200 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2D8CFF]" />
                  <span>contact@ms-law.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-900 pb-2">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-blue-200">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Q&A (Frequently Asked)', id: 'qa' },
                { name: 'Resources & Forms', id: 'resources' },
                { name: 'Contact Us', id: 'contact' },
                { name: 'Legal Blog', id: 'blog' },
                { name: 'Client Testimonials', id: 'testimonials' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all text-left group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-[#2D8CFF] transition-colors" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenQuote}
                  className="flex items-center gap-1.5 text-[#2D8CFF] hover:text-blue-300 transition-colors font-bold mt-2"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>Request Free Case Review</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Locations (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between border-b border-blue-900 pb-2">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Office Locations
              </h4>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Location 1: Los Angeles Office */}
              <div className="bg-[#0C2A59]/70 border border-blue-900/80 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-white font-extrabold text-xs uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Los Angeles Office</span>
                </div>

                <p className="text-xs text-blue-100 leading-relaxed font-medium">
                  5120 West Goldleaf Circle, #380<br />
                  Los Angeles, CA 90056
                </p>

                <div className="pt-2 border-t border-blue-900/60 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2D8CFF]" />
                    <a
                      href="tel:3104730777"
                      className="text-white font-extrabold hover:text-[#2D8CFF] transition-colors"
                    >
                      310-473-0777
                    </a>
                  </p>
                  <p className="flex items-center gap-1.5 text-blue-300 text-[11px]">
                    <Printer className="w-3.5 h-3.5 text-blue-400" />
                    <span>Fax: 310-477-1312</span>
                  </p>
                </div>
              </div>

              {/* Location 2: Rancho Cucamonga Office */}
              <div className="bg-[#0C2A59]/70 border border-blue-900/80 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-white font-extrabold text-xs uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-[#2D8CFF] flex-shrink-0" />
                  <span>Rancho Office</span>
                </div>

                <p className="text-xs text-blue-100 leading-relaxed font-medium">
                  8350 Archibald Avenue, CA, #206<br />
                  Rancho Cucamonga, CA 91370
                </p>

                <div className="pt-2 border-t border-blue-900/60 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2D8CFF]" />
                    <a
                      href="tel:9099489999"
                      className="text-white font-extrabold hover:text-[#2D8CFF] transition-colors"
                    >
                      909-948-9999
                    </a>
                  </p>
                  <p className="flex items-center gap-1.5 text-blue-300 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Serving Inland Empire</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Mandatory Fraud Disclaimer Notice */}
            <div className="bg-[#05142B]/80 border border-blue-950 rounded-lg p-3 text-[10px] sm:text-[11px] text-zinc-400 italic leading-relaxed">
              ***Making a false or fraudulent workers' compensation claim is a felony subject to up to 5 years in prison or a fine of up to $50,000 or double the value of the fraud, whichever is greater or by both imprisonment and fine.***
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer: Copyright, Legal Docs & Disclaimer */}
      <div className="w-full bg-[#041226] border-t border-blue-950 py-5">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-zinc-400">

          <div className="space-y-1">
            <p>
              Copyright &copy; 2026 Mallery &amp; Stern, APC. All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-500">
              The information on this website is for general information purposes only and does not constitute formal legal advice.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-400">
            <button
              onClick={() => alert("Terms of Use: Information provided is for educational purposes under California State Bar guidelines.")}
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button
              onClick={() => alert("Privacy Policy: All consultation submissions are kept strictly confidential under attorney-client privilege guidelines.")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => alert("Anti-Spam Policy: Mallery & Stern does not sell or distribute client communication information.")}
              className="hover:text-white transition-colors"
            >
              Anti-spam
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

