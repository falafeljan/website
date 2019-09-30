import React from 'react'
import styled from 'styled-components'
import Anchor from '../components/Anchor'
import Markdown from '../components/Markdown'
import Par from '../components/Par'
import pageContent from '../content/cv.md'
import Title from '../components/Title'

const PgpAnchor = styled(Anchor)`
  display: inline-block;
  margin: 2px 10px;
  font: 16px/100% 'iA Writer Quattro', monospace;

  @media (min-width: 621px) {
    font-size: 20px;
    line-height: 100%;
  }
`

export default function Main() {
  return (
    <>
      <Title />
      <Markdown source={pageContent} />

      <Par>
        <Anchor href="mailto:hello@kassel.works">hello@kassel.works</Anchor>
        <PgpAnchor href="/static/pgp.asc" download>
          (PGP)
        </PgpAnchor>
      </Par>
    </>
  )
}
