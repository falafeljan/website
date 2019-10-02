import React from 'react'
import Markdown from '../components/Markdown'
import Scheherazade from '../layout/scheherazade'
import pageContent from '../content/mediating-hafiz.md'
import Title from '../components/Title'

export default function MediatingHafiz() {
  return (
    <>
      <Scheherazade />

      <Title value="Mediating Hafiz" noPrefix />
      <Markdown source={pageContent} />
    </>
  )
}
