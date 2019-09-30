import styled, {css} from 'styled-components'

export default styled.main`
  max-width: 420px;

  ${props =>
    props.fill &&
    css`
      flex-shrink: 0;
      flex-grow: 1;
    `}

  @media (min-width: 621px) {
    max-width: 550px;
  }
`
