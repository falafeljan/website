import styled, {css} from 'styled-components'
import Code from './Code'
import {blue, blueHover} from '../layout/colors'

export default styled.a`
  color: ${({active}) => (active ? 'inherit' : blue)};
  cursor: ${({active}) => (active ? 'default' : 'pointer')};
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.19, 1, 0.22, 1);

  ${({active}) =>
    !active &&
    css`
      &:hover {
        color: ${blueHover};
      }
    `}

  ${Code} {
    color: ${blue};
    &:hover {
      color: ${blueHover};
    }
  }
`
