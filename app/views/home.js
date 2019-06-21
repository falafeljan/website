// @flow
import html from 'choo/html'
import main from '../components/main'

export default main(
  () => html`
    <div>
      <p>
        I currently pursue my Master’s degree in Computer Science at ${' '}<a
          href="https://www.uni-leipzig.de/"
          rel="noopener noreferrer"
          >Leipzig University</a
        >, Germany, where I'm currently conducting research on peer-to-peer data
        workflows for fellow scholars.
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
        I did my undergrad at RWTH Aachen University, where I focused on
        human-computer interaction during ${' '}<a
          href="https://hci.rwth-aachen.de/kassel"
          rel="noopener noreferrer"
          >my Bachelor's thesis</a
        >
        at the Media Computing Group.
      </p>
      <p>
        My interest lies in distributed systems that ensure privacy, usability,
        and autonomy in environments such as arts, society, and academic
        research.
      </p>
      <p>
        <a href="mailto:hello@kassel.works">hello@kassel.works</a>
      </p>
    </div>
  `,
)
