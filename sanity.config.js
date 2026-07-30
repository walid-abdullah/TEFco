import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'
import { structure } from './src/sanity/structure'
import { CustomLogo } from './src/sanity/components/CustomLogo'

export default defineConfig({
  name: 'default',
  title: 'Editly Foundry CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin',

  studio: {
    components: {
      logo: CustomLogo,
    },
  },

  plugins: [structureTool({ structure })],

  schema: {
    types: schemaTypes,
  },
})
