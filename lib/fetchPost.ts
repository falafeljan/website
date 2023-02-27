import path from 'path'
import fs from 'fs/promises'
import fm from 'front-matter'
import index from '../log-index.json'

type Meta = {
  title: string
  date: Date
  location?: string
}

export default async function fetchPost(slug: string): Promise<{
  body: string
  meta: Meta
}> {
  const post = index.find((post) => post.slug === slug)
  if (!post) {
    throw new Error(`Could not find post with slug \`${slug}\`.`)
  }

  const base = path.join(process.cwd(), 'blog')
  const {body, attributes} = fm(
    await fs.readFile(`${base}/${post.id}.md`, 'utf8'),
  )
  return {body, meta: attributes as Meta}
}
