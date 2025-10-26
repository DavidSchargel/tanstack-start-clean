//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  {
    ignores: ['*.config.js', 'src/routeTree.gen.ts'],
  },
  ...tanstackConfig,
]
