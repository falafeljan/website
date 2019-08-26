import html from 'choo/html'
import marked from 'marked'
import main from '../components/main'
import '../layout/log.css'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const getEntry = (entries, id) =>
  Array.isArray(entries) && entries.find(entry => entry.meta.slug === id)

export default main(
  ({log, params}, emit) => {
    const entry = getEntry(log.entries, params.id)
    if (!Array.isArray(log.entries) && !entry) {
      emit('fetch-log', params.id)
    } else if (Array.isArray(log.entries) && !entry) {
      // not found
    }

    const body = html`
      <div></div>
    `

    if (entry) {
      body.innerHTML = marked(entry.content)
    } else {
      body.innerHTML = html`
        <p>Not Found.</p>
      `
    }

    return body
  },
  {
    title: 'Log Entry',
  },
)
