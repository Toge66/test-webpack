import './style.css'
function component() {
  var element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].join(' ');
  element.classList.add('hello')

  return element;
}

document.body.appendChild(component());
