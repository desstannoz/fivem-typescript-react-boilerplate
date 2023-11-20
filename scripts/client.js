import { build } from './build.js'

build({
  entryPoints: ['game/src/client/index.ts'],
  outfile: 'game/dist/client.js',
})
