import React from 'react'
import Markdown from '../components/Markdown'
import pageContent from '../content/cv.md'
import Title from '../components/Title'

export default function Main() {
  return (
    <>
      <Title />
      <Markdown source={pageContent} />
    </>
  )
}
