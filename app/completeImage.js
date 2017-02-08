import {Architect} from 'synaptic'

let perceptron
let twitter_data
let image, width, height, x, y
let iteration = 0;
let to = null;

let context

function getDynamicRate(iteration) {
  return .01 / (1 + .0005 * iteration)
}

function getImageData(context, image) {
  context.drawImage(
    image,
    x,
    y,
    width,
    height
  )

  const {data} = context.getImageData(x, y, width, height)
  return data
}

function iterate() {
  console.log(`Current iteration ${iteration}`)

  for (let x = 0; x < 125; x++) {
    for(let y = 0; y < 125; y++) {
      perceptron.activate([x/125,y/125]);

      perceptron.propagate(
        getDynamicRate(iteration),
        pixel(twitter_data, x, y)
      )
    }
  }

  preview()
}

function pixel(data, x, y) {
  const red = data[((125 * y) + x) * 4]
  const green = data[((125 * y) + x) * 4 + 1]
  const blue = data[((125 * y) + x) * 4 + 2]

  return [red / 255, green / 255, blue / 255];
}

function preview() {
  iteration++

  const imageData = context.getImageData(0, 0, 125, 125);
  for (var x = 0; x < 125; x++) {
    for(var y = 0; y < 125; y++) {
      const rgb = perceptron.activate([125 + x/125, y/125]);

      imageData.data[((125 * y) + x) * 4] = (rgb[0] )* 255;
      imageData.data[((125 * y) + x) * 4 + 1] = (rgb[1] ) * 255;
      imageData.data[((125 * y) + x) * 4 + 2] = (rgb[2] ) * 255;

      perceptron.activate([125 + x/125, y/125])
      perceptron.propagate(getDynamicRate(iteration), rgb)
    }
  }

  context.putImageData(imageData, 125, 0)

  setTimeout(() =>
    requestAnimationFrame(iterate), 100)
}

export default function completeImage(_context, _image) {
  context = _context
  image = _image

  iteration = 0;
  to && clearTimeout(to);
  perceptron = new Architect.Perceptron(2,15,3);

  width = 125
  height = 125

  x = 0
  y = 0

  twitter_data = getImageData(context, image);

  preview()
}
