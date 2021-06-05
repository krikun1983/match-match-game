import './style.scss';
import { App } from './app';
import { Main } from './components/main/main';
import { Router } from './router/router';
import { routes } from './router/routes';

new App(document.body).modalWindow();
new Main(new Router(routes)).init();
