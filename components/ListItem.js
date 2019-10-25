import React from 'react'
import styled from 'styled-components'
import Anchor from './Anchor'

const Item = styled.li`
  margin-bottom: 10px;

  font-size: inherit;
  line-height: 140%;

  @media (max-width: 450px) {
    ${Anchor} {
      word-break: break-all;
    }
  }
`

export default function ListItem({children}) {
  return <Item>{children}</Item>
}
