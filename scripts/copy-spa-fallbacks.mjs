/**
 * Copy index.html into route folders so direct hits like /verify and /admin
 * work on static hosts (e.g. Render) without relying on _redirects (not supported).
 */
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const index = join(dist, 'index.html')

/** Entry paths users open directly in production */
const spaPaths = [
  'verify',
  'admin',
  'admin/dashboard',
  'admin/users',
  'admin/certificates',
  'courses',
  'about',
  'contact',
]

for (const segment of spaPaths) {
  const dir = join(dist, segment)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, 'index.html'))
}

console.log(`SPA fallbacks: copied index.html to ${spaPaths.length} paths under dist/`)
