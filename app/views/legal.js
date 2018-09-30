// @flow
import html from 'choo/html'
import main from '../components/main'

export default main(
  () => html`
    <div>
      <p>
        Publisher responsible for content (information pursuant to Art. 5 of the
        German Broadcast Media Act (Telemediengesetz/TMG)):
      </p>
    </div>
  `,
  {
    title: 'Legal',
  },
)
