import 'normalize.css'
import 'typeface-crimson-text'
import './layout/index.css'
import createNode from './createNode'
import {b64DecodeUnicode} from './b64'

const greetings = `<nav role="navigation">
  <a
    href="mailto:${b64DecodeUnicode(process.env.EMAIL_ADDRESS)}"
    class="contact"><em>Contact</em></a>

  <a
    href="https://github.com/fallafeljan" 
    class="github">GitHub</a>
</nav>`

const containerNode = document.getElementsByTagName('main')[0]
const greetingsNode = createNode(greetings)

containerNode.appendChild(greetingsNode)
