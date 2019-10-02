const withFonts = require('next-fonts')

module.exports = withFonts({
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
  poweredByHeader: false,
})
