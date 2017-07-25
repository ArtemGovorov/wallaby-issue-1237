/* eslint strict:off, global-require:off */

'use strict';

module.exports = wallaby => {
    return {
        files: [
            {
                pattern: 'src/**/__sandbox__/**/*',
                instrument: false,
                load: true,
                ignore: false,
            },
            'src/**/*.js',
            'jest.config.js',
            'src/**/*.snap',
            '!src/**/*.test.js',
        ],

        tests: ['src/**/*.test.js'],

        compilers: {
            '**/*.js': wallaby.compilers.babel(),
        },

        env: {
            type: 'node',
            runner: 'node',
        },

        testFramework: 'jest',

        setup: w => {
            process.env.NODE_ENV = 'test';
            const jestConfig = require('./jest.config');
            w.testFramework.configure(jestConfig);
        },
    };
};
