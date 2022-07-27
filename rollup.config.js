import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
	{
		input: 'dist/index.js',
		output: {
			name: 'CHANGE_IT',
			file: pkg.browser,
			format: 'iife',
			sourcemap: true
		},
		plugins: [nodeResolve(), commonjs(), terser({
			output: {
				comments: false
			}
		})]
	}
];
