import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonJSPlugin from '@rollup/plugin-commonjs';
import babelPlugin from '@rollup/plugin-babel';

const babelConfigs = require('./babel.config');

const extensions = ['.js', '.ts', '.tsx'];

function createUMDConfig(input, output) {
  return {
    input,
    output: {
      file: output,
      format: 'umd',
      name: 'myLibrary',
    },
    plugins: [
      nodeResolvePlugin(),
      commonJSPlugin(),
      babelPlugin({ ...babelConfigs, extensions, babelHelpers: 'bundled' }),
    ],
  };
}

export default [createUMDConfig('src/index.ts', 'dist/umd/index.js')];
