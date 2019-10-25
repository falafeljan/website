import styled, {css} from 'styled-components'

export default styled.main`
  max-width: 498px;

  ${props =>
    props.fill &&
    css`
      flex-shrink: 0;
      flex-grow: 1;
    `}

  @media (min-width: 671px) {
    max-width: 600px;
  }
`
