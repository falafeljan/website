// @flow
import type {State, EmissionHandler} from './view'

type Payload = {
  title?: string,
  description?: string,
}

export default function meta(state: State, emitter: EmissionHandler) {
  state.meta = {
    title: '',
    description: '',
  }

  emitter.on('setMeta', ({title, description}: Payload = {}) => {
    state.meta = {
      title: title === '' ? null : title,
      description: description === '' ? null : description,
    }
  })
}
