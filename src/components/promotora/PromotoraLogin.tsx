/**
 * PromotoraLogin Component
 * 
 * Login interface for Community Health Workers (Promotoras de Salud).
 * Features bilingual (Spanish/English) support and trust indicators.
 */

import React, { useState } from 'react';
import { TrustBadge, getTrustBadges, getLocalizedText, Language } from '../../core/promotora';

interface PromotoraLoginProps {
  onLogin: (credentials: { email: string; password: string; rememberMe: boolean }) => void;
  onForgotPassword: () => void;
  onRequestAccess: () => void;
  initialLanguage?: Language;
}

export const PromotoraLogin: React.FC<PromotoraLoginProps> = ({
  onLogin,
  onForgotPassword,
  onRequestAccess,
  initialLanguage = 'es',
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = (es: string, en: string) => (language === 'es' ? es : en);

  const trustBadges = getTrustBadges(language).filter(b => b.verified).slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await onLogin({ email, password, rememberMe });
    } catch (err) {
      setError(
        t(
          'Error al iniciar sesión. Verifique sus credenciales.',
          'Login error. Please verify your credentials.'
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="promotora-login">
      {/* Language Toggle */}
      <div className="language-toggle">
        <button
          className={language === 'es' ? 'active' : ''}
          onClick={() => setLanguage('es')}
          aria-label="Español"
        >
          🇲🇽 Español
        </button>
        <button
          className={language === 'en' ? 'active' : ''}
          onClick={() => setLanguage('en')}
          aria-label="English"
        >
          🇺🇸 English
        </button>
      </div>

      {/* Header */}
      <div className="login-header">
        <div className="logo-icon">🩺</div>
        <h1>{t('Promotoras de Salud', 'Community Health Workers')}</h1>
        <p className="subtitle">
          {t(
            'Portal seguro para Promotoras de Salud',
            'Secure portal for Community Health Workers'
          )}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message" role="alert">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">
            {t('Correo Electrónico', 'Email Address')}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('su@email.com', 'your@email.com')}
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            {t('Contraseña', 'Password')}
          </label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('Su contraseña', 'Your password')}
              required
              disabled={isLoading}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? t('Ocultar contraseña', 'Hide password') : t('Mostrar contraseña', 'Show password')}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            {t('Recordarme', 'Remember me')}
          </label>

          <button
            type="button"
            className="link-button"
            onClick={onForgotPassword}
            disabled={isLoading}
          >
            {t('¿Olvidó su contraseña?', 'Forgot password?')}
          </button>
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isLoading || !email || !password}
        >
          {isLoading ? (
            <>
              <span className="spinner">⏳</span>
              {t('Iniciando sesión...', 'Logging in...')}
            </>
          ) : (
            t('Iniciar Sesión', 'Log In')
          )}
        </button>
      </form>

      {/* Trust Badges */}
      <div className="trust-badges">
        <p className="trust-title">
          {t('Su información está protegida:', 'Your information is protected:')}
        </p>
        <div className="badges-row">
          {trustBadges.map((badge) => (
            <div key={badge.id} className="trust-badge" title={getLocalizedText(badge.description, language)}>
              <span className="badge-icon">{badge.icon}</span>
              <span className="badge-name">{getLocalizedText(badge.name, language)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Request Access */}
      <div className="request-access">
        <p>
          {t('¿No tiene cuenta de Promotora?', 'Don\'t have a Promotora account?')}
        </p>
        <button
          type="button"
          className="link-button highlight"
          onClick={onRequestAccess}
          disabled={isLoading}
        >
          {t('Solicitar Acceso', 'Request Access')}
        </button>
      </div>

      {/* Privacy Note */}
      <div className="privacy-note">
        <p>
          🔒 {t(
            'Sus datos están encriptados y nunca se comparten con inmigración.',
            'Your data is encrypted and never shared with immigration.'
          )}
        </p>
      </div>

      <style>{`
        .promotora-login {
          max-width: 420px;
          margin: 0 auto;
          padding: 2rem;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .language-toggle {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .language-toggle button {
          padding: 0.5rem 1rem;
          border: 1px solid #ddd;
          background: white;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .language-toggle button.active {
          background: #4CAF50;
          color: white;
          border-color: #4CAF50;
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .login-header h1 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }

        .subtitle {
          color: #666;
          margin-top: 0.5rem;
        }

        .error-message {
          background: #ffebee;
          color: #c62828;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .form-group label {
          font-weight: 500;
          color: #555;
          font-size: 0.9rem;
        }

        .form-group input {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #4CAF50;
        }

        .password-input-wrapper {
          position: relative;
        }

        .password-input-wrapper input {
          width: 100%;
          box-sizing: border-box;
        }

        .toggle-password {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-size: 1.2rem;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .link-button {
          background: none;
          border: none;
          color: #4CAF50;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0;
        }

        .link-button:hover {
          text-decoration: underline;
        }

        .link-button.highlight {
          font-weight: 500;
        }

        .submit-button {
          background: #4CAF50;
          color: white;
          border: none;
          padding: 0.875rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-button:hover:not(:disabled) {
          background: #45a049;
        }

        .submit-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .trust-badges {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }

        .trust-title {
          text-align: center;
          color: #666;
          font-size: 0.85rem;
          margin-bottom: 0.75rem;
        }

        .badges-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .trust-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #666;
        }

        .badge-icon {
          font-size: 1.5rem;
        }

        .request-access {
          margin-top: 1.5rem;
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }

        .request-access p {
          color: #666;
          margin-bottom: 0.5rem;
        }

        .privacy-note {
          margin-top: 1.5rem;
          padding: 0.75rem;
          background: #e8f5e9;
          border-radius: 8px;
          text-align: center;
        }

        .privacy-note p {
          margin: 0;
          font-size: 0.85rem;
          color: #2e7d32;
        }
      `}</style>
    </div>
  );
};

export default PromotoraLogin;
