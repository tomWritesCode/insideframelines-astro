import { defineConfig } from 'astro-imagetools/config'

export default defineConfig({
  layout: 'constrained',
  placeholder: 'blurred',
  loading: 'lazy',
})
