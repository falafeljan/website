import {createGlobalStyle} from 'styled-components'
import regular from './iAWriterMonoS-Regular.woff'
import regular2 from './iAWriterMonoS-Regular.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'iA Writer Mono';
    src: url(${regular2}) format('woff2'),
      url(${regular}) format('woff');
  }
`
