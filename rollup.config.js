import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import del from "rollup-plugin-delete";
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    del({ targets: ["dist/*"] }),
    external(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
  ]
}
