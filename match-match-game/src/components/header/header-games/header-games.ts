import { BaseComponent } from '../../base-components';
import './header-games.scss';

export class HeaderGamerPersons extends BaseComponent {
  constructor() {
    super('div', ['header-games']);
    this.element.appendChild(HeaderGamerPersons.renderButtonStartStop());
  }

  private static renderButtonStartStop() {
    const button = new BaseComponent('a', [
      'header-games__btn',
      'btns-header',
      'state',
    ]);
    button.element.innerHTML = 'start game';
    button.element.setAttribute('href', '#/game');
    return button.element;
  }
}
