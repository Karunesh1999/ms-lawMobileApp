import { ShieldCheck, ChevronRight } from 'lucide-react';
import { MSLawLogo } from '../../components/common/MSLawLogo';

interface OnboardingScreenProps {
  onGetStarted: () => void;
}

export function OnboardingScreen({ onGetStarted }: OnboardingScreenProps) {
  return (
    <main className="entry-shell onboarding-screen">
      <div className="onboarding-content">
        <MSLawLogo />
        <div className="onboarding-illustration">
          <ShieldCheck size={34} />
          <span>MS</span>
        </div>
        <p className="eyebrow">YOUR CASE. YOUR TEAM. YOUR PEACE OF MIND.</p>
        <h1>
          Legal support,
          <br />
          <em>made simple.</em>
        </h1>
        <p className="entry-copy">
          Stay connected with your legal team, appointments, documents, and case updates in one
          secure place.
        </p>
      </div>

      <div className="onboarding-footer">
        <div className="onboarding-dots">
          <span className="active" />
          <span />
          <span />
        </div>
        <button className="primary-button wide" onClick={onGetStarted}>
          Get started <ChevronRight size={17} />
        </button>
        <small>Your information is private and protected.</small>
      </div>
    </main>
  );
}

export default OnboardingScreen;
