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
  code: Code,
  h1: MarkdownHeading,
  a: Link,
  ul: List,
  li: ListItem,
  p: Par,
}

export default function Markdown({source}) {
  const body = useSmartypants(source)
  return <ReactMarkdown children={body} components={renderers} />
}
