import { build } from "esbuild";
import alias from "esbuild-plugin-alias"

build({
    entryPoints: ['src/test/game-runner.ts'],
    bundle: true,
    platform: 'node',
    target: 'node22',
    outfile: 'dist/test/game-runner.js',
    sourcemap: true,
    format: 'esm',
    plugins: [
        alias({
            $lib: './src/lib',
        }),
    ],
    external: [],
}).catch(() => process.exit(1));
