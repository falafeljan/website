import React from 'react'
import {createGlobalStyle} from 'styled-components'
import SangBleu from './sang-bleu'
import Quattro from './ia-writer-quattro'
import Mono from './ia-writer-mono'
import {mediumWidth, largeWidth} from './grid'

const Layout = () => (
  <>
    <SangBleu />
    <Quattro />
    <Mono />

    <GlobalStyle />
  </>
)
export default Layout

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100%;
  }
  
  body {
    display: flex;
    box-sizing: border-box;
    margin: 0;
    padding: 15px;
  
    font: 18px/100% 'SangBleu Republic', 'Times New Roman', times, serif;
  }
  
  @media screen and (min-width: ${mediumWidth +
    1}px) and (max-width: ${largeWidth}px) {
    body {
    font-size: 20px;
    }
  }
  
  @media screen and (min-width: ${largeWidth + 1}px) {
    body {
      font-size: 24px;
      padding: 35px;
    }
  }
`
