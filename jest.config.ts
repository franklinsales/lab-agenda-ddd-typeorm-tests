// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm', // Here we are using the ESM preset for ts-jest, because we are using ESM modules in our code.
  testEnvironment: 'node', // This is the environment in which the tests will be run. We are using Node.js environment.
  roots: ['<rootDir>/src'], // Here we specify the root directory for our tests. All test files will be searched in the src directory and its subdirectories.
  extensionsToTreatAsEsm: ['.ts'], // This tells Jest to treat .ts files as ESM modules. This is important because we are using ESM syntax in our code.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // This is a module name mapper that allows us to use absolute paths in our imports. For example, we can import a module like this: import { User } from '@/modules/users/domain/entities/User';
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest',{}], // This tells Jest to use ts-jest to transform TypeScript files. The {} is an empty object that can be used to pass additional options to ts-jest if needed.
  },
};

export default config;
