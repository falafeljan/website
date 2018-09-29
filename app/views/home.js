// @flow
import html from 'choo/html'
import header from '../components/header'
import footer from '../components/footer'
import type {State, Emitter} from '../view'

export default function home(state: State, emit: Emitter) {
  emit('setMeta', {})

  return html`
    <div class="wrapper">
      ${header(state.meta)}

      <p>
        I currently pursue my master’s degree in Computer Science at Leipzig
        University, Germany.
      </p>
      <p>
        Prior to that, I’ve been an intern at Miele, researching about
        Artificial Intelligence and Smart Home, and at RWTH Aachen University,
        where I focused on human-computer interaction during my bachelor
        studies.
        </p>
      <p>
        My interest lies in digital applications that affect arts, society, and
        research. I search for artistic simplicity in complex systems and pursue
        to empower the individual.
      </p>
      <p>
        I’m currently available for research projects as independent contractor.
      </p>

      ${footer()}
    </div>
  `
}
