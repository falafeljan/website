// @flow
import 'normalize.css'
import './layout/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const container = document.getElementById('app')

if (container) {
  ReactDOM.render(<App />, container)
}
