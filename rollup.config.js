import typescript from '@rollup/plugin-typescript';
import noderesolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const prodOpts = {
  compact: true,
  plugins: [terser()]
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/browser.js',
      name: 'CanopyUI',
      format: 'iife'
    },
    {
      file: 'build/browser.min.js',
      name: 'CanopyUI',
      format: 'iife',
      ...prodOpts
    },
    {
      file: 'build/index.js',
      format: 'cjs'
    },
    {
      file: 'build/index.min.js',
      format: 'cjs',
      ...prodOpts
    }
  ],
  plugins: [
    typescript({ noEmitOnError: true }),
    noderesolve()
  ]
};
