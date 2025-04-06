// jest.config.js (using ES Module syntax)
export default {
    transform: {
      "^.+\\.js$": "babel-jest", // Use babel-jest to transpile JavaScript files
    },
    testEnvironment: 'node', // Use Node environment for testing
    globals: {
      'ts-jest': {
        useBabelrc: true, // Use Babel config with Jest if you have TypeScript
      }
    },
    moduleNameMapper: {
      // Add mappings if needed, for example:
      '^src/(.*)$': '<rootDir>/src/$1', // Useful for path aliases (if used)
    },
  };
  