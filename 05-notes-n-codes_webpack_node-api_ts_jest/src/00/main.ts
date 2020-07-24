const textNode = document.createTextNode('div#app')
const container = document.createElement('div')
container.id = 'app'
container.appendChild(textNode)

document.body.appendChild(container)

console.log('this is main.js')

