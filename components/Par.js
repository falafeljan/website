import styled from 'styled-components'

export default styled.p`
  line-height: 155%;
  margin: 0 0 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 621px) {
    margin: 0 0 25px;
  }
`
