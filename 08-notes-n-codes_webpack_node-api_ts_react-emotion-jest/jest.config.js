module.exports = {

  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  projects : [
    'src'
  ],

  // "testEnvironment": 'node',
  testEnvironment: 'jsdom',

  //@ Scripts to run before jest is loaded
  setupFiles: [
    '<rootDir>/node_modules/regenerator-runtime/runtime', // https://github.com/facebook/jest/issues/5698
    '<rootDir>/test/jest.init.js'
  ],

  //@ Scripts to run after jest is loaded
  setupFilesAfterEnv: [
    require.resolve('./test/setup-tests.js'),
  ],

  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',  // <--- this must come before '\\.css$'
    '\\.css$': require.resolve('./test/style-mock.js')
  },

  // snapshotSerializers: ['jest-emotion'], //<---- not working

  //@ if collectCoverageFrom absence, jest coverage will take into account of
  //@ configuration script in 'test' folder. This lead to wrong statistic on coverage
  collectCoverageFrom: [
    '**/src/**/*.(js|jsx|ts|tsx)' // only run coverage in src (ie. test/ folder is excluded)
  ],

  coverageThreshold: {
    global: {
      stagements: 50,
      branch: 50,
      functions: 50,
      lines: 50
    },
    './src/setup-check/check-a02-handling-async-function/my-async-fn.js': {
      stagements: 100,
      branch: 100,
      functions: 100,
      lines: 100
    }
  },

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
