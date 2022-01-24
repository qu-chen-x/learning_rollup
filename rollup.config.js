import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonJSPlugin from '@rollup/plugin-commonjs';
import babelPlugin from '@rollup/plugin-babel';

const babelConfigs = require('./babel.config');

const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'myLibrary',
  },
  plugins: [
    nodeResolvePlugin(),
    commonJSPlugin(),
    babelPlugin({ ...babelConfigs, extensions, babelHelpers: 'bundled' }),
  ],
};
