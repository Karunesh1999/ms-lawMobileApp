import { MSLawLogo } from '../../components/common/MSLawLogo';

export function SplashScreen() {
  return (
    <main className="entry-shell splash-screen">
      <div className="splash-brand">
        <MSLawLogo />
        <span className="loader" aria-label="Loading" />
      </div>
      <p>Secure support for your legal journey</p>
    </main>
  );
}

export default SplashScreen;
