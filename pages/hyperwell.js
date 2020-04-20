import React from 'react'
import styled from 'styled-components'
import Link from '../components/Link'
import Markdown from '../components/Markdown'
import Title from '../components/Title'
import {H2, H4} from '../components/Heading'
import pageContent from '../content/hyperwell.md'
import index from '../log-index.json'
import {largeWidth} from '../layout/grid'

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
  margin: 0 0 10px;
  padding: 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${largeWidth + 1}px) {
    margin-bottom: 20px;
  }
`

const Post = styled.div`
  display: flex;
  flex-flow: row;
`

const PostDate = styled.time`
  flex-shrink: 0;
  display: inline-block;
  margin: 7px 12px 3px 0;

  font-family: 'iA Writer Quattro', sans-serif;
  font-size: 60%;
`

const PostTitle = styled(H4)`
  display: inline-block;
  flex-grow: 1;
  margin: 0;

  font-size: inherit;
  font-weight: normal;
`

function LogEntry({title, date, slug}) {
  const postDate = new Date(date)

  return (
    <article itemScope itemType="https://schema.org/BlogPosting">
      <Link
        href={`/blog/post?slug=${slug}`}
        as={`/blog/${slug}`}
        itemProp="url"
      >
        <Post>
          <PostDate datetime={postDate.toISOString()} itemProp="datePublished">
            {months[postDate.getMonth()]} {postDate.getDate()}
          </PostDate>
          <PostTitle itemProp="headline">{title}</PostTitle>
        </Post>
      </Link>
    </article>
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
