// @flow
import html from 'choo/html'
import main from '../components/main'

export default main(
  () => html`
    <div>
      <p>
        The Master's thesis I conduct at ${' '}<a
          href="https://www.uni-leipzig.de/"
          target="_blank"
          rel="noopener noreferer"
          >Leipzig University</a
        >
        in 2019 concerns the general idea of establishing peer-to-peer (P2P)
        workflows in Digital Humanities research. Validity, versioning, privacy,
        and collaboration are just several prospects of well-designed P2P
        networks, all of which can be favourable for the Digital Humanities: A
        young, fast-paced, and inherently digital field.
      </p>

      <p>
        In particular, the peer-oriented distribution of annotations in ${' '}<a
          href="https://iiif.io/"
          target="_blank"
          rel="noopener noreferer"
          >IIIF</a
        >
        resources is considered, as well as user studies regarding the
        evaluation of emerging P2P workflows.
      </p>

      <p>More details, as well as a research log, will follow soon.</p>
    </div>
  `,
  {
    title: 'Thesis',
  },
)
