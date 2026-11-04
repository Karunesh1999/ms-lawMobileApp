import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { MSLawLogo } from '../../components/common/MSLawLogo';

interface AuthScreenProps {
  onLogin: () => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <main className="entry-shell auth-screen">
      <div className="auth-top">
        <button
          className="back-button"
          onClick={() => setMode('login')}
          aria-label="Back"
        >
          <ChevronRight size={18} className="back-icon" />
        </button>
        <MSLawLogo />
      </div>

      <div className="auth-content">
        <p className="eyebrow">MS LAW CLIENT PORTAL</p>
        <h1>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h1>
        <p className="entry-copy">
          {mode === 'login'
            ? 'Log in to securely access your case and legal team.'
            : 'Set up your secure client portal in just a moment.'}
        </p>

        <label>
          Email address
          <input
            type="email"
            defaultValue={mode === 'login' ? 'alex.morgan@example.com' : ''}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            defaultValue="••••••••"
            placeholder="Enter your password"
          />
        </label>

        {mode === 'signup' && (
          <label>
            Confirm password
            <input
              type="password"
              defaultValue="••••••••"
              placeholder="Confirm your password"
            />
          </label>
        )}

        <button className="primary-button wide" onClick={onLogin}>
          {mode === 'login' ? 'Log in' : 'Create account'}{' '}
          <ChevronRight size={16} />
        </button>

        <p className="auth-switch">
          {mode === 'login' ? 'New to Mallery & Stern?' : 'Already have an account?'}{' '}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>

      <small className="auth-note">
        By continuing, you agree to our Terms and Privacy Policy.
      </small>
    </main>
  );
}

export default AuthScreen;
