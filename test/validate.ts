import { test } from 'uvu';
import * as assert from 'uvu/assert';
import eslint from 'eslint';
import eslintrc from '../src/ts';

test('Load Eslint Config to Validate Syntax Rules', async () => {
  const cli = new eslint.ESLint({
    useEslintrc: false,
    baseConfig:
      eslintrc as unknown as eslint.Linter.Config<eslint.Linter.RulesRecord>,
  });

  const lint = await cli.lintFiles('./test/cases/positive.ts');

  assert.equal(lint[0].errorCount, 0);
});

test.run();
