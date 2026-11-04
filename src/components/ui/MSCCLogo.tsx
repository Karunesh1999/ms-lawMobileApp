import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
  variant?: 'light' | 'dark';
}

export const MallerySternLogo: React.FC<LogoProps> = ({
  className = '',
  isDark = false,
  variant
}) => {
  const darkMode = isDark || variant === 'dark';
  const primaryColor = darkMode ? '#FFFFFF' : '#0E336B';
  const subColor = darkMode ? '#60A5FA' : '#1D4ED8';
  const dividerColor = darkMode ? '#93C5FD' : '#3B82F6';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Boxed Monogram [M || S] matching Image 1 */}
      <div className="relative flex-shrink-0">
        <svg
          className="w-11 h-11 sm:w-12 sm:h-12"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Box with Blue fill or border */}
          <rect
            x="2"
            y="2"
            width="50"
            height="50"
            rx="1"
            fill={darkMode ? 'transparent' : '#0E336B'}
            stroke={darkMode ? '#FFFFFF' : '#0E336B'}
            strokeWidth="3"
          />
          {/* Inner Inset Line */}
          <rect
            x="5.5"
            y="5.5"
            width="43"
            height="43"
            rx="0.5"
            stroke={darkMode ? '#93C5FD' : '#FFFFFF'}
            strokeWidth="1.2"
            strokeOpacity="0.8"
          />

          {/* Letter M on Left */}
          <path
            d="M 12 38 V 16 L 18 27 L 24 16 V 38"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Double Vertical Divider Lines in Center ( || ) */}
          <line
            x1="27"
            y1="13"
            x2="27"
            y2="41"
            stroke={dividerColor}
            strokeWidth="1.4"
          />
          <line
            x1="30"
            y1="13"
            x2="30"
            y2="41"
            stroke={dividerColor}
            strokeWidth="1.4"
          />

          {/* Letter S on Right */}
          <path
            d="M 43 20 C 42.5 17.5 40.5 16 37.5 16 C 34.2 16 32.5 17.8 32.5 20.2 C 32.5 25 43.5 24.5 43.5 33 C 43.5 36.2 41 38 37.2 38 C 34 38 32 36.2 31.5 33.5"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Wordmark: Mallery & Stern / WORK INJURY ATTORNEYS */}
      <div className="flex flex-col justify-center">
        <span
          className="font-extrabold tracking-tight text-lg sm:text-xl md:text-2xl leading-none font-display truncate"
          style={{ color: primaryColor }}
        >
          Mallery &amp; Stern
        </span>
        <span
          className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.24em] uppercase mt-1 leading-none"
          style={{ color: subColor }}
        >
          Work Injury Attorneys
        </span>
      </div>
    </div>
  );
};

export const MSCCLogo = MallerySternLogo;
