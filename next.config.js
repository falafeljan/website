const withFonts = require('next-fonts')
const filterByKeys = require('./lib/filterByKeys')
const index = require('./log-index.json')

module.exports = withFonts({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },

  poweredByHeader: false,
  exportPathMap: async function(defaultPathMap) {
    const postPaths = index.reduce(
      (paths, post) => ({
        ...paths,
        [`/thesis/log/${post.slug}`]: {
          page: '/thesis/log/post',
          query: {
            slug: post.slug,
          },
        },
      }),
      {},
    )

    return {
      ...filterByKeys(defaultPathMap, ['/thesis/log/post']),
      ...postPaths,
    }
  },
})
