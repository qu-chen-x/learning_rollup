import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import commonJSPlugin from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'myLibrary',
  },
  plugins: [nodeResolvePlugin(), commonJSPlugin()],
};
