module.exports = {

  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  projects : [
    'src'
  ],

  'testEnvironment': 'node',
  // testEnvironment: 'jsdom',

  //@ Scripts to run before jest is loaded
  setupFiles: [
    '<rootDir>/node_modules/regenerator-runtime/runtime', // https://github.com/facebook/jest/issues/5698
    '<rootDir>/test/jest.init.js'
  ],

  //@ Scripts to run after jest is loaded
  setupFilesAfterEnv: [
    require.resolve('./test/setup-tests.js'),
  ],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
