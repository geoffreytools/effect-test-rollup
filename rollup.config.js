import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/index.js',
        sourcemap: true,
        format: 'es',
        exports: 'auto'
    },
    plugins: [
        typescript({
            "compilerOptions": {
                "declaration": true,
                //"types": [ "@effect/data/Equal" ]
            }
        }),
    ]
}