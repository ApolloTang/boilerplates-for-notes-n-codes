import component from './component'

const myDivElement = component()
declare global {
  interface Window {
    myDivElement: HTMLDivElement
  }
}
window.myDivElement = myDivElement

document.body.appendChild(myDivElement)
