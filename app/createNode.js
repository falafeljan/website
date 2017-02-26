export default function createNode(nodeString) {
  const container = document.createElement('div')
  container.innerHTML = nodeString

  return container.firstChild
}
