// @flow
import html from 'choo/html'
import marked from 'marked'
import main from '../components/main'
import page from '../pages/mediating-hafiz.md'
import '../layout/scheherazade/index.css'

export default main(
  () => {
    const content = html`
      <div></div>
    `
    content.innerHTML = marked(page)
    return content
  },
  {
    title: 'Mediating Hafiz',
  },
)
