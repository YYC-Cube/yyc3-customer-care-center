/// <reference types="vitest" />

import '@testing-library/jest-dom';

interface Window {
  vi: typeof import('vitest');
}
