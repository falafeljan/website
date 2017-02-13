import 'normalize.css'
import './layout/index.css'
import oh from './images/ohhai.png'
import completeImage from './completeImage'

let image, canvas, context

async function loadImage(url) {
  return new Promise(resolve => {
    image = new Image()

    image.onload = () => resolve()
    image.src = url
  })
}

window.addEventListener('resize', resizeCanvas)

function resizeCanvas() {
  // no-op (currently)
}

window.addEventListener('load', async () => {
  canvas = document.querySelector('canvas')
  context = canvas.getContext('2d')

  await loadImage(oh)
  canvas.classList.add('canvas--visible')
  completeImage(context, image)

  resizeCanvas()
})
