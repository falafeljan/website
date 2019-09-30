import React from 'react'
import {createGlobalStyle} from 'styled-components'
import SangBleu from './sang-bleu'
import Quattro from './ia-writer-quattro'

export default () => (
  <>
    <SangBleu />
    <Quattro />
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
    padding: 35px;
  
    font: 24px/100% 'SangBleu Republic', 'Times New Roman', times, serif;
  }
  
  @media screen and (max-width: 620px) {
    body {
      font-size: 20px;
      padding: 15px;
    }
  }
`
