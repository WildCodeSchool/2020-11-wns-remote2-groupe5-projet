module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/web-client'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
