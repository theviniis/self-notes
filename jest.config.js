module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: ['src/**/*.text.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/config.ts'],
};
