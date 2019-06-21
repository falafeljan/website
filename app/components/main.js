// @flow
import html from 'choo/html'
import header from './header'
import type {State, Emitter} from '../view'

type Options = {
  title?: string,
  description?: string,
}

export default function main(
  content: () => HTMLElement,
  options: Options = {},
) {
  return (state: State, emit: Emitter) => {
    emit('setMeta', options)

    return html`
      <div id="app">
        ${header(state, emit)}

        <main>
          ${content()}
        </main>
      </div>
    `
  }
}
