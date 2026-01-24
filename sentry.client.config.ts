import * as Sentry from '@sentry/nextjs';
import { BrowserTracing } from '@sentry/tracing';

/**
 * @file sentry.client.config.ts
 * @description Client-side Sentry configuration for YYC3 Customer Care Center
 * @module sentry.client.config
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'development',
  tracesSampleRate: parseFloat(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE || '0.1'),
  replaysSessionSampleRate: parseFloat(process.env.NEXT_PUBLIC_SENTRY_REPLAY_SESSION_SAMPLE_RATE || '0.1'),
  replaysOnErrorSampleRate: parseFloat(process.env.NEXT_PUBLIC_SENTRY_REPLAY_ON_ERROR_SAMPLE_RATE || '1.0'),
  
  integrations: [
    new BrowserTracing({
      tracingOrigins: ['localhost', 'api.yyc3.com', /^\//],
    }),
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  
  beforeSend(event, hint) {
    if (event.exception) {
      event.fingerprint = [
        '{{ default }}',
        String(event.request?.url),
      ];
    }
    return event;
  },
  
  beforeBreadcrumb(breadcrumb, hint) {
    if (breadcrumb.category === 'xhr' && breadcrumb.data?.url) {
      const url = new URL(breadcrumb.data.url);
      if (url.pathname.includes('/api/health')) {
        return null;
      }
    }
    return breadcrumb;
  },
  
  ignoreErrors: [
    'Non-Error promise rejection captured',
    'ResizeObserver loop limit exceeded',
    'Network request failed',
  ],
  
  denyUrls: [
    /extensions\//i,
    /^chrome:\/\//i,
    /^chrome-extension:\/\//i,
    /^moz-extension:\/\//i,
  ],
});

export default Sentry;
