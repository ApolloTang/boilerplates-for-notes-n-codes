export default (text = 'Hello world') => {
  const myComponent = document.createElement('div')
  myComponent.style.color = 'red'
  myComponent.textContent = text
  return myComponent
}
