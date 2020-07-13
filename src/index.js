import "./style.css";
import img from "./picure.jpeg";
function component() {
  var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");

  var myImg = new Image();
  myImg.src = img;
  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
