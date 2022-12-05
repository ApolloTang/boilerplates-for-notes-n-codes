import React from 'react'
import {createRoot} from "react-dom/client";

const reactContainer = document.createElement('div')
reactContainer.innerText =  'react component goes here'
reactContainer.id = 'root'
document.body.appendChild(reactContainer)

const MyComponent = () => (
  <div id="my-component">
   <span style={{ color: 'red' }}> Hello World </span>
  </div>
)

export default MyComponent

const root = createRoot(reactContainer!);
root.render(<MyComponent />);

