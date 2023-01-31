import './style.css';
import displayHtml from './pageUI.js';

const appContainer = document.querySelector('.app_container');

function loadHtml() {
  appContainer.innerHTML = displayHtml();
}

loadHtml();