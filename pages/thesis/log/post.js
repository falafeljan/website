import React from 'react'
import styled from 'styled-components'
import fetchPost from '../../../lib/fetchPost'
import months from '../../../lib/months'
import {H2} from '../../../components/Heading'
import Markdown from '../../../components/Markdown'
import Title from '../../../components/Title'

const Meta = styled.div`
  margin-bottom: 25px;
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
  font-size: 60%;

  &:last-child {
    margin-right: 0;
  }
`

const PostTitle = styled(H2)`
  display: inline-block;
  margin-bottom: 5px;
`

export default function Entry({post}) {
  const postDate = new Date(post.date)

  return (
    <>
      <Title value="Thesis Log" />
      <Meta>
        <PostTitle>{post.title}</PostTitle>

        <MetaList>
          <Item>
            {months[postDate.getMonth()]} {postDate.getDate()},{' '}
            {postDate.getFullYear()}
          </Item>
          <Item>{post.body.trim().split(/\s+/).length} Words</Item>
        </MetaList>
      </Meta>

      <Markdown source={post.body} />
    </>
  )
}

Entry.getInitialProps = async ({query}) => ({
  post: await fetchPost(query.id),
})
