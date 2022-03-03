const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })
    return config
  },
  webpackDevMiddleware: (config) => {
    return config
  }
}

module.exports = withPlugins([optimizedImages])
