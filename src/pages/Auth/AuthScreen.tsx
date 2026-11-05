import { useState } from 'react';
import { ChevronRight, CircleCheck } from 'lucide-react';
import { MSLawLogo } from '../../components/common/MSLawLogo';

interface AuthScreenProps {
  onLogin: () => void;
  onBack?: () => void;
}

export function AuthScreen({ onLogin, onBack }: AuthScreenProps) {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [resetSent, setResetSent] = useState(false);

  const handleBack = () => {
    if (mode === 'signup' || mode === 'forgot') {
      setMode('login');
      setResetSent(false);
    } else if (onBack) {
      onBack();
    }
  };

  return (
    <main className="entry-shell auth-screen">
      <div className="auth-top">
        <button
          type="button"
          className="back-button"
          onClick={handleBack}
          aria-label="Back"
        >
          <ChevronRight size={18} className="back-icon" />
        </button>
        <MSLawLogo />
      </div>

      <div className="auth-content">
        <p className="eyebrow">MS LAW CLIENT PORTAL</p>
        <h1>
          {mode === 'login'
            ? 'Welcome back'
            : mode === 'signup'
            ? 'Create your account'
            : 'Reset password'}
        </h1>
        <p className="entry-copy">
          {mode === 'login'
            ? 'Log in to securely access your case and legal team.'
            : mode === 'signup'
            ? 'Set up your secure client portal in just a moment.'
            : 'Enter your email address and we will send you a reset link.'}
        </p>

        {mode === 'forgot' ? (
          resetSent ? (
            <div className="mt-6 p-4 rounded-xl bg-[#eaf4fb] border border-[#cbe1f4] text-center">
              <CircleCheck size={36} className="text-[#075cae] mx-auto mb-2" />
              <h3 className="text-[15px] font-bold text-[#132d4d]">Check your email</h3>
              <p className="text-[12px] text-[#55697d] mt-1 mb-4 leading-relaxed">
                We've sent a password reset link to <strong>alex.morgan@example.com</strong>.
              </p>
              <button
                type="button"
                className="primary-button wide"
                onClick={() => {
                  setMode('login');
                  setResetSent(false);
                }}
              >
                Back to log in
              </button>
            </div>
          ) : (
            <>
              <label>
                Email address
                <input
                  type="email"
                  defaultValue="alex.morgan@example.com"
                  placeholder="you@example.com"
                />
              </label>

              <button
                type="button"
                className="primary-button wide !mt-6"
                onClick={() => setResetSent(true)}
              >
                Send reset link <ChevronRight size={16} />
              </button>

              <p className="auth-switch">
                Remember your password?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                >
                  Log in
                </button>
              </p>
            </>
          )
        ) : (
          <>
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

            {mode === 'login' && (
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="text-[11px] font-semibold text-[#075cae] hover:underline bg-transparent border-0 p-0 cursor-pointer"
                  onClick={() => {
                    setMode('forgot');
                    setResetSent(false);
                  }}
                >
                  Forgot password?
                </button>
              </div>
            )}

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

            <button type="button" className="primary-button wide !mt-5" onClick={onLogin}>
              {mode === 'login' ? 'Log in' : 'Create account'}{' '}
              <ChevronRight size={16} />
            </button>

            <p className="auth-switch">
              {mode === 'login' ? 'New to Mallery & Stern?' : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              >
                {mode === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </>
        )}
      </div>

      <small className="auth-note">
        By continuing, you agree to our Terms and Privacy Policy.
      </small>
    </main>
  );
}

export default AuthScreen;
