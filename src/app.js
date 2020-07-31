import printMe from './print'
import { err } from './error'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console'
  btn.onclick = printMe
  err()

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
