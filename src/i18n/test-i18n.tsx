/**
 * i18n System Test Component
 *
 * This component tests the bilingual (English/Spanish) functionality
 * of the Biological Self app.
 */

import React from 'react';
import { useI18n, useTranslation } from './useI18n';
import { LanguageSwitcher, LanguageToggle, LanguageMenu } from '../components/LanguageSwitcher';
import { formatDate, formatNumber, formatRelativeTime } from './utils';

/**
 * Test component to verify i18n functionality
 */
export function I18nTest(): React.ReactElement {
  const { language, languageInfo, toggleLanguage, availableLanguages, t: tGlobal } = useI18n();
  const { t: tCommon } = useTranslation('common');
  const { t: tNav } = useTranslation('navigation');
  const { t: tDash } = useTranslation('dashboard');
  const { t: tChat } = useTranslation('chat');

  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>i18n System Test</h1>

      {/* Language Info */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Current Language</h2>
        <p>Code: <strong>{language}</strong></p>
        <p>Name: {languageInfo.name}</p>
        <p>Native Name: {languageInfo.nativeName}</p>
        <p>Flag: {languageInfo.flag}</p>
        <p>Direction: {languageInfo.direction}</p>
      </section>

      {/* Language Switchers */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Language Switchers</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <p>Dropdown:</p>
            <LanguageSwitcher variant="dropdown" />
          </div>
          <div>
            <p>Buttons:</p>
            <LanguageSwitcher variant="buttons" />
          </div>
          <div>
            <p>Toggle:</p>
            <LanguageSwitcher variant="toggle" />
          </div>
          <div>
            <p>Minimal:</p>
            <LanguageSwitcher variant="minimal" />
          </div>
          <div>
            <p>LanguageToggle:</p>
            <LanguageToggle />
          </div>
          <div>
            <p>LanguageMenu:</p>
            <LanguageMenu />
          </div>
        </div>
      </section>

      {/* Translation Examples */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Translation Examples</h2>

        <h3>Common</h3>
        <ul>
          <li>App Name: {tCommon('app.name')}</li>
          <li>Tagline: {tCommon('app.tagline')}</li>
          <li>Loading: {tCommon('action.loading')}</li>
          <li>Save: {tCommon('action.save')}</li>
          <li>Cancel: {tCommon('action.cancel')}</li>
          <li>Today: {tCommon('time.today')}</li>
          <li>Yes/No: {tCommon('medical.yes')} / {tCommon('medical.no')}</li>
        </ul>

        <h3>Navigation</h3>
        <ul>
          <li>Dashboard: {tNav('nav.dashboard')}</li>
          <li>Timeline: {tNav('nav.timeline')}</li>
          <li>Body: {tNav('nav.body')}</li>
          <li>Chat: {tNav('nav.chat')}</li>
          <li>Settings: {tNav('nav.settings')}</li>
        </ul>

        <h3>Dashboard</h3>
        <ul>
          <li>Title: {tDash('dashboard.title')}</li>
          <li>Vitals: {tDash('dashboard.vitals.title')}</li>
          <li>Heart Rate: {tDash('dashboard.vitals.heartRate')}</li>
          <li>Sleep: {tDash('dashboard.vitals.sleep')}</li>
          <li>Steps: {tDash('dashboard.vitals.steps')}</li>
        </ul>

        <h3>Chat</h3>
        <ul>
          <li>Title: {tChat('chat.title')}</li>
          <li>Welcome: {tChat('chat.welcome.title')}</li>
          <li>Disclaimer: {tChat('chat.disclaimer')}</li>
        </ul>
      </section>

      {/* Formatting Examples */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Formatting Examples</h2>

        <h3>Dates</h3>
        <ul>
          <li>Today: {formatDate(now, language)}</li>
          <li>Yesterday: {formatDate(yesterday, language)}</li>
          <li>Relative (yesterday): {formatRelativeTime(yesterday, language)}</li>
        </ul>

        <h3>Numbers</h3>
        <ul>
          <li>Integer: {formatNumber(1234567, language)}</li>
          <li>Decimal: {formatNumber(1234567.89, language)}</li>
          <li>Currency: {formatNumber(1234.56, language, { style: 'currency', currency: 'USD' })}</li>
          <li>Percent: {formatNumber(0.8567, language, { style: 'percent', maximumFractionDigits: 1 })}</li>
        </ul>
      </section>

      {/* Available Languages */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Available Languages</h2>
        <ul>
          {availableLanguages.map((lang) => (
            <li key={lang.code}>
              {lang.flag} {lang.name} ({lang.nativeName}) - {lang.code}
            </li>
          ))}
        </ul>
      </section>

      {/* Toggle Test */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Quick Toggle</h2>
        <button onClick={toggleLanguage} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
          Toggle Language ({languageInfo.flag} → {availableLanguages.find(l => l.code !== language)?.flag})
        </button>
      </section>
    </div>
  );
}

export default I18nTest;
