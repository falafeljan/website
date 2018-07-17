// @flow
import React from 'react'
import styled from 'styled-components'
import {emailAddress} from '../args'

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
`

const Par = styled.p`
  margin: 0px 0px 20px 0px;
  line-height: 140%;
`

export default function App() {
  return (
    <Container>
      <main>
        <Par>Jan Kaßel</Par>

        <Par>
          I currently pursue a master’s degree in Computer Science at Leipzig
          University, Germany.
        </Par>

        <Par>
          My interest lies in digital applications that affect design, society,
          and research — I strive for artistic simplicity in complex systems
          while pursueing empowerment of the individual.
        </Par>
      </main>

      <nav role="navigation">
        <a href={`mailto:${emailAddress}`}>Contact</a>
      </nav>
    </Container>
  )
}
