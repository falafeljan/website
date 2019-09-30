import {createGlobalStyle} from 'styled-components'
import regular from './scheherazade-regular.woff'
import bold from './scheherazade-bold.woff'

export default createGlobalStyle`
  @font-face {
    font-family: Scheherazade;
    src: ${regular};
  }
  
  @font-face {
    font-family: Scheherazade;
    font-weight: bold;
    src: ${bold};
  }
  
  .farsi {
    direction: rtl;
    text-align: right;
    font-family: Scheherazade;
    font-weight: bold;
  }
`
