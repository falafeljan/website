import fm from 'front-matter'
import smartypants from 'smartypants'

export default async function fetchPost(slug) {
  const post = (await import(`../content/log/${slug}.md`)).default
  const {attributes, body} = fm(post)

  return {
    body: smartypants(body, 2),
    title: attributes.title,
    date: attributes.date,
  }
}
