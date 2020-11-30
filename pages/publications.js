import React from 'react'
import Markdown from '../components/Markdown'
import Title from '../components/Title'
import pageContent from '../content/publications.md'

export default function Publications() {
  return (
    <>
      <Title value="Publications" />
      <Markdown source={pageContent} />
    </>
  )
}
