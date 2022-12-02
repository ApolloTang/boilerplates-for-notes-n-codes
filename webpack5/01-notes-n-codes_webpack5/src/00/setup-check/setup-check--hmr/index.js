import hmrComponent from './hmr-component'

let hmrElement = hmrComponent()
document.body.appendChild(hmrElement)
if (module.hot) {
  module.hot.accept("./hmr-component.js", function () {
    console.log("Accepting the updated hot reloaded module!");
    document.body.removeChild(hmrElement);
    hmrElement = hmrComponent(); // Re-render the "component" to update the click handler
    document.body.appendChild(hmrElement);
  });
}
