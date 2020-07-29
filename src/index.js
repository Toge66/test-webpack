import './style.css'
import img from './111.jpg'

function component() {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].join(' ');
  element.classList.add('hello')

  const image = new Image()
  image.src = img
  image.classList.add('image')

  element.appendChild(image)

  return element;
}

document.body.appendChild(component());
