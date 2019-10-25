import styled from 'styled-components'
import {largeWidth, mediumWidth} from '../layout/grid'

const List = styled.ul`
  padding-left: 25px;

  @media screen and (min-width: ${mediumWidth +
      1}px) and (max-width: ${largeWidth}px) {
    padding-left: 30px;
  }

  @media screen and (min-width: ${largeWidth + 1}px) {
    padding-left: 40px;
  }
`

export default List
