import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const input = 'src/index.ts';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  typescript({
    typescript: require('typescript'),
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/umd/jujubeUI.js',
      format: 'umd',
      sourcemap: true,
      name: 'jujube-ui',
      esModule: false
    },
    plugins: [...plugins, terser()],
    external
  },
  {
    input: {
      index: 'src/index.ts',
      theme: 'src/theme/index.ts'
    },
    output: [
      {
        dir: 'dist/esm',
        format: 'esm'
      }, {
        dir: 'dist/cjs',
        format: 'cjs'
      }
    ],
    plugins,
    external
  },
];