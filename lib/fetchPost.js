import fm from 'front-matter'

export default async function fetchPost(slug) {
  const post = (await import(`../content/log/${slug}.md`)).default
  const {attributes, body} = fm(post)

  return {
    body,
    title: attributes.title,
    date: attributes.date,
  }
}
