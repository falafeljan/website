// @flow
import React from 'react'
import {MarkdownHeading} from './Heading'
import Link from './Link'
import ListItem from './ListItem'
import Par from './Par'
import ReactMarkdown from 'react-markdown'

const renderers = {
  link: Link,
  paragraph: Par,
  heading: MarkdownHeading,
  listItem: ListItem,
}

export default function Markdown({source}) {
  return (
    <ReactMarkdown source={source} renderers={renderers} escapeHtml={false} />
  )
}
