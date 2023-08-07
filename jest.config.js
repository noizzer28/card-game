// module.exports = {
//     transform: {},
// }
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '\\.css$': 'jest-transform-css',
    },
    transformIgnorePatterns: [`/node_modules/`],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
}
