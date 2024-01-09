// jest.config.js
module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: ['/node_modules/(?!vue3-toastify)'],
  };
  