import path from 'path';
import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonJSPlugin from '@rollup/plugin-commonjs';
import babelPlugin from '@rollup/plugin-babel';
import typescriptPlugin from '@rollup/plugin-typescript';
import esbuildPlugin from 'rollup-plugin-esbuild';

const babelConfigs = require('./babel.config');

const extensions = ['.js', '.ts', '.tsx'];

function external(id) {
  return false;
}

function createDeclarationConfig(input, output) {
  return {
    input,
    output: {
      dir: output,
    },
    external,
    plugins: [
      nodeResolvePlugin({ extensions }),
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
    external,
    plugins: [
      nodeResolvePlugin({ extensions }),
      commonJSPlugin(),
      babelPlugin({ ...babelConfigs, extensions, babelHelpers: 'bundled' }),
    ],
  };
}

function createESMConfig(input, output) {
  return {
    input,
    output: [
      { file: `${output}.js`, format: 'esm' },
      { file: `${output}.mjs`, format: 'esm' },
    ],
    external,
    plugins: [
      nodeResolvePlugin({ extensions }),
      esbuildPlugin({
        minify: false,
        tsconfig: path.resolve('./tsconfig.json'),
      }),
    ],
  };
}

export default [
  createDeclarationConfig('src/index.ts', 'dist'),
  createUMDConfig('src/index.ts', 'dist/umd/index.js'),
  createESMConfig('src/index.ts', 'dist/esm/index'),
];
