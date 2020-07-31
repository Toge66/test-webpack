// import _ from 'lodash'

// function component() {
//   const element = document.createElement('div')
//   element.innerHTML = 'Hello webpack'
//
//   const btn = document.createElement('button')
//   btn.innerHTML = 'Click me and check the console'
//   btn.onclick = printMe
//
//   element.appendChild(btn)
//
//   return element
// }
//
// document.body.appendChild(component())

function getComponent() {
  return import(/* webpackChunkName: "aaa" */ 'lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div')
      element.innerHTML = _.join(['Hello', 'webpack'], ' ')

      const btn = document.createElement('button')
      btn.innerHTML = 'Click me and check the console'

      element.appendChild(btn)

      return element
    })
    .catch((error) => 'An error occurred while loading the component')
}

getComponent().then((component) => {
  document.body.appendChild(component)
})
