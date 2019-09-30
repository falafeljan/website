import {createGlobalStyle} from 'styled-components'
import regular from './SangBleuRepublic-Regular-WebM.woff'
import regular2 from './SangBleuRepublic-Regular-WebM.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'SangBleu Republic';
    src: url(${regular2}) format('woff2'),
      url(${regular}) format('woff');
  }
`
