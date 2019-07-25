import React from 'react'
import ReactDOM from 'react-dom'
import {FunctionComponent} from 'react'

import { css } from '@emotion/core'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

console.log('this is main.jsx')


const style = css`
  color: hotpink;
`

const SomeComponent:FunctionComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

const anotherStyle = css({
  textDecoration: 'underline'
})

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
)

ReactDOM.render(
  <SomeComponent>
    <AnotherComponent />
  </SomeComponent>,
  document.getElementById('app')
);
