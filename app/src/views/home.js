// @flow
import html from 'choo/html'
import main from '../components/main'

export default main(
  () => html`
    <div>
      <p>
        I currently pursue a Master’s degree in Computer Science at ${' '}<a
          href="https://www.uni-leipzig.de/"
          rel="noopener noreferrer"
          >Leipzig University</a
        >, Germany, where I'm conducting research on peer-to-peer data workflows
        for fellow scholars during <a href="/thesis">my Master's thesis</a>.
      </p>
      <p>
        Prior to that, I’ve been an intern at ${' '}<a
          href="https://www.colony.io/"
          rel="noopener noreferrer"
          >Colony</a
        >, working on integrating distributed systems with Ethereum smart
        contracts, as well as at ${' '}<a
          href="https://www.miele.de/"
          rel="noopener noreferrer"
          >Miele</a
        >, researching about Artificial Intelligence applications in the Smart
        Home context.
      </p>
      <p>
        I did my undergrad at ${' '}<a
          href="https://www.rwth-aachen.de/"
          rel="noopener noreferrer"
          >RWTH Aachen University</a
        >, where I focused on human-computer interaction during ${' '}<a
          href="https://hci.rwth-aachen.de/kassel"
          rel="noopener noreferrer"
          >my Bachelor's thesis</a
        >
        at the ${' '}<a
          href="https://hci.rwth-aachen.de/"
          rel="noopener noreferrer"
          >Media Computing Group</a
        >.
      </p>
      <p>
        My interest lies in distributed systems that ensure privacy, usability,
        and autonomy in environments such as arts, society, and academic
        research. If you want to collaborate, please don't hesitate to reach
        out!
      </p>
      <p>
        <a href="mailto:hello@kassel.works">hello@kassel.works</a>
        <a id="pgp" href="pgp.asc" download>(PGP)</a>
      </p>
    </div>
  `,
)
