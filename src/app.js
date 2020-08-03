// import printMe from './print'
import _ from 'lodash'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console'
  // btn.onclick = printMe.bind(null, 'hello cache')

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
