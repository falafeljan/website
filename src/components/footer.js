// @flow
import html from 'choo/html'

const items = [['Home', '/'], ['Legal', '/legal']]

export default function footer(route: string) {
  return html`
    <footer class="wrapper">
      <nav role="navigation">
        <ul>
        ${items.map(
          ([label, to]) => html`
          <li>
            <a href=${to} class=${to === route && 'active'}>
              ${label}
            </a>
          </li>
        `,
        )}
        </ul>
      </nav>
    </footer>
  `
}
