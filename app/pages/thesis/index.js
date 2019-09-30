import React from 'react'
import styled from 'styled-components'
import Link from '../../components/Link'
import Markdown from '../../components/Markdown'
import Title from '../../components/Title'
import {H2, H4} from '../../components/Heading'
import pageContent from '../../content/thesis.md'
import index from '../../log-index.json'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const PostList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const PostItem = styled.li`
  margin: 0 0 20px;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }
`

const PostMeta = styled.span`
  display: inline-block;
  margin-right: 12px;

  font-family: 'iA Writer Quattro', sans-serif;
  font-size: 60%;
`

const PostTitle = styled(H4)`
  display: inline-block;
  margin: 0;

  font-size: inherit;
  font-weight: normal;
`

function LogEntry({title, date, slug}) {
  const postDate = new Date(date)

  return (
    <Link href={`/thesis/log/${slug}`}>
      <PostMeta>
        {months[postDate.getMonth()]} {postDate.getDate()}
      </PostMeta>
      <PostTitle>{title}</PostTitle>
    </Link>
  )
}

export default function Main() {
  return (
    <>
      <Title value="Master's Thesis" />
      <Markdown source={pageContent} />

      <div className="log-overview">
        <H2>Research Log</H2>

        <PostList>
          {index.map(entry => (
            <PostItem key={entry.slug}>
              <LogEntry {...entry} />
            </PostItem>
          ))}
        </PostList>
      </div>
    </>
  )
}
