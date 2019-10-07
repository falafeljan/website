import fm from 'front-matter'
import index from '../log-index.json'

export default async function fetchPost(slug) {
  const post = index.find(post => post.slug === slug)
  if (!post) {
    throw new Error(`Could not find post with slug \`${slug}\`.`)
  }

  const postContent = (await import(`../content/log/${post.id}.md`)).default
  const {attributes, body} = fm(postContent)

  return {
    body,
    title: attributes.title,
    date: attributes.date,
  }
}
