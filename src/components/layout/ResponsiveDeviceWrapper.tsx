import type { ReactNode } from 'react';
import { Iphone } from '../ui/iphone';

interface ResponsiveDeviceWrapperProps {
  children: ReactNode;
}

export function ResponsiveDeviceWrapper({ children }: ResponsiveDeviceWrapperProps) {
  return (
    <div className="min-h-screen w-full bg-[#0b1322] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#075cae]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main viewport */}
      <main className="w-full h-full flex items-center justify-center p-0 sm:p-6 overflow-hidden z-20">
        {/* Desktop / Tablet: Magic UI iPhone Presentation */}
        <div className="hidden sm:flex items-center justify-center w-full h-full max-h-[96vh]">
          <div className="w-full max-w-[370px] md:max-w-[395px] lg:max-w-[420px] max-h-[880px] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
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
      </main>
    </div>
  );
}

export default ResponsiveDeviceWrapper;
