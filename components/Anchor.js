import styled, {css} from 'styled-components'

export default styled.a`
  color: ${({active}) => (active ? 'inherit' : 'rgb(55, 41, 158)')};
  cursor: ${({active}) => (active ? 'default' : 'pointer')};
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.19, 1, 0.22, 1);

  ${({active}) =>
    !active &&
    css`
      &:hover {
        color: rgba(55, 41, 158, 0.75);
      }
    `}
`
