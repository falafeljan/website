// @flow
import type {State, EmissionHandler} from './view'

const endpoint =
  process.env.NODE_ENV === 'production'
    ? '/api/log'
    : 'http://localhost:3001/log'

export default function meta(state: State, emitter: EmissionHandler) {
  state.log = {
    fetching: false,
    entries: null,
    error: null,
  }

  emitter.on('fetch-log', async () => {
    try {
      state.log.fetching = true
      state.log.error = null

      const res = await window.fetch(endpoint)
      const data = await res.json()

      state.log.entries = data
      emitter.emit('render')
    } catch (err) {
      state.log.error = err
      emitter.emit('error', err)
    } finally {
      state.log.fetching = false
    }
  })
}
