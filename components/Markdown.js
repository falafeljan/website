// @flow
import React from 'react'
import {MarkdownHeading} from './Heading'
import Link from './Link'
import ListItem from './ListItem'
import Par from './Par'
import ReactMarkdown from 'react-markdown'
import useSmartypants from '../effects/useSmartypants'

const renderers = {
  link: Link,
  paragraph: Par,
  heading: MarkdownHeading,
  listItem: ListItem,
}

export default function Markdown({source}) {
  const body = useSmartypants(source)

  return (
    <ReactMarkdown source={body} renderers={renderers} escapeHtml={false} />
  )
}
