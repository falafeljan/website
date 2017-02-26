import 'normalize.css'
import './layout/index.css'
import {email} from '../settings'
import createNode from './createNode'
import {b64DecodeUnicode} from './b64'

const greetings = `<p class="greetings">
  <a href="mailto:${
    b64DecodeUnicode(email)
  }"><em>Contact</em></a>
</p>`

const containerNode = document.getElementsByTagName('main')[0]
const greetingsNode = createNode(greetings)
containerNode.appendChild(greetingsNode)
