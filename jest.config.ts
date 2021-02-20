module.exports = {
  testEnvironment: 'node',
  verbose: false,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: [
    '<rootDir>/setupTests.ts',
  ],
};
