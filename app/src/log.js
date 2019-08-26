// @flow
import type {State, EmissionHandler} from './view'

const endpoint =
  process.env.NODE_ENV === 'production'
    ? '/api/log'
    : 'http://localhost:3001/log'

export default function meta(state: State, emitter: EmissionHandler) {
  state.log = {
    fetching: false,
    fetchedAll: false,
    entries: null,
    error: null,
  }

  emitter.on('fetch-log', async id => {
    try {
      state.log.fetching = true
      state.log.error = null

      const res = await window.fetch(id ? `${endpoint}?id=${id}` : endpoint)
      const data = await res.json()

      state.log.fetchedAll =
        !state.log.fetchedAll && !id ? true : state.log.fetchedAll
      state.log.entries = id
        ? Array.isArray(state.log.entries)
          ? state.log.entries.append(data)
          : [data]
        : data

      emitter.emit('render')
    } catch (err) {
      state.log.error = err
      emitter.emit('error', err)
    } finally {
      state.log.fetching = false
    }
  })
}
