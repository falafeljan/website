import React from 'react'
import {createGlobalStyle} from 'styled-components'
import SangBleu from './sang-bleu'
import Quattro from './ia-writer-quattro'
import Mono from './ia-writer-mono'

export default () => (
  <>
    <SangBleu />
    <Quattro />
    <Mono />

    <GlobalStyle />
  </>
)

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
  
    font: 16px/100% 'SangBleu Republic', 'Times New Roman', times, serif;
  }
  
  @media screen and (min-width: 450px) and (max-width: 670px) {
    body {
    font-size: 20px;
    }
  }
  
  @media screen and (min-width: 671px) {
    body {
      font-size: 24px;
      padding: 35px;
    }
  }
`
