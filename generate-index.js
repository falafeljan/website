const {promises: fs} = require('fs')
const path = require('path')
const fm = require('front-matter')

async function main() {
  const logPath = `${__dirname}/blog`

  const posts = []
  const files = (await fs.readdir(logPath, {withFileTypes: true})).filter(
    file =>
      file.isFile() &&
      !file.name.startsWith('.') &&
      path.extname(file.name) === '.md',
  )

  for (const file of files) {
    const text = await fs.readFile(path.join(logPath, file.name), 'utf-8')
    const post = fm(text)
    const id = path.basename(file.name, '.md')
    const slug = id.substr(id.indexOf('_') + 1)

    posts.push({
      ...post.attributes,
      id,
      slug,
    })
  }

  const sortedPosts = posts.sort((a, b) => a.date - b.date)
  await fs.writeFile(`${__dirname}/blog-index.json`, JSON.stringify(sortedPosts))
}

main()
