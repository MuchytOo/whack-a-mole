module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['<rootDir>/test/unit/**/*.spec.js'],
}
