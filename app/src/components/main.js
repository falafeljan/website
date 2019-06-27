// @flow
import html from 'choo/html'
import header from './header'
import {makeFadeIn} from '../animations'
import type {State, Emitter, ViewOptions} from '../view'

export default function main(
  content: () => HTMLElement,
  options: Options = {},
) {
  return (state: State, emit: Emitter) => {
    emit('setMeta', options)

    const body = content()
    const children = Array.from(body.childNodes)

    for (const [i, el] of children.entries()) {
      el.style.opacity = 0

      const animate = makeFadeIn({delay: 75 * i})
      animate(el, () => (el.style.opacity = 1)).play()
    }

    return html`
      <div id="app">
        ${header(state, emit)}

        <main>
          ${body}
        </main>
      </div>
    `
  }
}
