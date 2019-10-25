import styled from 'styled-components'

const List = styled.ul`
  padding-left: 25px;

  @media screen and (min-width: 450px) and (max-width: 670px) {
    padding-left: 30px;
  }

  @media screen and (min-width: 671px) {
    padding-left: 40px;
  }
`

export default List
