interface MSLawLogoProps {
  compact?: boolean;
}

export function MSLawLogo({ compact = false }: MSLawLogoProps) {
  return (
    <img
      src="/ms-law-logo.png"
      alt="Mallery & Stern Work Injury Attorneys"
      className={compact ? "logo logo-compact" : "logo"}
    />
  );
}

