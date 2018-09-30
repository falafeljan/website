// @flow
import html from 'choo/html'
import main from '../components/main'

export default main(
  () => html`
    <p>404! That should not happen.</p>
  `,
  {
    title: 'Not Found',
  },
)
