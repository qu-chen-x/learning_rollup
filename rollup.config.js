import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonJSPlugin from '@rollup/plugin-commonjs';
import babelPlugin from '@rollup/plugin-babel';
import typescriptPlugin from '@rollup/plugin-typescript';

const babelConfigs = require('./babel.config');

const extensions = ['.js', '.ts', '.tsx'];

function createDeclarationConfig(input, output) {
  return {
    input,
    output: {
      dir: output,
    },
    plugins: [
      typescriptPlugin({
        declaration: true,
        emitDeclarationOnly: true,
        outDir: output,
      }),
    ],
  };
}

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

export default [
  createDeclarationConfig('src/index.ts', 'dist'),
  createUMDConfig('src/index.ts', 'dist/umd/index.js'),
];
