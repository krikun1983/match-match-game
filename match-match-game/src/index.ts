import './style.scss';
import { App } from './app';
import { Main } from './components/main/main';
import { Router } from './router/router';
import { routes } from './router/routes';

// window.onload = () => {
new App(document.body).start();
new Main(new Router(routes)).init();
// };

