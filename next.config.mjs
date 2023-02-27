import withFonts from 'next-fonts'
import createMDX from '@next/mdx'

import gfm from 'remark-gfm'
import smartypants from 'remark-smartypants'
import fm from 'remark-frontmatter'
import fm_mdx from 'remark-mdx-frontmatter'

// https://nextjs.org/docs/advanced-features/using-mdx
// https://github.com/remarkjs/remark-gfm#install
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gfm, smartypants, fm, [fm_mdx, {name: 'postMeta'}]],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/publications',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

export default withMDX(withFonts(nextConfig))
