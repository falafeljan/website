// @flow
import React from 'react'
import Code from './Code'
import {MarkdownHeading} from './Heading'
import Link from './Link'
import ListItem from './ListItem'
import Par from './Par'
import ReactMarkdown from 'react-markdown'
import useSmartypants from '../effects/useSmartypants'
import List from './List'

const renderers = {
  inlineCode: Code,
  heading: MarkdownHeading,
  link: Link,
  list: List,
  listItem: ListItem,
  paragraph: Par,
}

export default function Markdown({source}) {
  const body = useSmartypants(source)

  return (
    <ReactMarkdown source={body} renderers={renderers} escapeHtml={false} />
  )
}
