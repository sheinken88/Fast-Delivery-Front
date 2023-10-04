const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    moduleNameMapper: {
        '^services(.*)$': '<rootDir>/src/services$1',
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^store(.*)$': '<rootDir>/src/store$1',
        '^react-redux(.*)$': '<rootDir>/node_modules/react-redux$1',
    },
}

module.exports = createJestConfig(config)
