import './style.scss';
import { App } from './app';
import { Main } from './components/main/main';
import { Router } from './router/router';
import { routes } from './router/routes';

// window.onload = () => {
new App(document.body).start();
new Main(new Router(routes)).init();
// };

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item > a');

menu?.addEventListener('click', (event: Event) => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
  if (event.target instanceof Element) {
    event.target.classList.add('active');
  }
})
