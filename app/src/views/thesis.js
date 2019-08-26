import html from 'choo/html'
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

function logOverview(entries) {
  return html`
    <div class="log-overview">
      <h3>Research Log</h3>

      <ul>
        ${entries.map(entry => logEntry(entry))}
      </ul>
    </div>
  `
}

function logEntry({meta}) {
  const date = new Date(Date.parse(meta.date))

  return html`
    <li>
      <a href="/thesis/log/${meta.slug}">
        <span>${months[date.getMonth()]} ${date.getDate()}</span>
        <h4>${meta.title}</h4>
      </a>
    </li>
  `
}

export default main(
  ({log}, emit) => {
    if (!Array.isArray(log.entries) || !log.fetchedAll) {
      emit('fetch-log')
    }

    return html`
      <div>
        <p>
          The Master's thesis I conduct at ${' '}<a
            href="https://www.uni-leipzig.de/"
            target="_blank"
            rel="noopener noreferer"
            >Leipzig University</a
          >
          in 2019 concerns the general idea of establishing peer-to-peer (P2P)
          workflows in Digital Humanities research. Validity, versioning,
          privacy, and collaboration are just several prospects of well-designed
          P2P networks, all of which can be favourable for the Digital
          Humanities: A young, fast-paced, and inherently digital field (<a
            href="https://www.taylorfrancis.com/books/e/9781315572659/chapters/10.4324/9781315572659-10"
            target="_blank"
            rel="noopener noreferer"
            >Hunyadi, 2016</a
          >).
        </p>

        <p>
          In particular, the peer-oriented distribution of annotations in
          ${' '}<a
            href="https://iiif.io/"
            target="_blank"
            rel="noopener noreferer"
            >IIIF</a
          >
          resources is considered. The Dat Foundation offers a flexible
          hypermedia protocol (<a
            href="https://www.nature.com/articles/sdata2018221.pdf"
            target="_blank"
            rel="noopener noreferer"
            >Robinson et al., 2018</a
          >), built upon${' '}<a
            href="https://github.com/mafintosh/hypercore"
            target="_blank"
            rel="noopener noreferer"
            >hypercore</a
          >, a distributed append-only log (<a
            href="https://github.com/datprotocol/whitepaper/blob/master/dat-paper.pdf"
            target="_blank"
            rel="noopener noreferer"
            >Ogden et al., 2017</a
          >), which will be utilized to built a preliminary prototype
          implementation.
        </p>

        <p>
          To evaluate the prospects of emerging P2P workflows, we will conduct
          user studies and interviews with scholars in the Digital Humanities.
        </p>

        ${!log.fetching && Array.isArray(log.entries)
          ? logOverview(log.entries)
          : null}
      </div>
    `
  },
  {
    title: 'Thesis',
  },
)
