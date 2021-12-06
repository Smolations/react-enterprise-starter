/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'scss',
    'node'
  ],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/js/components$1',
    '^hooks(.*)$': '<rootDir>/src/js/hooks$1',
    '^pages(.*)$': '<rootDir>/src/js/pages$1',
    '^sass(.*)$': '<rootDir>/src/js/sass$1',
    '^state(.*)$': '<rootDir>/src/js/state$1',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules',
  },
  roots: [
    '<rootDir>/src',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  testMatch: [
    // '**/__tests__/**/*.[jt]s?(x)',
    // '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/*.jest.(js|jsx)',
  ],
  timers: 'modern',
  // preset: 'ts-jest',
  transform: {
    // '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
};

module.exports = config;
