import {Architect} from 'synaptic'

let perceptron
let twitter_data
let width, height
let iteration = 0;
var to = null;

let context

function getImageData(context, image) {
  let width = image.width, height = image.height

  context.drawImage(image, 0, 0)
  const {data} = context.getImageData(0, 0, width, height)

  return data
}

function iterate() {
  for (var x = 0; x < width; x+=1)
  {
    for(var y = 0; y < height; y+=1)
    {
      var dynamicRate =  .01/(1+.0005*iteration);

      perceptron.activate([x/width,y/height]);
      perceptron.propagate(dynamicRate, pixel(twitter_data,x,y));
    }
  }
  preview();
}

function pixel(data, x, y) {
  const red = data[((125 * y) + x) * 4]
  const green = data[((125 * y) + x) * 4 + 1]
  const blue = data[((125 * y) + x) * 4 + 2]

  return [red / 255, green / 255, blue / 255];
}

function preview() {
  iteration++

  var imageData = context.getImageData(0, 0, width, height);
  for (var x = 0; x < width; x++)
  {
    for(var y = 0; y < height; y++)
    {
      var rgb = perceptron.activate([x/width,y/height]);
      imageData.data[((125 * y) + x) * 4] = (rgb[0] )* 255;
      imageData.data[((125 * y) + x) * 4 + 1] = (rgb[1] ) * 255;
      imageData.data[((125 * y) + x) * 4 + 2] = (rgb[2] ) * 255;
    }
  }

  context.putImageData(imageData,0,0);
  requestAnimationFrame(iterate);
}

export default function completeImage(_context, image) {
  context = _context

  iteration = 0;
  to && clearTimeout(to);
  perceptron = new Architect.Perceptron(2,15,3);
      twitter_data = getImageData(context, image);

  preview();
}
