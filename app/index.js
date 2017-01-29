import 'normalize.css'
import './layout/hai.css'
import oh from './images/ohhai.png'

let image, canvas, context

function loadCanvas(url) {
  image = new Image()

  image.onload = () => {
    draw()
  }

  image.src = url
}


window.addEventListener('resize', resizeCanvas)

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  draw()
}

function draw() {
  const {width, height} = image
  const {innerWidth, innerHeight} = window

  context.drawImage(
    image,
    innerWidth/2 - width/2,
    innerHeight/2 - height/2,
    width,
    height
  )
}

window.addEventListener('load', () => {
  canvas = document.querySelector('canvas')
  context = canvas.getContext('2d')

  loadCanvas(oh)

  resizeCanvas()
  draw()
})
