import './style.scss';
import { App } from './app';
import { Main } from './components/main/main';
import { Router } from './router/router';
import { routes } from './router/routes';
import { ModalPage } from './components/page/modalPage/modalPage';

// window.onload = () => {
new App(document.body).modalWindow();
new Main(new Router(routes)).init();
// };

const MENU = document.querySelector('.menu');
const MENUITEMS = document.querySelectorAll('.menu__item > a');

MENU?.addEventListener('click', (event: Event): void => {
  MENUITEMS.forEach(item => {
    item.classList.remove('active');
  })
  if (event.target instanceof Element) {
    event.target.classList.add('active');
  }
})
