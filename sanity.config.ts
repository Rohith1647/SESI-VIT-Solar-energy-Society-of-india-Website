import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes/index'


export default defineConfig({
  name: 'default',
  title: 'SESI VIT Admin Portal',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1pr9wz7o',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
