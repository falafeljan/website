// @flow
import html from 'choo/html'
import main from '../components/main'

export default main(
  () => html`
    <div>
      <p>
        Publisher responsible for content (Art. 5 of the Telemediengesetz):
      </p>

      <p>
        Jan Kaßel<br />
        Kohlgartenstr. 67<br />
        04315 Leipzig
      </p>

      <p>
        <a href="mailto:hello@kassel.works">hello@kassel.works</a>
      </p>
    </div>
  `,
  {
    title: 'Legal',
  },
)
