import BaseComponent from '../../base-components';
import AboutContainer from './about-container/about-container';

export default class AboutPage extends BaseComponent {
  private readonly container: AboutContainer;

  constructor() {
    super('section', ['about']);
    this.container = new AboutContainer();
    this.element.appendChild(this.container.element);
  }

  public render(): HTMLElement {
    return this.element;
  }
}
