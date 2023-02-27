import withFonts from 'next-fonts'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

// https://nextjs.org/docs/advanced-features/using-mdx
// https://github.com/remarkjs/remark-gfm#install
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

export default withMDX(withFonts(nextConfig))
