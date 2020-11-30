import React from 'react'
import Anchor from '../components/Anchor'
import Markdown from '../components/Markdown'
import Par from '../components/Par'
import pageContent from '../content/cv.md'
import Title from '../components/Title'

export default function Main() {
  return (
    <>
      <Title />
      <Markdown source={pageContent} />

      <Par>
        <Anchor href="mailto:hello@kassel.works">hello@kassel.works</Anchor>
      </Par>
    </>
  )
}
