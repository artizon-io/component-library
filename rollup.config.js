import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import typescript from "@rollup/plugin-typescript"
// import postcss from 'rollup-plugin-postcss';
// import injectProcessEnv from 'rollup-plugin-inject-process-env';
// import copy from 'rollup-plugin-copy';
import multi from '@rollup/plugin-multi-entry';
import url from '@rollup/plugin-url';


export default {
  input: [
    'dist/**/*.js',
  ],
  output: {
    file: 'dist/index.js',
    // dir: 'dist',
    format: 'cjs',  // for some reason vitejs don't resolve cjs for monorepo setup
    // format: 'esm',
    name: 'uilib',
    exports: 'named',
    sourcemap: true,
  },
  // watch: {
  //   include: 'src/**'
  // },
  plugins: [
    // typescript(),
    nodeResolve(),
    commonjs(),
    multi(),
    url({
      // See
      // https://stackoverflow.com/questions/51970359/resolve-woff-imports-with-rollup
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.woff', '**/*.woff2', '**/*.webp', '**/*.jpg'],
      // setting infinite limit will ensure that the files 
      // are always bundled with the code (inline), not copied to /dist
      limit: Infinity,
      // publicPath: 'assets'
    })
  ],
  external: [
    'react',
    'react-dom'
  ],
}; 