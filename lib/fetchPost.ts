import index from '../log-index.json'

export default async function fetchPost(slug: string) {
  const post = index.find((post) => post.slug === slug)
  if (!post) {
    throw new Error(`Could not find post with slug \`${slug}\`.`)
  }

  const {default: Post, postMeta: meta} = await import(`../blog/${post.id}.md`)
  return {Post, meta}
}
