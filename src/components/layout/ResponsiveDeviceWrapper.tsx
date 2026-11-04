import { useState, type ReactNode } from 'react';
import { Iphone } from '../ui/iphone';
import { Smartphone, Monitor } from 'lucide-react';

interface ResponsiveDeviceWrapperProps {
  children: ReactNode;
}

export function ResponsiveDeviceWrapper({ children }: ResponsiveDeviceWrapperProps) {
  const [deviceMode, setDeviceMode] = useState<'iphone' | 'fullscreen'>('iphone');

  return (
    <div className="min-h-screen w-full bg-[#0b1322] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#075cae]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Device Control Bar (visible on desktop/tablet) */}
      <header className="hidden sm:flex items-center justify-between w-full max-w-5xl px-6 py-4 z-30">
        <div className="flex items-center gap-3">
          <img
            src="/ms-law-logo.png"
            alt="MS Law Logo"
            className="h-7 w-auto brightness-0 invert drop-shadow-sm"
          />
          <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-700/50">
            Interactive Client Portal
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-700/80 shadow-lg text-xs">
          <button
            type="button"
            onClick={() => setDeviceMode('iphone')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              deviceMode === 'iphone'
                ? 'bg-[#075cae] text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone size={15} /> iPhone Mockup
          </button>
          <button
            type="button"
            onClick={() => setDeviceMode('fullscreen')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
              deviceMode === 'fullscreen'
                ? 'bg-[#075cae] text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor size={15} /> Full View
          </button>
        </div>
      </header>

      {/* Main viewport */}
      <main className="flex-1 w-full flex items-center justify-center p-0 sm:px-4 sm:pb-8 sm:pt-2 overflow-hidden z-20">
        {deviceMode === 'iphone' ? (
          <>
            {/* Desktop / Tablet: Magic UI iPhone Presentation */}
            <div className="hidden sm:flex items-center justify-center w-full h-full max-h-[92vh]">
              <div className="w-full max-w-[370px] md:max-w-[395px] lg:max-w-[420px] max-h-[860px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all">
                <Iphone className="w-full h-auto">
                  <div className="relative w-full h-full overflow-hidden text-[#132d4d] select-text">
                    {children}
                  </div>
                </Iphone>
              </div>
            </div>

            {/* Mobile View: Full Bleed Screen */}
            <div className="flex sm:hidden w-full min-h-screen text-[#132d4d] bg-[#fbfcfe]">
              {children}
            </div>
          </>
        ) : (
          /* Full View on Desktop */
          <div className="w-full max-w-[480px] min-h-screen sm:min-h-[850px] sm:max-h-[880px] sm:rounded-[28px] sm:border sm:border-slate-800 bg-[#fbfcfe] text-[#132d4d] sm:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
            {children}
          </div>
        )}
      </main>
    </div>
  );
}

export default ResponsiveDeviceWrapper;
