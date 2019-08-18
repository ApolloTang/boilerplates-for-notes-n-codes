
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)


import React from 'react'
import ReactDOM from 'react-dom'

type AppProps = {msg: string}
const App: React.FC<AppProps> = ({msg}) => <div>{msg}</div>

ReactDOM.render(
  <App msg={"hello world"}/>,
  document.getElementById('app')
);

