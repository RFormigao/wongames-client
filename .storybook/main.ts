import path from 'path'

const config = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {},

  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src')
      }
    }
    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config
