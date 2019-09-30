const pattern = new RegExp('^(?:[a-z]+:)?//', 'i')

export default function isAbsoluteUrl(url) {
  return pattern.test(url)
}
