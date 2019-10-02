import fm from 'front-matter'
import smartypants from 'smartypants'
import React, {useEffect} from 'react'
import styled from 'styled-components'
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
  margin-bottom: 5px;
`

export default function Entry({content, title, date}) {
  const postDate = new Date(date)

  return (
    <>
      <Title value="Thesis Log" />
      <Meta>
        <PostTitle>{title}</PostTitle>

        <MetaList>
          <Item>
            {months[postDate.getMonth()]} {postDate.getDate()},{' '}
            {postDate.getFullYear()}
          </Item>
          <Item>{content.trim().split(/\s+/).length} Words</Item>
        </MetaList>
      </Meta>

      <Markdown source={content} />
    </>
  )
}

Entry.getInitialProps = async ({query}) => {
  try {
    const post = (await import(`../../../content/log/${query.id}.md`)).default
    const {attributes, body} = fm(post)

    return {
      content: smartypants(body, 2),
      title: attributes.title,
      date: attributes.date,
    }
  } catch (err) {
    return {}
  }
}

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
