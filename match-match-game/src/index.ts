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
