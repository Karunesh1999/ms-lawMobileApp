import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Star
} from 'lucide-react';
import { MallerySternLogo } from '../ui/MSCCLogo';

interface NavbarProps {
  onOpenQuote: () => void;
}

const FacebookIcon = ({ className = "w-4 h-4 text-blue-500" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4 text-pink-500" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4 text-red-500" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [socialDropdownOpen, setSocialDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const socialRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler to elements or navigate to page
  const scrollTo = (elementId: string) => {
    setMobileMenuOpen(false);
    setSocialDropdownOpen(false);

    if (elementId === 'about') {
      navigate('/about');
      return;
    }

    if (elementId === 'services') {
      navigate('/services');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'contact', 'qa', 'resources', 'blog', 'testimonials'];
      const scrollY = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialRef.current && !socialRef.current.contains(event.target as Node)) {
        setSocialDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* ======================================================== */}
      {/* Tier 1: White Brand & Phone Bar (Exact match to Image 1) */}
      {/* ======================================================== */}
      <div className="bg-[#FFFFFF] border-b border-zinc-200 py-3 sm:py-4 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="w-full flex items-center justify-between gap-4">
          {/* Logo on Left */}
          <button
            onClick={() => scrollTo('hero')}
            className="group focus:outline-none flex-shrink-0 text-left max-w-[65%] sm:max-w-none"
            aria-label="Mallery & Stern Work Injury Attorneys Home"
          >
            <MallerySternLogo isDark={false} />
          </button>

          {/* Right Consultation Callout */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div className="text-right hidden md:block">
              <span className="block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#1F2937]">
                Contact Us For A Free Consultation
              </span>
              <a
                href="tel:3104730777"
                className="flex items-center justify-end gap-1.5 sm:gap-2 text-lg sm:text-2xl font-black text-[#0E336B] hover:text-[#1D4ED8] transition-colors tracking-tight font-display"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E336B] fill-current" />
                <span>310-473-0777</span>
              </a>
            </div>

            {/* Direct Call Icon for small screens */}
            <a
              href="tel:3104730777"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-[#0E336B] hover:bg-blue-100 transition-colors"
              aria-label="Call Mallery & Stern"
            >
              <Phone className="w-4 h-4 text-[#0E336B] fill-current" />
            </a>

            {/* Mobile Quote Button */}
            <button
              onClick={onOpenQuote}
              className="sm:hidden bg-[#0E336B] text-white font-bold text-[11px] px-2.5 py-1.5 rounded uppercase"
            >
              Consult
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* Tier 2: Solid Navy Blue Navigation Bar (Image 1: #0E336B) */}
      {/* ======================================================== */}
      <nav className="hidden xl:block w-full bg-[#0E336B] text-white">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center justify-between">
          {/* Desktop Nav Items (Exact 9 items from Image 1) */}
          <div className="hidden xl:flex items-center gap-1 xl:gap-2 py-1 text-xs font-bold uppercase tracking-wider">
            {/* 1. HOME */}
            <button
              onClick={() => scrollTo('hero')}
              className={`px-3 py-2 rounded transition-colors ${
                activeSection === 'hero' ? 'bg-[#09234B] text-white' : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              HOME
            </button>

            {/* 2. ABOUT US */}
            <button
              onClick={() => scrollTo('about')}
              className={`px-3 py-2 rounded transition-colors ${
                location.pathname === '/about' || activeSection === 'about'
                  ? 'bg-[#09234B] text-white'
                  : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              ABOUT US
            </button>

            {/* 3. OUR SERVICES */}
            <button
              onClick={() => scrollTo('services')}
              className={`px-3 py-2 rounded transition-colors ${
                location.pathname === '/services' || location.pathname === '/our-services' || activeSection === 'services'
                  ? 'bg-[#09234B] text-white'
                  : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              OUR SERVICES
            </button>

            {/* 4. Q&A */}
            <button
              onClick={() => scrollTo('qa')}
              className={`px-3 py-2 rounded transition-colors ${
                activeSection === 'qa' ? 'bg-[#09234B] text-white' : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              Q&amp;A
            </button>

            {/* 5. RESOURCES */}
            <button
              onClick={() => scrollTo('resources')}
              className={`px-3 py-2 rounded transition-colors ${
                activeSection === 'resources' ? 'bg-[#09234B] text-white' : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              RESOURCES
            </button>

            {/* 6. CONTACT */}
            <button
              onClick={() => scrollTo('contact')}
              className={`px-3 py-2 rounded transition-colors ${
                activeSection === 'contact' ? 'bg-[#09234B] text-white' : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              CONTACT
            </button>

            {/* 7. BLOG */}
            <button
              onClick={() => scrollTo('blog')}
              className={`px-3 py-2 rounded transition-colors ${
                activeSection === 'blog' ? 'bg-[#09234B] text-white' : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              BLOG
            </button>

            {/* 8. CLIENT TESTIMONIALS */}
            <button
              onClick={() => scrollTo('testimonials')}
              className={`px-3 py-2 rounded transition-colors ${
                activeSection === 'testimonials' ? 'bg-[#09234B] text-white' : 'hover:bg-[#123E80] text-zinc-100'
              }`}
            >
              CLIENT TESTIMONIALS
            </button>

            {/* 9. SOCIAL MEDIA */}
            <div
              ref={socialRef}
              className="relative"
              onMouseEnter={() => setSocialDropdownOpen(true)}
              onMouseLeave={() => setSocialDropdownOpen(false)}
            >
              <button
                onClick={() => setSocialDropdownOpen(!socialDropdownOpen)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded hover:bg-[#123E80] text-zinc-100 transition-colors"
              >
                <span>SOCIAL MEDIA</span>
                <ChevronDown className="w-3.5 h-3.5 text-blue-200" />
              </button>

              {socialDropdownOpen && (
                <div className="absolute top-full right-0 mt-0.5 w-52 bg-[#09234B] border border-blue-900 shadow-2xl p-2 z-50 rounded-b-lg space-y-1">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded text-xs text-zinc-200 hover:bg-[#123E80] hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FacebookIcon />
                      <span>Facebook</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-blue-300" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded text-xs text-zinc-200 hover:bg-[#123E80] hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <InstagramIcon />
                      <span>Instagram</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-blue-300" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded text-xs text-zinc-200 hover:bg-[#123E80] hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <YoutubeIcon />
                      <span>YouTube</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-blue-300" />
                  </a>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded text-xs text-zinc-200 hover:bg-[#123E80] hover:text-white border-t border-blue-900/60 pt-2"
                  >
                    <span className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span>Google Reviews</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-blue-300" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Consultation Button on Far Right of Navy Bar */}
          <div className="hidden xl:flex items-center py-1.5">
            <button
              onClick={onOpenQuote}
              className="bg-[#2D8CFF] hover:bg-[#1C7CEE] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded transition-all shadow"
            >
              Free Case Review
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0E336B] text-white border-b border-blue-950 p-4 space-y-1">
          <button
            onClick={() => scrollTo('hero')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>HOME</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>ABOUT US (SINCE 1976)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>OUR SERVICES (WORKERS' COMP)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('qa')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>Q&amp;A</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('resources')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>RESOURCES</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>CONTACT &amp; LOCATIONS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('blog')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>BLOG</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('testimonials')}
            className="w-full flex items-center justify-between p-2.5 rounded hover:bg-[#123E80] text-sm font-bold uppercase text-left"
          >
            <span>CLIENT TESTIMONIALS</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="pt-3 border-t border-blue-900/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-[#2D8CFF] hover:bg-[#1C7CEE] text-white font-bold text-xs uppercase tracking-wider py-3 rounded text-center"
            >
              Request Free Case Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
