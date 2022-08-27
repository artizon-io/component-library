import dts from "rollup-plugin-dts";
import multi from '@rollup/plugin-multi-entry';

export default {
  input: [
    'types/**/*.d.ts',
  ],
  output: {
    file: 'types/index.d.ts',
  },
  plugins: [
    dts(),
    multi()
  ]
}; 