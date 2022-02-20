import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  roots: ['<rootDir>/src/'],
  setupFiles: ['dotenv/config'], // required by jest to load dotenv config
  moduleNameMapper: {
    // TODO any other modules need to be mapped? And get the short path names compiling as not currently successful.
    '^Actions(.*)$': '<rootDir>/src/Actions/$1',
    '^Configs(.*)$': '<rootDir>/src/Configs/$1',
    '^Entities(.*)$': '<rootDir>/src/Entities/$1',
    '^Resolvers(.*)$': '<rootDir>/src/Resolvers/$1',
    '^Repositories(.*)$': '<rootDir>/src/Repositories/$1'
  }
};

export default config;
