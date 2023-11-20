import { build } from './build.js'

build({
  platform: 'node',
  entryPoints: ['game/src/server/index.ts'],
  outfile: 'game/dist/server.js',
  // external: ['@stuyk/ezmongodb', 'dotenv', 'axios', 'alt:vchat'],
})
