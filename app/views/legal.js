// @flow
import html from 'choo/html'
import header from '../components/header'
import footer from '../components/footer'
import type {State, Emitter} from '../view'

export default function legalView(state: State, emit: Emitter) {
  emit('setMeta', {
    title: 'Legal',
  })

  return html`
    <div>
      ${header(state.meta)}

      <p>
        Publisher responsible for content (information pursuant to Art. 5 of the
        German Broadcast Media Act (Telemediengesetz/TMG)):
      </p>

      ${footer()}
    </div>
  `
}
