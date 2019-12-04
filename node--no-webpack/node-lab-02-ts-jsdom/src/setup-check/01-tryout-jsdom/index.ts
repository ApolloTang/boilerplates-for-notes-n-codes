const jsdom = require('jsdom')
const { JSDOM } = jsdom

const {window:jsDomWindow} = new JSDOM(`
  <!DOCTYPE html>
    <p>Hello world</p>
`) as Window // case to Window type so you have interlisense

const p = jsDomWindow.document.querySelector('p')
p && console.log('textContent: ', p.textContent) // "Hello world"

