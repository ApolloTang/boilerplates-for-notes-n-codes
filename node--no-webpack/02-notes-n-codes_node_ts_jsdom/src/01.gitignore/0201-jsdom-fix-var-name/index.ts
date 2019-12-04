const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export interface Global {
  //  This let you name variables document and window and
  //  assign them with jsdom.document and jsdom.window.
  //  see: https://stackoverflow.com/a/46594373/3136861
  document: Document;
  window: Window;
}
// declare var global: Global;

const window = (new JSDOM(`
  <!DOCTYPE html>
    <div id="app-container">Hello world</div>
  `)).window as Window
const document = window.document

const container = document.getElementById('app-container')
container &&  console.log(container.textContent); // Hello world

