// Post-build step: render <App /> to static HTML and inject it into dist/index.html.
// The client bundle still mounts with createRoot, so the live design is unchanged.
import { build } from 'vite';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const out = path.resolve('dist-ssr');
await build({ build: { ssr: 'src/entry-server.tsx', outDir: out, emptyOutDir: true, rollupOptions: { output: { entryFileNames: 'entry-server.mjs', format: 'es' } } }, logLevel: 'warn' });
const { render } = await import(pathToFileURL(path.join(out, 'entry-server.mjs')).href);
const html = render();
const file = path.resolve('dist/index.html');
const page = readFileSync(file, 'utf8');
if (!page.includes('<div id="root"></div>')) throw new Error('root placeholder not found');
writeFileSync(file, page.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`));
rmSync(out, { recursive: true, force: true });
console.log('prerendered', html.length, 'bytes');
