import React from 'react'
import styled from 'styled-components'
import Anchor from './Anchor'

const Item = styled.li`
  font-size: 18px;
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
