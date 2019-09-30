import {createGlobalStyle} from 'styled-components'
import regular from './iAWriterQuattroS-Regular.woff'
import regular2 from './iAWriterQuattroS-Regular.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'iA Writer Quattro';
    src: url(${regular2}) format('woff2'),
      url(${regular}) format('woff');
  }
`
