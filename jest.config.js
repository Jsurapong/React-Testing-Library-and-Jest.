const nextJest = require("next/jest");
const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const pathsToModuleName = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js",],

  moduleNameMapper: {
    ...pathsToModuleName,

  },

  testEnvironment: 'jsdom',

  moduleDirectories: ['node_modules'],

};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
