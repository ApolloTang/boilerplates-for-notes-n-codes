
const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)


import React from 'react'
import ReactDOM from 'react-dom'

type AppProps = {msg: string}
type AppState = {count: number}

class App extends React.Component<AppProps, AppState> {
  state = {count:0}

  // constructor(props:AppProps) {
  //   super(props)
  // }

  handleClick = () => {
    this.setState({count: this.state.count+1})
  }

  render() {
    return (
      <div onClick={this.handleClick} >
        {this.props.msg} {this.state.count}
      </div>
    )
  }
}

ReactDOM.render(
  <App msg={"hello world"}/>,
  document.getElementById('app')
);

