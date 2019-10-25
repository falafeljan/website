import React from 'react'
import styled from 'styled-components'
import fetchPost from '../../lib/fetchPost'
import months from '../../lib/months'
import {H2} from '../../components/Heading'
import Markdown from '../../components/Markdown'
import Title from '../../components/Title'
import useDate from '../../effects/useDate'
import {mediumWidth, largeWidth} from '../../layout/grid'

const Meta = styled.div`
  margin-bottom: 37px;
`

const MetaList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  display: inline-block;
  margin-right: 17px;

  font-family: 'iA Writer Quattro', sans-serif;
  font-size: 75%;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: ${mediumWidth +
      1}px) and (max-width: ${largeWidth}px) {
    font-size: 70%;
  }

  @media screen and (min-width: ${largeWidth + 1}px) {
    font-size: 65%;
  }
`

const PostTitle = styled(H2)`
  display: inline-block;
  margin-bottom: 5px;
`

export default function Entry({post}) {
  const postDate = useDate(post.date)

  return (
    <>
      <Title
        value={`Research Log ⌁ ${post.title}`}
        shortened="Research Log"
        noPrefix
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <Meta>
          <PostTitle itemprop="headline">{post.title}</PostTitle>

          <MetaList>
            <Item>
              <time itemProp="datePublished" dateTime={postDate.toISOString()}>
                {months[postDate.getMonth()]} {postDate.getDate()},{' '}
                {postDate.getFullYear()}
              </time>
            </Item>
            <Item>{post.body.trim().split(/\s+/).length} Words</Item>
          </MetaList>
        </Meta>

        <Markdown source={post.body} />
      </article>
    </>
  )
}

Entry.getInitialProps = async ({query}) => ({
  post: await fetchPost(query.slug, true),
})
