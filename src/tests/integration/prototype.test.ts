import { describe, it, before } from 'node:test';
import assert from 'node:assert';
// Adjust the path to reach src/index.ts from src/tests/integration/
import {
  extendStringPrototype,
  transformations,
  validations,
  analyzing,
  formatting,
} from '../../index';

describe('Global String Prototype Extension', () => {
  before(() => {
    extendStringPrototype();
  });

  const categories = [
    { name: 'Transformations', module: transformations },
    { name: 'Validations', module: validations },
    { name: 'Analyzing', module: analyzing },
    { name: 'Formatting', module: formatting },
  ];

  categories.forEach(({ name, module }) => {
    describe(`${name} module`, () => {
      Object.keys(module).forEach((fnName) => {
        it(`should have ${fnName} attached to String.prototype`, () => {
          assert.strictEqual(typeof (String.prototype as any)[fnName], 'function');
        });
      });
    });
  });

  it('should ensure methods are non-enumerable', () => {
    const str = 'test';
    const keys: string[] = [];

    // Using Object(str) to avoid the TS2407 error you encountered earlier
    for (const key in Object(str)) {
      keys.push(key);
    }

    // Verify that a common method like 'camelCase' isn't leaking into loops
    assert.strictEqual(keys.includes('camelCase'), false);
  });
});
