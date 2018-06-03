// @flow
import React from 'react'
import {emailAddress} from '../args'

export default function App() {
  return (
    <main>
      <p>
        Jan Kaßel is a computer science graduate student at Leipzig University,
        Germany.
      </p>
      <nav role="navigation">
        <a href={`mailto:${emailAddress}`} className="contact">
          <em>Contact</em>
        </a>

        <a href="https://github.com/fallafeljan" className="github">
          GitHub
        </a>
      </nav>
    </main>
  )
}
