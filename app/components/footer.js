// @flow
import html from 'choo/html'

export default function footer() {
  return html`
    <footer>
      <nav role="navigation">
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/legal">
              Legal
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  `
}
