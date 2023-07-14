This repo is using `rollup` and `@rollup/plugin-typescript` for building

`tsconfig.json/compilerOptions` does NOT include `"declarations": true`.
`rollup.config.js/plugins.typescript` does include `"declarations": true`

The error is silenced in the workspace.

I get the following error during compilation:
> (!) Plugin typescript: @rollup/plugin-typescript TS2742: The inferred type of 
'Foo' cannot be named without a reference to '../node_modules/@effect/data/Equal.js'. This is likely not portable. A type annotation is necessary.

No `.d.ts` file is emitted.

adding `"types": [ "@effect/data/Equal" ]` to the rollup config has no effect.