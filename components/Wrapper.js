import styled, {css} from 'styled-components'
import {largeWidth} from '../layout/grid'

export default styled.main`
  max-width: 498px;

  ${props =>
    props.fill &&
    css`
      flex-shrink: 0;
      flex-grow: 1;
    `}

  @media (min-width: ${largeWidth + 1}px) {
    max-width: 600px;
  }
`
