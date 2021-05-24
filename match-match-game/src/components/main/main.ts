import './main.scss';
import { BaseComponent } from '../base-components';
import { Router } from '../../router/router';
import { Route } from '../../app.api';
import { AboutPage } from '../page/aboutPage';
import { ScorePage } from '../page/scorePage';
import { GamePage } from '../page/gamePage';
import { routes } from '../../router/routes';

export class Main extends BaseComponent {
  constructor(private router: Router) {
    super('main', ['main']);
    this.router.onRouteChange((route) => this.renderCurrentComponent(route));
  }

  public init(): void {
    document.body.append(this.element);
  }

  private renderCurrentComponent(route: Route): void {
    this.element.innerHTML = '';
    this.element.append(new route.Component().render());
  }
}
