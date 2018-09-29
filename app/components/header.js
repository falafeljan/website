// @flow
import html from 'choo/html'
import type {MetaState} from '../view'

export default function header({title, description}: MetaState) {
  return html`
    <h1>
      <a href="/">Jan Kaßel</a>${title && ` — ${title}`}</h1>
  `
}
