import printMe from './print'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'

  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console'
  btn.onclick = printMe.bind(null, 'hello cache')

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')
    printMe()
  })
}
