import './styles.css';
import logo from "./images/logo.png";

function content() {
  const element = document.createElement('div');

  element.innerHTML = `
    <h1>Hello Webpack Project</h1>
    <img src="${logo}" alt="Logo">
  `;

  return element;
}

document.body.appendChild(content());