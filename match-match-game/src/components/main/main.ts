import BaseComponent from '../base-components';
import Router from '../../router/router';
import Route from '../../app.types';
import './main.scss';

export default class Main extends BaseComponent {
  constructor(private router: Router) {
    super('main', ['main']);
    this.router.onRouteChange(route => this.renderCurrentComponent(route));
  }

  public init(): void {
    document.body?.append(this.element);
  }

  private renderCurrentComponent(route: Route): void {
    this.element.innerHTML = '';
    this.element.append(new route.Component().render());
  }
}
