import * as Sentry from '@sentry/nextjs';
import { BrowserTracing } from '@sentry/tracing';

/**
 * @file sentry.ts
 * @description Sentry configuration for YYC3 Customer Care Center error tracking and performance monitoring
 * @module lib/sentry
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN,
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

export const captureException = (error: Error, context?: Record<string, any>) => {
  Sentry.captureException(error, {
    extra: context,
  });
};

export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info', context?: Record<string, any>) => {
  Sentry.captureMessage(message, {
    level,
    extra: context,
  });
};

export const setUser = (user: { id: string; email?: string; username?: string }) => {
  Sentry.setUser(user);
};

export const setTag = (key: string, value: string) => {
  Sentry.setTag(key, value);
};

export const setContext = (name: string, context: Record<string, any>) => {
  Sentry.setContext(name, context);
};

export const addBreadcrumb = (breadcrumb: {
  category: string;
  message: string;
  level?: 'info' | 'warning' | 'error';
  data?: Record<string, any>;
}) => {
  Sentry.addBreadcrumb(breadcrumb);
};

export const withSentry = <T extends (...args: any[]) => any>(
  fn: T,
  context?: Record<string, any>
): T => {
  return ((...args: any[]) => {
    try {
      return fn(...args);
    } catch (error) {
      captureException(error as Error, context);
      throw error;
    }
  }) as T;
};
