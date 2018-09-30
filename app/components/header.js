// @flow
import html from 'choo/html'
import type {State, Emitter} from '../view'

export default function header({meta, route, title}: State, emit: Emitter) {
  if (title !== meta.title) {
    emit('DOMTitleChange', meta.title || 'Jan Kaßel')
  }

  return html`
    <header>
      <h1>
        <a href="/" class=${route === '/' && 'active'}>Jan Kaßel</a>
        ${meta.title && ` — ${meta.title}`}
      </h1>
    </header>
  `
}
