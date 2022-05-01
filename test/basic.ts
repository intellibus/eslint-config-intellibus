import { test } from 'uvu';
import * as assert from 'uvu/assert';
import eslintrc from '../src/ts';

const isObject = (any: object) => typeof any === 'object' && any !== null;
const isString = (any: string) => typeof any === 'string' && any !== null;
const isBoolean = (any: boolean) => typeof any === 'boolean' && any !== null;

test('Eslint Config Has All Required Properties', () => {
  assert.ok(isBoolean(eslintrc.root));
  assert.ok(eslintrc.root);
  assert.ok(isString(eslintrc.parser));
  assert.ok(Array.isArray(eslintrc.plugins));
  assert.ok(Array.isArray(eslintrc.extends));
  assert.ok(isObject(eslintrc.settings));
  assert.ok(isObject(eslintrc.parserOptions));
  assert.ok(isObject(eslintrc.env));
  assert.ok(Array.isArray(eslintrc.overrides));
  assert.ok(isObject(eslintrc.rules));
});

test.run();
