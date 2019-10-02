import {createGlobalStyle} from 'styled-components'
import regular from './SangBleuRepublic-Regular-WebM.woff'
import regular2 from './SangBleuRepublic-Regular-WebM.woff2'
import italic from './SangBleuRepublic-RegularItalic-WebM.woff'
import italic2 from './SangBleuRepublic-RegularItalic-WebM.woff2'
import bold from './SangBleuRepublic-Bold-WebM.woff'
import bold2 from './SangBleuRepublic-Bold-WebM.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'SangBleu Republic';
    src: url(${regular2}) format('woff2'),
      url(${regular}) format('woff');
  }
  
  @font-face {
    font-family: 'SangBleu Republic';
    font-style: italic;
    src: url(${italic2}) format('woff2'),
      url(${italic}) format('woff');
  }
  
  @font-face {
    font-family: 'SangBleu Republic';
    font-weight: bold;
    src: url(${bold2}) format('woff2'),
      url(${bold}) format('woff');
  }
`
